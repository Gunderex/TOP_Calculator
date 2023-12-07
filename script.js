let result = "";
let operator = ""
let lastOperator = ""
let lastNum1 = ""
let num1 = "";
let num2 = "";
let currentDisplay = lastNum1 + " " + lastOperator + " " + num2 + " = " + result;

function operate(num1, num2, operator) {
    if (num2 == "") {
        return;
    } else if (operator == "btnPlus") {
        const add = function(num1, num2) {
            result = num1 + num2;
            lastOperator = operator;
            lastNum1 = num1;
            num1 = result;
            operator = "";
            return result;
        };
    } else if (operator == "btnMinus") {
        const subtract = function(num1, num2) {
            result = num1 - num2;
            lastOperator = operator;
            lastNum1 = num1;
            num1 = result;
            operator = "";
            return result;
        };
    } else if (operator == "btnMultiply") {
        const multiply = function(num1, num2) {
            result = num1 * num2;
            lastOperator = operator;
            lastNum1 = num1;
            num1 = result;
            operator = "";
            return result;
        };
    } else if (operator == "btnDivide") {
        const divide = function(num1, num2) {
            result = num1 / num2;
            lastOperator = operator;
            lastNum1 = num1;
            num1 = result;
            operator = "";
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
     return operator = event.target.id;
 }

 function clickNumber(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
     } else if (operator == "" && result == "") {
        num1 += ("'" + event.target.textContent + "'");
     }else if (result !== "") {
        num1 = result;
        result = "";
        num2 += ("'" + event.target.textContent + "'");
     } else if (operator !== "") {
        num2 += ("'" + event.target.textContent + "'");
     }
 }

const display = document.querySelector("#display");
display.textContent = currentDisplay;
const equal = document.querySelector("#btnEqual").addEventListener("click", clickEqual);
const operatorButton = document.querySelectorAll(".operatorPad").addEventListener("click", clickOperator);
const numberButton = document.querySelector(".numPad").addEventListener("click", clickNumber);