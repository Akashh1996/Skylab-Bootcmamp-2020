// The keys and notes variables store the piano keys
const screen = document.getElementById('screen');
const miniscreen = document.getElementById('miniscreen');
const eraseAllButton = document.getElementById('erase-all');
const eraseNumberButton = document.getElementById('erase-number');
const eraseButton = document.getElementById('erase');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');
const symbols = ['+', '-', '*', '/'];
let savedNumber = 0.0;
let symbol = '';
let lastPressedButton = '0';
let actualNumber = 0;

function addNumber(numButton) {
	actualNumber = screen.innerHTML;
	const number = numButton.innerHTML;

	if (screen.innerHTML === 'Error: division by zero') {
		eraseAll();
	} else if (actualNumber === '0' && number === '.') {
		screen.innerHTML = '0.';
	} else if (number === '.' && actualNumber.includes('.')) {
		lastPressedButton = number;
		return;
	} else if (actualNumber === '0' || lastPressedButton === '=') {
		screen.innerHTML = number;
	} else {
		screen.innerHTML += number;
	}

	lastPressedButton = number;
}

function eraseAll() {
	savedNumber = 0.0;
	screen.innerHTML = '0';
	miniscreen.innerHTML = '';
	lastPressedButton = '0';
	screen.style.fontSize = '';
	symbol = '';
}

function eraseNumber() {
	if (screen.innerHTML === 'Error: division by zero') {
		eraseAll();
		return;
	}

	screen.innerHTML = '0';
	lastPressedButton = '0';
}

function erase() {
	actualNumber = screen.innerHTML;

	if (screen.innerHTML === 'Error: division by zero') {
		eraseAll();
		return;
	} else if (actualNumber.length > 1) {
		screen.innerHTML = actualNumber.substring(0, actualNumber.length - 1);
	} else if (actualNumber.length === 1) {
		screen.innerHTML = '0';
	}

	if (screen.innerHTML === '-') {
		screen.innerHTML = '0';
	}
}

function operation(operationButton) {
	symbol = operationButton.innerHTML;

	if (screen.innerHTML === 'Error: division by zero') {
		eraseAll();
		return;
	} else if (symbols.includes(lastPressedButton)) {
		miniscreen.innerHTML =
			miniscreen.innerHTML.substring(0, miniscreen.innerHTML.length - 1) +
			symbol;
	} else if (
		!Number.isNaN(parseInt(lastPressedButton)) &&
		savedNumber !== 0.0
	) {
		results();
		actualNumber = screen.innerHTML;
		savedNumber = parseFloat(actualNumber);
		miniscreen.innerHTML = actualNumber + ' ' + symbol;
		screen.innerHTML = '0';
	} else if (
		lastPressedButton === '=' ||
		!Number.isNaN(parseInt(lastPressedButton))
	) {
		actualNumber = screen.innerHTML;
		savedNumber = parseFloat(actualNumber);
		miniscreen.innerHTML = actualNumber + ' ' + symbol;
		screen.innerHTML = '0';
	}

	lastPressedButton = symbol;
}

function results() {
	if (screen.innerHTML === 'Error: division by zero') {
		eraseAll();
		return;
	}

	if (lastPressedButton !== '=') {
		actualNumber = parseFloat(screen.innerHTML);
	}

	miniscreen.innerHTML =
		savedNumber.toString() + ' ' + symbol + ' ' + actualNumber;
	let result = 0;

	if (symbol === '+') {
		result = savedNumber + actualNumber;
	} else if (symbol === '-') {
		result = savedNumber - actualNumber;
	} else if (symbol === '*') {
		result = savedNumber * actualNumber;
	} else if (symbol === '/') {
		if (actualNumber === 0 || actualNumber === 0.0) {
			screen.innerHTML = 'Error: division by zero';
			screen.style.fontSize = '30px';
			return;
		} else {
			result = savedNumber / actualNumber;
		}
	}

	screen.innerHTML = result;
	lastPressedButton = '=';
	savedNumber = result;
}

num1.onclick = function () {
	addNumber(num1);
};

num2.onclick = function () {
	addNumber(num2);
};

num3.onclick = function () {
	addNumber(num3);
};

num4.onclick = function () {
	addNumber(num4);
};

num5.onclick = function () {
	addNumber(num5);
};

num6.onclick = function () {
	addNumber(num6);
};

num7.onclick = function () {
	addNumber(num7);
};

num8.onclick = function () {
	addNumber(num8);
};

num9.onclick = function () {
	addNumber(num9);
};

num0.onclick = function () {
	addNumber(num0);
};

comma.onclick = function () {
	addNumber(comma);
};

eraseAllButton.onclick = function () {
	eraseAll();
};

eraseNumberButton.onclick = function () {
	eraseNumber();
};

eraseButton.onclick = function () {
	erase();
};

sumButton.onclick = function () {
	operation(sumButton);
};

subtractButton.onclick = function () {
	operation(subtractButton);
};

multiplyButton.onclick = function () {
	operation(multiplyButton);
};

divideButton.onclick = function () {
	operation(divideButton);
};

equalsButton.onclick = function () {
	results();
};

let key;

document.onkeydown = function (event) {
	key = event.key;
	switch (key) {
		case '1':
			addNumber(num1);
			break;
		case '2':
			addNumber(num2);
			break;
		case '3':
			addNumber(num3);
			break;
		case '4':
			addNumber(num4);
			break;
		case '5':
			addNumber(num5);
			break;
		case '6':
			addNumber(num6);
			break;
		case '7':
			addNumber(num7);
			break;
		case '8':
			addNumber(num8);
			break;
		case '9':
			addNumber(num9);
			break;
		case '0':
			addNumber(num0);
			break;
		case '.':
			addNumber(comma);
			break;
		case '+':
			operation(sumButton);
			break;
		case '-':
			operation(subtractButton);
			break;
		case '*':
			operation(multiplyButton);
			break;
		case '/':
			operation(divideButton);
			break;
		case 'Enter':
			results();
			break;
		case 'Backspace':
			erase();
			break;
		case 'Delete':
			eraseNumber();
			break;
		case 'Home':
			eraseAll();
			break;
	}
};
