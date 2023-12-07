let currentDisplay = num1 + " " + lastOperator + " " + num2 + " = " + result;
let result = "";
let operator = ""
let lastOperator = ""
let num1 = "";
let num2 = "";

function operate(num1, num2, operator) {
    if (operator == "btnPlus") {
        const add = function(num1, num2) {
            result = num1 + num2;
            lastOperator = operator
            operator = ""
            return result;
        };
    } else if (operator == "btnMinus") {
        const subtract = function(num1, num2) {
            result = num1 - num2;
            lastOperator = operator
            operator = ""
            return result;
        };
    } else if (operator == "btnMultiply") {
        const multiply = function(num1, num2) {
            result = num1 * num2;
            lastOperator = operator
            operator = ""
            return result;
        };
    } else if (operator == "btnDivide") {
        const divide = function(num1, num2) {
            result = num1 / num2;
            lastOperator = operator
            operator = ""
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
     } else if (operator == "") {
        num1 += ("'" + event.target.textContent + "'");
     } else if (operator !== "") {
        num2 += ("'" + event.target.textContent + "'");
     }
 }

const display = document.querySelector("#display");
display.textContent = currentDisplay;
const equal = document.querySelector("#btnEqual").addEventListener("click", clickEqual);