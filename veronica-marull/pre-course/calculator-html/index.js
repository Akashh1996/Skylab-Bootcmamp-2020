const result = document.getElementById('result');
const display = document.getElementById('display');
const clear = document.getElementById('reset');
const del = document.getElementById('delete');
const idNumbers = ['number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9', 'number0','decimal'];
const operations = ['addition', 'minus', 'multiply', 'division'];
let currentNumber = '';
let previousNumber = null;
let currentOperation = null;

for (let i = 0; i < idNumbers.length; i++) {
    const number = document.getElementById(idNumbers[i]);
    number.addEventListener('click', function (event) {
        currentNumber += event.target.innerText;
        display.innerHTML = currentNumber;
    })
}

for (let i = 0; i < operations.length; i++) {
    const operation = document.getElementById(operations[i]);
    operation.addEventListener('click', function (event) {
        previousNumber = currentNumber;
        currentNumber = ' ';
        currentOperation = event.target.innerText;
        display.innerHTML = currentOperation;
    })
}

result.addEventListener('click', function () {

    let resultOperation
    switch (currentOperation) {
        case '+':
            resultOperation = Number(previousNumber) + Number(currentNumber)
            break;
        case '-':
            resultOperation = Number(previousNumber) - Number(currentNumber)
            break;
        case '/':
            resultOperation = Number(previousNumber) / Number(currentNumber)
            break;
        case '*':
            resultOperation = Number(previousNumber) * Number(currentNumber)
            break;
        default:
            console.log('algo ha ido mal')
            break;
    }
    currentNumber = resultOperation;
    display.innerHTML = currentNumber;
})

clear.addEventListener('click', function () {
    currentNumber = '';
    currentOperation = null;
    previousNumber = null;
    display.innerHTML = currentNumber;
})

del.addEventListener('click', function () {
    currentNumber = currentNumber.slice(0, -1);
    display.innerHTML = currentNumber;
}) 