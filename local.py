#!/usr/bin/env python3
import time
import socketserver
from server import Server

HOST_NAME = 'Local Network'
PORT_NUMBER = 8000

if __name__ == '__main__':

    # "" is the client which can request the site?
    # (localhost for localhost access only, blank for local area network access)
    with socketserver.TCPServer(("", PORT_NUMBER), Server) as httpd:

        # print server port and time it went live
        print(time.asctime(), 'Server UP - %s:%s' % (HOST_NAME, PORT_NUMBER))
        try:
            # run server forever
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
        # close server
        httpd.server_close()

        # print server port and time it went down
        print(time.asctime(), 'Server DOWN - %s:%s' % (HOST_NAME, PORT_NUMBER))
