let result = "";
let operator = ""
let lastOperator = ""
let lastNum1 = ""
let num1 = "";
let num2 = "";

/* Math function called when = is pressed */
function operate() {
    if (num2 == "") {
        return;
    } else if (operator == "btnPlus") {
            result = Number(num1) + Number(num2);
            operator = ""; 
    } else if (operator == "btnMinus") {
            result = Number(num1) - Number(num2);
            operator = "";
    } else if (operator == "btnMultiply") {
            result = Number(num1) * Number(num2);
            operator = "";
    } else if (operator == "btnDivide") {
            result = Number(num1) / Number(num2);
            operator = "";
    }
}

/* Click handler functions for NumPad, Operators, Equals, and Clear */
function clickEqual(event) {
    if (event.target.tagName !== "BUTTON") {
       return;
    } 
    operate(num1, num2, operator);
    console.log("Result: "+result);
    displayNum1.textContent = num1;
    displayOperator.textContent = lastOperator;
    displayNum2.textContent = num2;
    displayResult.textContent = "= "+result;

 }

 function clickOperator(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
     } else if (result == "") {
     operator = event.target.id;
     lastOperator = event.target.textContent;
     console.log("Operator: "+lastOperator);
     displayNum1.textContent = num1;
     displayOperator.textContent = lastOperator;
     displayNum2.textContent = num2;
     } else if (result !=="") {
        operator = event.target.id;
        lastOperator = event.target.textContent;
        num1 = result;
        num2 = "";
        result = "";
        console.log("Operator: "+lastOperator);
        displayNum1.textContent = num1;
        displayOperator.textContent = lastOperator;
        displayNum2.textContent = num2;
        displayResult.textContent = result;
     }
 }

 function clickNumber(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
     } else if (operator == "" && result == "") {
        num1 = num1.concat(event.target.textContent);
    //  }else if (result !== "") {
    //     num1 = result;
    //     result = "";
    //     num2.concat(event.target.textContent);
     } else if (operator !== "") {
        num2 = num2.concat(event.target.textContent);
     }
     displayNum1.textContent = num1;
     displayOperator.textContent = lastOperator;
     displayNum2.textContent = num2;
     console.log("Num1: "+num1);
     console.log("Num2: "+num2);
 }

 function clickClear(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

        num1 = "";
        num2 = "";
        result = "";
        operator = "";
        lastOperator = "";
        displayNum1.textContent = num1;
        displayOperator.textContent = lastOperator;
        displayNum2.textContent = num2;
        displayResult.textContent = result;
 }

 /* Constants for buttons and display */
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

const clearButton = document.querySelector("#btnClear").addEventListener('click', clickClear);