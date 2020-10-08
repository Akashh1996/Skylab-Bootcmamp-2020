//Programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.
//Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre).
//Para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número.
//Si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0.
//El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado.
//El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.
//Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X" (solamente se puede cantar línea 1 vez).
//Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.
//Por último, deberá preguntar si desea volver a jugar.

let userCard = [];
let countCardX = 15;
let newNumber;
let bingoLine = 0;
let countTurns = 0;
let points = 100;
let cardNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
let bingoNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
let newUser = '';

let allUsers = [{name: 'Marco', points: 125, turns: 80}, {name: 'Lara', points: 93, turns: 90}, {name: 'Salva', points: 119, turns: 84}, {name: 'Sergio', points: 138, turns: 77}, {name: 'Laura', points: 141, turns: 80}, {name: 'Héctor', points: 80, turns: 87}, {name: 'Ester', points: 76, turns: 87}, {name: 'Pedro', points: 100, turns: 89}, {name: 'Luca', points: 100, turns: 89}];

function rankingUsers (name, points, turns) {
    this.name = name;
    this.points = points;
    this.turns = turns;
}


function bingo() {

  userName = prompt('Bienvenido a Skylab Bingo! Cúal es su nombre?');
  if (userName == null) {
      return;
  } else if (!isNaN(userName) || userName == '') {
      alert('Introduzca un nombre de usuario válido por favor.');
      bingo();
  } else {
      newUser = userName;
      let rules = confirm(`Bienvenido a Skylab Bingo ${newUser}! A continuación le explicamos las reglas del juego: \n
·Comienza con 100 puntos.
·Del turno 1 al 20 se restará 1 punto por turno y si tiene algún acierto, se le sumarán 5 puntos.
·Del turno 21 al 50 se restarán 2 puntos por turno y si tiene algún acierto, se le sumarán 7 puntos.
·Del turno 51 al 90 se restarán 3 puntos por turno y si tiene algún acierto, se le sumarán 10 puntos.
·Si canta línea! se le sumarán 20 puntos (sólo se puede cantar línea 1 vez).
·Si canta Bingo! se le sumarán 50 puntos.
·Además, depende de con cuantos turnos finalice el Bingo, se le sumarán más puntos:
            ·Con menos de 75 turnos, se le sumarán 20 puntos.
            ·Entre 75 y 79 turnos, se le sumarán 15 puntos.
            ·Y entre 80 y 85 turnos, se le sumarán 10 puntos.\n
      Mucha suerte ${newUser}!`);
      if (rules) {
        shuffleBingoNumbers();
        shuffleCardNumbers();
      } else {
          return;
      }
  }

    function shuffleCardNumbers() {
        for (let i = cardNumbers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cardNumbers[i];
            cardNumbers[i] = cardNumbers[j];
            cardNumbers[j] = temp;
        }
        bingoCard();
    }

    function shuffleBingoNumbers() {
        for (let i = bingoNumbers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = bingoNumbers[i];
            bingoNumbers[i] = bingoNumbers[j];
            bingoNumbers[j] = temp;
        }
    }

    function bingoCard() {
        for (i = 0; i < 15; i++) {
            if (cardNumbers[i] < 10) {
                userCard.push(('0' + cardNumbers[i]));
            } else {
                userCard.push(cardNumbers[i])
            }
        }

        userCard.sort(function(a,b) {
            return a - b;
        });

        console.log(`Este es su cartón de Bingo ${newUser}`)
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
        startBingo();
    }

    function startBingo() {
        okCard= prompt('Desea cambiar el cartón? [presiona 1] \no jugar con el actual? [Presiona 2].');
        if (okCard == null) {
            return;
        } else if (okCard == 1) {
            userCard = [];
            console.clear();
            shuffleCardNumbers();
        } else if (okCard == 2) {
            shuffleBingoNumbers();
            newTurn();
        } else {
            alert('Debe introducir 1 o 2.');
            startBingo();
        }
    }


    function newTurn() {
        if (countCardX > 0) {
            countTurns += 1;
            newNumber = bingoNumbers.shift();
            console.clear();

            alert(`Ha salido el número: ${newNumber}`);
            if (countTurns <= 20) {
                points -= 1;
            } else if ((countTurns > 20) && (countTurns <= 50)) {
                points -= 2;
            } else {
                points -= 3;
            }    
            console.log(`Así va su cartón de Bingo ${newUser}:`);
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
        console.log(`         Puntos: ${points}                                 Turno: ${countTurns}    `)
            for (i = 0; i < userCard.length; i++) {
                if (newNumber == userCard[i]) {
                    userCard[i] = ' X';
                    if (countTurns <= 20) {
                        points += 5;
                    } else if ((countTurns > 20) && (countTurns <= 50)) {
                        points += 7;
                    } else {
                        points += 10;
                    }
                    countCardX -= 1;
                    console.clear();
                    if (countCardX > 0) {
                        alert(`Sí! Lo tienes! Así va su cartón de Bingo ${newUser}:`);
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
                    console.log(`         Puntos: ${points}                                 Turno: ${countTurns}    `)
                    }
                }
            }
            if (bingoLine < 1) {
                if ((userCard[0] == ' X') && (userCard[1] == ' X') && (userCard[2] == ' X') && (userCard[3] == ' X') && (userCard[4] == ' X')) {
                    bingoLine += 1;
                    points += 20;
                    console.clear();
                    alert('Felicidades! Has cantado línea!!! +20 puntos a tu marcador!');
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
                    console.log(`         Puntos: ${points}                                 Turno: ${countTurns}    `)
                }
                if ((userCard[5] == ' X') && (userCard[6] == ' X') && (userCard[7] == ' X') && (userCard[8] == ' X') && (userCard[9] == ' X')) {
                    bingoLine += 1;
                    points += 20;
                    console.clear();
                    alert('Felicidades! Has cantado línea!!! +20 puntos a tu marcador!');
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
                    console.log(`         Puntos: ${points}                                 Turno: ${countTurns}    `)
                }
                if ((userCard[10] == ' X') && (userCard[11] == ' X') && (userCard[12] == ' X') && (userCard[13] == ' X') && (userCard[14] == ' X')) {
                    bingoLine += 1;
                    points += 20;
                    console.clear();
                    alert('Felicidades! Has cantado línea!!! +20 puntos a tu marcador!');
            console.log(`         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[0]}    |    ${userCard[1]}    |    ${userCard[2]}    |    ${userCard[3]}    |    ${userCard[4]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[5]}    |    ${userCard[6]}    |    ${userCard[7]}    |    ${userCard[8]}    |    ${userCard[9]}    |
        |          |          |          |          |          |
         ------------------------------------------------------
        |          |          |          |          |          |
        |    ${userCard[10]}    |    ${userCard[11]}    |    ${userCard[12]}    |    ${userCard[13]}    |    ${userCard[14]}    |
        |          |          |          |          |          |
         ------------------------------------------------------`);
                    console.log(`         Puntos: ${points}                                 Turno: ${countTurns}    `)
                }
            }

            if (countCardX > 0) {
                let continuee = confirm('Desea Continuar?');
                if (continuee) {
                    newTurn();
                }
            } else {
                newTurn();
            }
        } else {
            points += 50;
            alert (`${newUser} has cantado BINGO!!`);
            if (countTurns <= 75) {
                points += 20;
            } else if ((countTurns > 75) && (countTurns <= 80)) {
                points += 15;
            } else if ((countTurns > 80) && (countTurns <= 85)) {
                points += 10;
            } else {
                points += 0;
            }
            alert(`Asi ha quedado su puntuación ${newUser}\n
            Puntos totales: ${points}     Nº de Turnos: ${countTurns}`);
            let actualUser = new rankingUsers(newUser, points, countTurns);
            allUsers.push(actualUser);
        
            allUsers.sort(function(a,b) {
                return b.points - a.points;
            });
                            
            alert(`Ranking de usuarios:

            - ${allUsers[0].name}: ${allUsers[0].points} puntos en ${allUsers[0].turns} turnos.
            - ${allUsers[1].name}: ${allUsers[1].points} puntos en ${allUsers[1].turns} turnos.
            - ${allUsers[2].name}: ${allUsers[2].points} puntos en ${allUsers[2].turns} turnos.
            - ${allUsers[3].name}: ${allUsers[3].points} puntos en ${allUsers[3].turns} turnos.
            - ${allUsers[4].name}: ${allUsers[4].points} puntos en ${allUsers[4].turns} turnos.
            - ${allUsers[5].name}: ${allUsers[5].points} puntos en ${allUsers[5].turns} turnos.
            - ${allUsers[6].name}: ${allUsers[6].points} puntos en ${allUsers[6].turns} turnos.
            - ${allUsers[7].name}: ${allUsers[7].points} puntos en ${allUsers[7].turns} turnos.
            - ${allUsers[8].name}: ${allUsers[8].points} puntos en ${allUsers[8].turns} turnos.
            - ${allUsers[9].name}: ${allUsers[9].points} puntos en ${allUsers[9].turns} turnos.`);

            newGame();
        }   
    }

    function newGame() {
        let playAgain = confirm(`Quiere volver a jugar ${newUser}?`);
        if (playAgain) {
            cardNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
            bingoNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
            userCard = [];
            countCardX = 15;
            bingoLine = 0;
            countTurns = 1;
            points = 100;
            shuffleCardNumbers();
        } else {
            return;
        }
    }
}

bingo();
