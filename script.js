let result = "";
let operator = ""
let lastOperator = ""
let lastNum1 = ""
let num1 = "";
let num2 = "";

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
     operator = event.target.id;
     lastOperator = event.target.textContent;
     return operator;
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
const displayNum1 = document.querySelector("#num1");
    displayNum1.textContent = num1;

const displayNum2 = document.querySelector("#num2");
    displayNum2.textContent = num2;

const displayOperator = document.querySelector("#lastOperator");
    displayOperator.textContent = lastOperator;

const displayResult = document.querySelector('#result');
    displayResult.textContent = result;

const equal = document.querySelector("#btnEqual").addEventListener("click", clickEqual);
const operatorButton = document.querySelectorAll(".operatorPad");
const numberButton = document.querySelectorAll(".numPad");

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", clickOperator); 
}
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", clickNumber);
}