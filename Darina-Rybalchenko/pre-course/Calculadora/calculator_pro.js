function calculatorPro() {
  for(argument of arguments) {
    if(isNaN(argument)) return console.log("Todos los argumentos tienen que ser numeros")
  }
  if(arguments.length === 1) {
    const squareRoot = Math.sqrt(arguments[0]).toFixed(3);
    return console.log(`La raiz cuadrada es ${parseFloat(squareRoot)}.`)
  }
  console.log(calcResult(...arguments));

  askUser();
};

function askUser() {
  const answer = prompt("Desea realizar otra operacion? y/n")
  if(answer === "y") {
    const message = prompt("Introducir nuevos numeros")
    const parameters = message.split(",")
    let arrayParameters = [];
    for(parameter of parameters) {
      arrayParameters.push(parseFloat(parameter));
    } 
    calculatorPro(...arrayParameters); 
  } else if (answer === "n") {
    return alert("Bye!")
  } else {
    askUser();
  }
}

function calcResult() {
  const sumResult = sum(...arguments);
  const subResult = sub(...arguments);
  const multResult = mult(...arguments);
  const divResult = div(...arguments);
  const result = `La suma es ${sumResult}.\nLa resta es ${subResult}.\nLa multiplicacion es ${multResult}.\nLa division es ${divResult}.` 
  return result
}

function sum () {
  let accSum = 0;
  for(argument of arguments) {
    accSum += argument;
  }
  return accSum
}

function sub() {
  let accSub = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    accSub -= arguments[i];
  }
  return accSub
}

function mult() {
  let accMult = 1;
  for (argument of arguments) {
    accMult *= argument;
  }
  return accMult
}

function div() {
  let accDiv = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    accDiv /= arguments[i];
  }
  return parseFloat(accDiv.toFixed(3));
};

calculatorPro(2, 3, 4);
  