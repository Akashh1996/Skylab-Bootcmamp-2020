var bingoCard = [
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  // NEXT LINE
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  // NEXT LINE
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false},
  {number: 0, matched: false}
];
var numContainer = [];

for (i = 0; i < 15; i++) {
  while (numContainer.length < 15) {
    var x = Math.round(Math.random() * 89 + 1);
    if (numContainer.indexOf(x) === -1) {
      numContainer.push(x);
    }
  }
}
// console.log(numContainer);

for (i = 0; i < numContainer.length; i++) {
  bingoCard[i].number = numContainer[i];
}

var line1 = [];
var line2 = [];
var line3 = [];

do {
  var username = prompt("Por favor, introduzca su nombre:");
} while (isFinite(username) || username === null);

console.log(`Bienvenido ${username}, el juego del bingo va a empezar en breves instantes!`);
console.log(`Los numeros para esta partida son los siguientes:`);



for (i = 0; i < 5; i++) {
  line1.push(bingoCard[i].number);

}

for (i = 5; i < 10; i++) {
  line2.push(bingoCard[i].number);
}

for (i = 10; i < 15; i++) {
  line3.push(bingoCard[i].number);
}

console.log(`LINEA 1: - - - ${line1.join(' - - - ')} - - - `, `\nLINEA 2: - - - ${line2.join(' - - - ')} - - - `, `\nLINEA 3: - - - ${line3.join(' - - - ')} - - - `);

// SETUP BOLAS DEL BOMBO (1 - 90)
var numbers = [];
for (i = 1; i <= 90; i++) {
  numbers.push(i);
}

function bingoTurn() {
  var randomNum = Math.floor(Math.random() * (numbers.length -1));
  var drawNum = numbers[randomNum];
  var checkNum = numbers.slice(numbers.indexOf(drawNum) , numbers.indexOf(drawNum) + 1);
  

// **ELIMINA EL NÚMERO DEL CONJUNTO DE BOLAS**

  function extractedNumber (arr, num) {
      var i = arr.indexOf(num);
      arr.splice(i, 1);
  }
  
  extractedNumber(numbers, drawNum);
  // ** COMPROBAR LOS NÚMEROS QUE QUEDAN POR SALIR **
  //console.log(numbers);
  console.log(`La bola que ha salido es el número ${drawNum}!`);

  for (i = 0; i < 5; i++) {
    if (checkNum[0] === line1[i]) {
      line1[i] = 'X';
    } else if (checkNum[0] === line2[i]) {
      line2[i] = 'X';
    } else if (checkNum[0] === line3[i]) {
      line3[i] = 'X';
    }
  }

  console.log(`LINEA 1: - - - ${line1.join(' - - - ')} - - - `, `\nLINEA 2: - - - ${line2.join(' - - - ')} - - - `, `\nLINEA 3: - - - ${line3.join(' - - - ')} - - - `);

}

function xLine(atLeastOneX) {
  return atLeastOneX.every(i => (typeof i === "string"));
}

// EMPIEZA EL TURNO

var turnCounter = 0;

do {
  var endTurn = confirm("Empieza el siguiente turno.");
  if (endTurn == false) {
    console.log("El juego se ha terminado.");
    throw new Error ('Reinicie para volver a jugar.')
  }

  bingoTurn();
  if (line1[0] === 'X' && line1[1] === 'X' && line1[2] === 'X' && line1[3] === 'X' && line1[4] === 'X') {
    alert("LINEA!");
  } else if (line2[0] === 'X' && line2[1] === 'X' && line2[2] === 'X' && line2[3] === 'X' && line2[4] === 'X') {
    alert("LINEA!");
  } else if (line3[0] === 'X' && line3[1] === 'X' && line3[2] === 'X' && line3[3] === 'X' && line3[4] === 'X') {
    alert("LINEA!");
  }

  turnCounter++;

} while (xLine(line1) !== true && xLine(line2) !== true && xLine(line3) !== true);

// SIGUE EL JUEGO HASTA BINGO.


 do {
    var endTurn = confirm("Empieza el siguiente turno.");
    if (endTurn == false) {
      console.log("El juego se ha terminado.");
      throw new Error ('Reinicie para volver a jugar.')
    }

    bingoTurn();

    turnCounter++;
} while (xLine(line1) !== true || xLine(line2) !== true || xLine(line3) !== true)

console.log(`BINGO! El carton se ha terminado despues de ${turnCounter} turnos.`);
console.log(`Muchas gracias por jugar con nosotros ${username} y esperamos verte pronto de nuevo!`)