let myButton = document.getElementById('new-username');
let myWelcomeMessage = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        //setUserName();
        alert('Name cannot be empty!')
    } else {
        localStorage.setItem('name', myName);
        myWelcomeMessage.innerHTML = 'Welcome Back, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myWelcomeMessage.textContent = 'Welcome Back, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}