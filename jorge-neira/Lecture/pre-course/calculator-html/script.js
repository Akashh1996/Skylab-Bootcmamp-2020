'use strict';
///////////////////////////VARIABLES////////////////////////////

const numbersButton = document.querySelectorAll('[data-numbers]');
const operandsButton = document.querySelectorAll('[data-operand]');
const clearAllButton = document.querySelector('[data-all-clear]');
const eraseButton = document.querySelector('[data-erase-current-value]');
const resultButton = document.querySelector('[data-result]');
let currentValueOnDisplay = document.querySelector(
	'[data-current-value-display]'
);
let previousValueOnDisplay = document.querySelector(
	'[data-previous-value-display]'
);
let previousNumber = '';
let currentNumber = '';
let currentOperand = null;

///////////////////////////FUNCTIONS////////////////////////////

function allClear() {
	previousNumber = '';
	currentNumber = '';
	currentOperand = null;
}

function eraseNumbers() {
	currentNumber = currentNumber.slice(0, -1);
}

function calculationNumbers() {
	let result = '';
	const currNumber = parseFloat(currentNumber);
	const prevNumber = parseFloat(previousNumber);
	if (currentNumber != '' && previousNumber === '' && currentOperand === null)
		return;
	if (currentNumber === '' && previousNumber != '' && currentOperand != null)
		return;
	if (currentOperand === '÷') result = prevNumber / currNumber;
	if (currentOperand === '*') result = prevNumber * currNumber;
	if (currentOperand === '+') result = prevNumber + currNumber;
	if (currentOperand === '-') result = prevNumber - currNumber;
	currentNumber = result.toString();
	previousNumber = '';
	currentOperand = null;
}

function operatorSelected(operator) {
	if (currentNumber === '') return;
	if (currentNumber === '' && currentOperand != null)
		return (currentOperand = operator);
	if (previousNumber != '' && currentNumber != '' && currentOperand != null)
		calculationNumbers();
	currentOperand = operator;
	previousNumber = currentNumber;
	currentNumber = '';
}

function appendingNumbers(number) {
	if (number === '.' && currentNumber.includes('.')) return;
	currentNumber = currentNumber + number;
}

function processingNumbers(number) {
	const numberToProcess = number;
	const integerDigits = parseFloat(numberToProcess.split('.')[0]);
	const decimalDigits = numberToProcess.split('.')[1];
	let intergerDisplay;
	if (isNaN(integerDigits)) {
		intergerDisplay = '';
	} else {
		intergerDisplay = integerDigits.toLocaleString('en');
	}
	if (decimalDigits === undefined) {
		return `${intergerDisplay}`;
	} else {
		return `${intergerDisplay}.${decimalDigits}`;
	}
}

function updateDisplay() {
	currentValueOnDisplay.innerText = processingNumbers(currentNumber);
	if (currentOperand != null)
		previousValueOnDisplay.innerText = `${processingNumbers(
			previousNumber
		)} ${currentOperand}`;
	else previousValueOnDisplay.innerText = '';
}

///////////////////////////EVENTS////////////////////////////

numbersButton.forEach((button) => {
	button.addEventListener('click', function (number) {
		appendingNumbers(number.target.innerText);
		updateDisplay();
	});
});

operandsButton.forEach((button) => {
	button.addEventListener('click', function (operator) {
		operatorSelected(operator.target.innerText);
		updateDisplay();
	});
});

clearAllButton.addEventListener('click', () => {
	allClear();
	updateDisplay();
});

eraseButton.addEventListener('click', () => {
	eraseNumbers();
	updateDisplay();
});

resultButton.addEventListener('click', () => {
	calculationNumbers();
	updateDisplay();
});
