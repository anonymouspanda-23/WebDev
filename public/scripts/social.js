let confucius = document.getElementById("confucius");
let positivity = document.getElementById("positivity");

confucius.onclick = function() {
    window.open("http://www.brainyquote.com/quotes/authors/c/confucius.html", "_blank");
}

positivity.onclick = function() {
    window.open("http://www.brainyquote.com/quotes/authors/c/confucius.html", "_blank");
}

//todo: fix left-click open and view in new tab but middle click open and not focused
confucius.addEventListener('mousedown', function(event) {
    console.log(event.button);
    // todo: add checks for mouse configuration and check mouse button values based on config and browser
    if (event.button == 1) {
        window.open("http://www.brainyquote.com/quotes/authors/c/confucius.html");
    }
});

positivity.addEventListener('mousedown', function(event) {
    console.log(event.button);
    if (event.button == 1) {
        window.open("http://www.affirmationsforpositivethinking.com/index.htm", "_blank");
    }
});
