let currentDisplay = entry1 + " " + operator + " " + entry2 + " = " + result;
let result = "";
let operator = ""
let entry1 = "";
let entry2 = "";

function operate(num1, num2, operator) {
    if (operator == "btnPlus") {
        const add = function(num1, num2) {
            result = num1 + num2;
            operator = "";
            entry1 = "";
            entry2 = "";
            return result;
        };
    } else if (operator == "btnMinus") {
        const subtract = function(num1, num2) {
            result = num1 - num2;
            operator = "";
            entry1 = "";
            entry2 = "";
            return result;
        };
    } else if (operator == "btnMultiply") {
        const multiply = function(num1, num2) {
            result = num1 * num2;
            operator = "";
            entry1 = "";
            entry2 = "";
            return result;
        };
    } else if (operator == "btnDivide") {
        const divide = function(num1, num2) {
            result = num1 / num2;
            operator = "";
            entry1 = "";
            entry2 = "";
            return result;
        };
    }
}

function clickEqual(event) {
    if (event.target.tagName !== "BUTTON") {
       return;
    } 
    operate();

 }

 function clickOperator(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
     }
     return operator = event.target.textContent;
 }

 function

const display = document.querySelector("#display");
display.textContent = currentDisplay;
const equal = document.querySelector("#btnEqual").addEventListener("click", clickEqual);