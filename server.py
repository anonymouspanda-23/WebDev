import os
import re

from http.server import BaseHTTPRequestHandler

from routes.main import routes

from response.staticHandler import StaticHandler
from response.templateHandler import TemplateHandler
from response.badRequestHandler import BadRequestHandler


class Server(BaseHTTPRequestHandler):
    def do_HEAD(self):
        return

    def do_GET(self):
        split_path = os.path.splitext(self.path)  # get the server path requested after the port, and get extension
        request_extension = split_path[1]  # set var as extension

        if request_extension == "" or request_extension == ".html":  # if requested html file
            if request_extension == ".html":
                self.path = re.sub(".html", "", self.path)
            if self.path in routes:  # if requested route is available
                handler = TemplateHandler()
                handler.find(routes[self.path])
            else:
                handler = BadRequestHandler()
        elif request_extension == ".py":
            handler = BadRequestHandler()
        else:
            handler = StaticHandler()
            handler.find(self.path)

        self.respond({
            'handler': handler
        })

    def handle_http(self, status_code, handler):
        self.send_response(status_code)

        if status_code == 200:
            content = handler.getContents()
            self.send_header('Content-type', handler.getContentType())
        else:
            content = "404 Not Found"

        self.end_headers()

        if isinstance(content, (bytes, bytearray)):
            return content

        return bytes(content, 'UTF-8')

    def respond(self, opts):
        print("Handler Data: " + str(opts['handler'].getStatus()))
        response = self.handle_http(opts['handler'].getStatus(), opts['handler'])
        self.wfile.write(response)
