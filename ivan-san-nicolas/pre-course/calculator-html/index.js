const result = document.getElementById("result");
const screen = document.getElementById("screen");
const clear = document.getElementById("AC");
const coma = document.getElementById("coma");
const idNumbers = ["number1","number2","number3","number4","number5","number6","number7","number8","number9","number0",]
const operations = ["add","substract","multiply","divide"];
var currentNumber = '';
var previousNumber = '';
var currentOperation = '';

for (var i = 0; i < idNumbers.length; i++){
    var number = document.getElementById(idNumbers[i]);
    number.addEventListener('click',function(event){
        if (currentNumber === '0') currentNumber = '';
        currentNumber += event.target.innerText;
        screen.innerText = currentNumber;
    })
}
for (var i = 0; i < operations.length; i++){
    var operator = document.getElementById(operations[i]);
    operator.addEventListener('click',function(event){
        previousNumber = currentNumber;
        currentNumber = '';
        currentOperation = event.target.innerText;
        screen.innerText = currentOperation;
    })
}
result.addEventListener('click',function(){
    var operationResult;
    switch (currentOperation) {
        case '+':
            operationResult = previousNumber + currentNumber;
            break;
        case '-':
            operationResult = previousNumber - currentNumber;
            break;
        case 'x':
            operationResult = previousNumber * currentNumber;
            break;
        case '÷':
            operationResult = previousNumber / currentNumber;
            break;
        case '':
            operationResult = currentNumber;
            break;
        default:
            break;
    }
    screen.innerText = operationResult;
    previousNumber = currentNumber;
    currentNumber = operationResult;
});
clear.addEventListener('click',function(){
    currentNumber = '0';
    previousNumber = '';
    currentOperation = '';
    screen.innerText = '';
});
coma.addEventListener('click',function(event){
    currentNumber += '.';
    screen.innerText = currentNumber;
});