// Mediante HTML y CSS realizar una calculadora convencional

//Botones
const numButton = document.getElementsByName("numero");
const opButton = document.getElementsByName("operador");
const equalButton = document.getElementsByName("igual")[0];
const delButton = document.getElementsByName("borrar")[0];

//Resultados mostrados por display
let result = document.getElementById("result");

//Operaciones a realizar
let currentOp = "";
let prevOp = "";
let operation = undefined;

function useOperator(op) {
  if (currentOp === "") return;
  if (prevOp !== "") {
    calculate();
  }
  operation = op.toString();
  prevOp = currentOp;
  currentOp = "";
}

function addNumber(num) {
  currentOp = currentOp.toString() + num.toString();
  updateDisplay();
}

function initialize() {
  currentOp = "";
  prevOp = "";
  operation = undefined;
}

function updateDisplay() {
  let display = document.getElementById("result");
  display.innerHTML = currentOp;
}

function calculate() {
  let calculation;
  const previous = parseFloat(prevOp);
  const current = parseFloat(currentOp);

  if (isNaN(current) || isNaN(previous)) return;

  switch (operation) {
    case "+":
      calculation = previous + current;
      break;
    case "-":
      calculation = previous - current;
      break;
    case "x":
      calculation = previous * current;
      break;
    case "/":
      calculation = previous / current;
      break;
    default:
      return;
  }

  currentOp = calculation;
  document.getElementById("result").innerHTML = calculation;
  operation = undefined;
  prevOp = "";
}

//Acciones a realizar por cada botón
numButton.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
  });
});

opButton.forEach(function (button) {
  button.addEventListener("click", function () {
    useOperator(button.innerText);
  });
});

equalButton.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

delButton.addEventListener("click", function () {
  document.getElementById("result").innerHTML = 0;
  initialize();
  updateDisplay();
});
