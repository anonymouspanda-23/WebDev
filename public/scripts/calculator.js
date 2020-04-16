const myHeading = document.querySelector('h1');
myHeading.textContent = 'Number Multiplier';

let multiplyNumbers = document.getElementById("multiply");
let result = document.getElementById("result");

function multiply() {
    let number1 = document.getElementById("number-1").value;
    let number2 = document.getElementById("number-2").value;
    if (number1 === "" || number2 === "") {
        result.innerHTML = "The values cannot be empty!";
    } else {
        let value = number1 * number2;
        result.innerHTML = "The result of " + number1.toString() + " * " + number2.toString() + " is " + value.toString() + ".";
    }
}

multiplyNumbers.onclick = function() {
    multiply();
}