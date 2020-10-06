// VARAIBLES

const result = document.getElementById("result");
const previousDisplay = document.getElementById("previousDisplay");
const display = document.getElementById("display");
const reset = document.getElementById("reset");
const undo = document.getElementById("undo");
const operations = ["addition", "minus", "multiply", "division"];
const numbers = [
  "number1",
  "number2",
  "number3",
  "number4",
  "number5",
  "number6",
  "number7",
  "number8",
  "number9",
  "number0",
  "comma",
];

let previousNumber = "";
let actualNumber = "";
let currentOperation = null;
let resultOperation = null;

display.innerHTML = "0";

// FUNCIONES

function overflow(num) { // Caracteres maximos en pantalla
  if (num.length >= 12) {
    return "Desbordam.";
  } else {
    return num;
  }
}

// EVENTOS

// 1. NÚMEROS

for (i = 0; i < numbers.length; i++) {
  const number = document.getElementById(numbers[i]);
  number.addEventListener("click", function (event) {
    if (
      display.innerHTML === "Desbordam." ||
      display.innerHTML ===
        Number(resultOperation).toLocaleString("en-EN", {
          maximumFractionDigits: 2, // Borrar pantalla tras resultado (tras hacer click numero)
        })
    ) {
      actualNumber = "";
      previousNumber = "";
      resultOperation = null;
    }
    if (event.target.innerText !== ".") { // Añadir numeros a display (excepcion coma)
      actualNumber += event.target.innerText;
      display.innerHTML = overflow(
        Number(actualNumber).toLocaleString("en-EN", {
          maximumFractionDigits: 9,
        })
      );
    } else if (actualNumber.includes(".") === false) { // Comprueba que no haya mas comas
      actualNumber += event.target.innerText;
      display.innerHTML =
        overflow(
          Number(actualNumber).toLocaleString("en-EN", {
            maximumFractionDigits: 9,
          })
        ) + ".";
    }
  });
}

// 2. OPERACIONES

for (i = 0; i < operations.length; i++) {
  const operation = document.getElementById(operations[i]);
  operation.addEventListener("click", function (event) {
    if (display.innerHTML === "Desbordam.") {
      actualNumber = "";
      previousNumber = "";
      resultOperation = null;
    } else if (event.target.innerText === "-" && actualNumber === "") { // negativos
      display.innerHTML = event.target.innerText;
      actualNumber += event.target.innerText;
    } else {
      display.innerHTML = event.target.innerText;
      currentOperation = event.target.innerText;
      previousNumber = actualNumber;
      actualNumber = "";
    }
  });
}

// 3. RESULTADOS

result.addEventListener("click", function () {
  if (Number(previousNumber) !== 0) { // No hace calculo si no hay numero previo
    if (currentOperation === "+") {
      resultOperation = Number(previousNumber) + Number(actualNumber);
    } else if (currentOperation === "-") {
      resultOperation = Number(previousNumber) - Number(actualNumber);
    } else if (currentOperation === "x") {
      resultOperation = Number(previousNumber) * Number(actualNumber);
    } else if (currentOperation === "÷") {
      resultOperation = Number(previousNumber) / Number(actualNumber);
    } else {
      console.log("Algo ha ido mal");
    }
    display.innerHTML = overflow(
      Number(resultOperation).toLocaleString("en-EN", {
        maximumFractionDigits: 2,
      })
    );
    actualNumber = String(resultOperation);
  } else {
    resultOperation = actualNumber;
    display.innerHTML = Number(actualNumber).toLocaleString("en-EN", {
      maximumFractionDigits: 2,
    });
  }
});

// 4. DESHACER

undo.addEventListener("click", function () {
  if (
    display.innerHTML !== "" &&
    display.innerHTML !==
      Number(resultOperation).toLocaleString("en-EN", {
        maximumFractionDigits: 2,
      }) &&
    display.innerHTML !== "Desbordam."
  ) { // undo solo funciona si en display no se muestra lo indicado
    if (
      display.innerHTML === "+" ||
      display.innerHTML === "-" ||
      display.innerHTML === "x" ||
      display.innerHTML === "÷"
    ) {
      currentOperation = null;
      actualNumber = "";
      display.innerHTML = "";
    } else if (actualNumber.length <= 1) {
      actualNumber = "";
      display.innerHTML = "";
    } else if (actualNumber.length > 1) {
      actualNumber = actualNumber.slice(0, -1);
      display.innerHTML = actualNumber;
    }
  }
});

// 5. RESET

reset.addEventListener("click", function () {
  actualNumber = "";
  currentOperation = null;
  previousNumber = "";
  resultOperation = null;
  display.innerHTML = "0";
});
