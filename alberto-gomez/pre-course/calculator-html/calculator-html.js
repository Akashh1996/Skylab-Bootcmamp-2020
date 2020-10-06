const equal = document.getElementById("key-equal");
const clear = document.getElementById("key-c");
const allClear = document.getElementById("key-ac");
const idNumbers = [
	"key-0",
	"key-dot",
	"key-1",
	"key-2",
	"key-3",
	"key-4",
	"key-5",
	"key-6",
	"key-7",
	"key-8",
	"key-9",
];
const operands = ["key-plus", "key-minus", "key-mult", "key-div"];
let currentNumber = "";
let previousNumber = null;
let currentOperation = null;

// CLICK EN LOS NÚMEROS

for (i = 0; i < idNumbers.length; i++) {
	const numKeyPress = document.getElementById(idNumbers[i]);
	numKeyPress.addEventListener("click", function (event) {
		currentNumber += event.target.innerText;
		cu_ope.innerHTML = currentNumber;
	});
}

// CLICK EN LOS OPERADORES

for (i = 0; i < operands.length; i++) {
	const opKeyPress = document.getElementById(operands[i]);
	opKeyPress.addEventListener("click", function (event) {
		previousNumber = currentNumber;
		pr_ope.innerHTML = currentNumber + event.target.innerText;
		cu_ope.innerHTML = "";
		currentNumber = "";
		currentOperation = event.target.innerText;
	});
}

// CLICK EN EL IGUAL

const eqKeyPress = document.getElementById("key-equal");
eqKeyPress.addEventListener("click", () => {
	let resultOperation = "";
	switch (currentOperation) {
		case "+":
			resultOperation = Number(previousNumber) + Number(currentNumber);
			break;
		case "-":
			resultOperation = Number(previousNumber) - Number(currentNumber);
			break;
		case "*":
			resultOperation = Number(previousNumber) * Number(currentNumber);
			break;
		case "÷":
			resultOperation = Number(previousNumber) / Number(currentNumber);
			break;
	}
	cu_ope.innerHTML = resultOperation;
	pr_ope.innerHTML += currentNumber;
});

// CLICK EN "CLEAR"

const cKeyPress = document.getElementById("key-c");
cKeyPress.addEventListener("click", () => {
	let lastUpdatedNumber = currentNumber.slice(0, -1);
	currentNumber = lastUpdatedNumber;
	cu_ope.innerHTML = lastUpdatedNumber;
});

// CLICK EN "ALL CLEAR"

const acKeyPress = document.getElementById("key-ac");
acKeyPress.addEventListener("click", () => {
	previousNumber = null;
	currentNumber = "";
	pr_ope.innerHTML = "";
	cu_ope.innerHTML = "";
});
