'use strict'

const result = document.getElementById("operacion");
const display = document.getElementById("screen");
const idNumbers = ['number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9', 'number0'];
const operations = ['suma', 'resta', 'mult', 'div'];
let lastNumber = '';
let firstNumber = '';
let lastOperation = '';
let resultOperation = '';
let clear = document.getElementById("eliminar");

for (let i = 0; i < idNumbers.length; i++) {
    let number = document.getElementById(idNumbers[i]);
    number.addEventListener('click', function (event) {
        lastNumber += event.target.innerText;
        display.innerHTML = lastNumber;
    });
}

for(let i = 0; i<operations.length; i++){
    const sign = document.getElementById(operations[i]);
    sign.addEventListener('click',function(event){
        firstNumber = lastNumber;
        lastNumber = '';
        display.innerText = event.target.innerHTML;
        lastOperation = event.target.innerText;
    });
}

result.addEventListener('click', function () {
    if(lastNumber != '' && firstNumber != '' && lastOperation != ''){
        switch (lastOperation) {
            case '+':
                resultOperation = Number(firstNumber) + Number(lastNumber)
                break;
            case '-':
                resultOperation = Number(firstNumber) - Number(lastNumber)
                break;
            case '/':
                resultOperation = Number(firstNumber) / Number(lastNumber)
                break;
            case '*':
                resultOperation = Number(firstNumber) * Number(lastNumber)
                break;
        }
        
        lastNumber = resultOperation;   
        display.innerHTML = resultOperation;   
    }
});

clear.addEventListener('click', function () {
    lastNumber = '';
    lastOperation = '';
    firstNumber = '';
    display.innerHTML = '';
});
