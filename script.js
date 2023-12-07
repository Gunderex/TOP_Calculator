let result = "";

function operate(num1, num2, operator) {
    if (operator == "+") {
        const add = function(num1, num2) {
            result = num1 + num2;
            return result;
        };
    } else if (operator == "-") {
        const subtract = function(num1, num2) {
            result = num1 - num2;
            return result;
        };
    } else if (operator == "*") {
        const multiply = function(num1, num2) {
            result = num1 * num2;
            return result;
        };
    } else if (operator == "/") {
        const divide = function(num1, num2) {
            result = num1 / num2;
            return result;
        };
    }
}

const display = document.querySelector("#display");
display.textContent = result;
const equal = document.querySelector("#btnEqual");