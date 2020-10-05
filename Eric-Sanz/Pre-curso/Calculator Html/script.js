const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const resultButton = document.querySelector('[data-result]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousOperationText = document.querySelector('[data-previous-operation]');
const actualOperationText = document.querySelector('[data-actual-operation]');
let actualNumber = '';
let previousNumber = '';
let operation = '';
let readyToReset = false;

let clear = () => {
    actualNumber = '';
    previousNumber = '';
    operation = '';
    readyToReset = false;
}

let deleteNumber = () => actualNumber = actualNumber.toString().slice(0,-1);

let appendNumber = number => {
    if (number === '.' && actualNumber.includes('.')) return;
    actualNumber = actualNumber.toString() + number.toString();
}

let operationOptions = operation => {
    if (actualNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = operation;
    previousNumber = actualNumber;
    actualNumber = '';
}

let calculate = () => {
    let calculation;
    const previous = parseFloat(previousNumber);
    const actual = parseFloat(actualNumber);
    if (isNaN(previous) || isNaN(actual)) return readyToReset = true;
    switch (operation) {
        case '+':
            calculation = previous + actual;
            break;
        case '-':
            calculation = previous - actual;
            break;
        case '*':
            calculation = previous * actual;
            break;
        case '÷':
            calculation = previous / actual;
            break;
        case '%':
            calculation = (previous * actual) / 100;
            break;
        default:
            return;
    }
    readyToReset = true;
    actualNumber = calculation;
    operation = '';
    previousNumber = '';
}

let getDisplayNumber = number => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0});
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

let updateDisplay = () => {
    if (operation != null) {
        previousOperationText.innerText = `${getDisplayNumber(previousNumber)} ${operation} ${getDisplayNumber(actualNumber)}`;
    }
}

let updateUpperDisplay = () => actualOperationText.innerText = getDisplayNumber(actualNumber);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (previousNumber === '' && actualNumber !== '' && readyToReset) {
            actualNumber = '';
            readyToReset = false;
        }
        appendNumber(button.innerText);
        updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operation !== button.innerText) {
            operation = button.innerText
        }
        operationOptions(button.innerText);
        updateDisplay();
    })
})

resultButton.addEventListener('click', button => {
    calculate();
    updateUpperDisplay();
})

resetButton.addEventListener('click', button => {
    clear();
    updateDisplay();
    updateUpperDisplay();
})

deleteButton.addEventListener('click', button => {
    deleteNumber();
    updateDisplay();
})
