
do {
    var userName = prompt('¡Bienvenido/a al bingo!\n\nPor favor, introduce tu nombre:\n');
    if (userName === "" || userName === null || !isNaN(userName)) {
        alert('Debes añadir un nombre.');
    }
    if (userName) {
        userName = userName[0].toUpperCase() + userName.slice(1);
        userName = userName[0] + userName.slice(1).toLowerCase();
    }
} while (userName === null || !isNaN(userName) || userName === "")

alert(`${userName}, a continuación recibirás información sobre el sistema de puntuación del juego.`);

var points;
var turn;
var instructionsNumbers = [43, '02', 71, 35, 20, 10, 66, 32, 44, 11, '01', 21, 75, 68, 23];

function decresePoints () {

    console.log('  Turno: ' + `${turn}`);
    console.log('                                             %cPuntuación:' + `
 %cCartón n.º 0` + '            %cBINGO' + `               %c${points}`, "font-weight: bold; font-size: 11px", "font-weight: bold; font-size: 11px", "font-weight: bold; font-size: 13px", "font-size: 12px; color: red");

    console.log(` ------------------------------------------------------
|          |          |          |          |          |
|    ${instructionsNumbers[0]}    |    ${instructionsNumbers[1]}    |    ${instructionsNumbers[2]}    |    ${instructionsNumbers[3]}    |    ${instructionsNumbers[4]}    |
|          |          |          |          |          |
 ------------------------------------------------------
|          |          |          |          |          |
|    ${instructionsNumbers[5]}    |    ${instructionsNumbers[6]}    |    ${instructionsNumbers[7]}    |    ${instructionsNumbers[8]}    |    ${instructionsNumbers[9]}    |
|          |          |          |          |          |
 ------------------------------------------------------
|          |          |          |          |          |
|    ${instructionsNumbers[10]}    |    ${instructionsNumbers[11]}    |    ${instructionsNumbers[12]}    |    ${instructionsNumbers[13]}    |    ${instructionsNumbers[14]}    |
|          |          |          |          |          |
 ------------------------------------------------------` );

}

do {
    points = 100;
    turn = 0;
    decresePoints();        
    alert('Comenzarás la partida con 100 puntos.');
    alert('Pero a medida que vayan cantándose los números, si estos no coinciden con los de tu cartón, irás perdiendo puntos.');
    points = 98;
    turn = 1;
    console.clear();
    decresePoints();
    alert('Del turno 1 al 25: -2 puntos.');
    points = 94;
    turn = 26;
    console.clear();
    decresePoints();
    alert('Del turno 26 al 50: -4 puntos.');
    points = 88;
    turn = 51;
    console.clear();
    decresePoints();
    alert('Y del turno 51 al 75: -6 puntos.');
    points = 100;
    turn = 0;
    console.clear();
    decresePoints();
    alert('Por el contrario, si se canta uno de los números de tu cartón, ¡recibirás puntos!');
    points = 115;
    turn = 1;
    console.clear();
    instructionsNumbers.splice(5, 1, 'X ');
    decresePoints();
    alert('Del turno 1 al 25: +15 puntos.');
    points = 125;
    turn = 26;
    console.clear();
    instructionsNumbers.splice(6, 1, 'X ');
    decresePoints();
    alert('Del turno 26 al 50: +10 puntos.');
    points = 130;
    turn = 51;
    console.clear();
    instructionsNumbers.splice(7, 1, 'X ');
    decresePoints();
    alert('Y del turno 51 al 75: +5 puntos.');
    points = 150;
    turn = 66;
    console.clear();
    instructionsNumbers.splice(8, 2, 'X ', 'X ');
    decresePoints();
    alert(`Además, hacer línea sumará 20 puntos a tu marcador.`);
    points = 200;
    turn = 75;
    console.clear();
    instructionsNumbers.forEach(function(element){
        var index = instructionsNumbers.indexOf(element)
        instructionsNumbers[index] = 'X ';});
    decresePoints();
    alert(`Y hacer bingo... ¡50!`);
    alert(`¡Buena suerte!`);
    points = 100;
    turn = 0;
    instructionsNumbers = [43, '02', 71, 35, 20, 10, 66, 32, 44, 11, '01', 21, 75, 68, 23];
    console.clear();
    decresePoints();
    var continueOrNot = confirm(`¿Quieres volver a leer el funcionamiento del sistema de puntuación?`);
    console.clear();
} while (continueOrNot)

var playAgain;
var numOfGamesPlayed = 0;

const arrayOfObjects = [{name: 'David', points: 149}, {name: 'Pedro', points: 126}, {name: 'Celsa', points: 84}, {name: 'Ernest', points: 66}, {name: 'Katy', points: 42}];

function rankingUsers (name, points) {
    this.name = name;
    this.points = points;
}

function bingo () {

    numOfGamesPlayed += 1;
    var cardGeneratorCount = 0;
    var storedCardNumbers = [];
    var userSatisfied = 0;

    function consoleCard () {

        console.log('  Turno: ' + `${turn}`);
        console.log('                                             %cPuntuación:' + `
 %cCartón n.º ${cardGeneratorCount}` + '            %cBINGO' + `               %c${points}`, "font-weight: bold; font-size: 11px", "font-weight: bold; font-size: 11px", "font-weight: bold; font-size: 13px", "font-size: 12px; color: red");
        
        console.log(` ------------------------------------------------------
|          |          |          |          |          |
|    ${storedCardNumbers[0]}    |    ${storedCardNumbers[1]}    |    ${storedCardNumbers[2]}    |    ${storedCardNumbers[3]}    |    ${storedCardNumbers[4]}    |
|          |          |          |          |          |
 ------------------------------------------------------
|          |          |          |          |          |
|    ${storedCardNumbers[5]}    |    ${storedCardNumbers[6]}    |    ${storedCardNumbers[7]}    |    ${storedCardNumbers[8]}    |    ${storedCardNumbers[9]}    |
|          |          |          |          |          |
 ------------------------------------------------------
|          |          |          |          |          |
|    ${storedCardNumbers[10]}    |    ${storedCardNumbers[11]}    |    ${storedCardNumbers[12]}    |    ${storedCardNumbers[13]}    |    ${storedCardNumbers[14]}    |
|          |          |          |          |          |
 ------------------------------------------------------` );

    }

    function cardGenerator () {

        const randomNum = () => {

            storedCardNumbers = [];

            do {

                do {
                    var num = Math.ceil(Math.random() * 75);
                    num = ('0' + num).slice(-2);
                } while (storedCardNumbers.includes(num))

                if (num < 10) {
                    storedCardNumbers.push(('0' + num).slice(-2));
                } else {
                    storedCardNumbers.push(num)
                }

            } while (storedCardNumbers.length < 15)

        };

        if (userSatisfied < 1) {
            cardGeneratorCount += 1
            randomNum();
            consoleCard();  
        } else {
            consoleCard();
        }

    }

    cardGenerator();

    function userCardSatisfaction () {

        setTimeout(function(){

            do {
                var cardSatisfaction = prompt(`¿Te gusta este cartón, ${userName}?

1. Sí. ¡A jugar!
2. No. Dame otro.
`)

                if (isNaN(Number(cardSatisfaction))) {
                    cardSatisfaction = cardSatisfaction.toLowerCase();
                    cardSatisfaction = cardSatisfaction.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                }

                if (cardSatisfaction === "" || cardSatisfaction === null || cardSatisfaction !== 'si' && cardSatisfaction !== 'no' && cardSatisfaction != 1 && cardSatisfaction != 2) {
                    alert('Por favor, introduce una de las opciones.')
                }
            } while (cardSatisfaction === "" || cardSatisfaction === null || cardSatisfaction !== 'si' && cardSatisfaction !== 'no' && cardSatisfaction != 1 && cardSatisfaction != 2)

            switch (cardSatisfaction) {
                case '1':
                case 'si':
                    userSatisfied = 1;
                    var ballNumberCount = 0;
                    var storedRandomNumbers = [];
                    var countLine = 0;
                    do {
                        turn += 1;
                        console.clear()
                        cardGenerator();

                        ballNumberCount += 1;

                        do {
                            var ballNumber = Math.ceil(Math.random() * 75);
                        } while (storedRandomNumbers.includes(ballNumber))

                        storedRandomNumbers.push(ballNumber);
                        ballNumberModified = ('0' + ballNumber).slice(-2);
                        var coincidenceFound = storedCardNumbers.find(element => element === ballNumberModified)

                        if (coincidenceFound) {

                            if (ballNumberCount === 1) {
                                points = points + 15;
                                console.clear()
                                cardGenerator();
                                alert(`El primer número es el... ¡${ballNumber}!\n\nY ¡lo tienes en tu cartón!\n\nSe han sumado, pues, 15 puntos a tu marcador.`);
                            } else if (turn <= 25) {
                                points = points + 15;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!\n\nY ¡lo tienes en tu cartón!\n\nSe han sumado, pues, 15 puntos a tu marcador.`);
                            } else if (turn > 25 && turn < 51) {
                                points = points + 10;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!\n\nY ¡lo tienes en tu cartón!\n\nSe han sumado, pues, 10 puntos a tu marcador.`);
                            } else if (turn >= 51) {
                                points = points + 5;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!\n\nY ¡lo tienes en tu cartón!\n\nSe han sumado, pues, 5 puntos a tu marcador.`);
                            }

                            var index = storedCardNumbers.indexOf(coincidenceFound);
                            storedCardNumbers[index] = 'X ';
                            console.clear()
                            cardGenerator();

                            if (countLine < 1) {

                                if (storedCardNumbers[0] === 'X ' && storedCardNumbers[1] === 'X ' && storedCardNumbers[2] === 'X ' && storedCardNumbers[3] === 'X ' && storedCardNumbers[4] === 'X ') {
                                    countLine = 1;
                                    points = points + 20;
                                    console.clear()
                                    cardGenerator();
                                    console.log(`%c\n                 ¡LÍNEA!\n`, "font-weight: bold; font-size: 15px; color: red");
                                    alert("Y además has hecho... ¡línea!\n\n¡20 puntos más en tu marcador!")
                                } else if (storedCardNumbers[5] === 'X ' && storedCardNumbers[6] === 'X ' && storedCardNumbers[7] === 'X ' && storedCardNumbers[8] === 'X ' && storedCardNumbers[9] === 'X ') {
                                    countLine = 1;
                                    points = points + 20;
                                    console.clear()
                                    cardGenerator();
                                    console.log(`%c\n                 ¡LÍNEA!\n`, "font-weight: bold; font-size: 15px; color: red");
                                    alert("Y además has hecho... ¡línea!\n\n¡20 puntos más en tu marcador!")
                                } else if (storedCardNumbers[10] === 'X ' && storedCardNumbers[11] === 'X ' && storedCardNumbers[12] === 'X ' && storedCardNumbers[13] === 'X ' && storedCardNumbers[14] === 'X ') {
                                    countLine = 1;
                                    points = points + 20;
                                    console.clear()
                                    cardGenerator();
                                    console.log(`%c\n                 ¡LÍNEA!\n`, "font-weight: bold; font-size: 15px; color: red");
                                    alert("Y además has hecho... ¡línea!\n\n¡20 puntos más en tu marcador!")
                                }

                            }

                        } else {

                            if (ballNumberCount === 1) {
                                points = points - 2;
                                console.clear()
                                cardGenerator();
                                alert(`El primer número es el... ¡${ballNumber}!`);
                            } else if (turn <= 25) {
                                points <= 1 ? points = 0: points = points - 2;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!`);
                            } else if (turn > 25 && turn < 51) {
                                points <= 3 ? points = 0: points = points - 4;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!`);
                            } else if (turn >= 51) {
                                points <= 5 ? points = 0: points = points - 6;
                                console.clear()
                                cardGenerator();
                                alert(`El siguiente número es el... ¡${ballNumber}!`);
                            } 

                        }

                        if (storedCardNumbers.every(x => x === 'X ')) {
                            points = points + 50;
                            console.clear()
                            cardGenerator();
                            console.log(`%c\n            ¡BINGO!\n`, "font-weight: bold; font-size: 20px; color: red");
                            alert("Y además has hecho... ¡bingo!\n\n¡50 puntos más en tu marcador!");
                            console.log(`%c ----- Has completado el cartón en ${turn} turnos. -----`,'font-weight: bold; font-size: 12px');
                            alert("GAME OVER");
                            let userObject = new rankingUsers(userName, points);
                            arrayOfObjects.push(userObject);
                            var sortedByPoints = arrayOfObjects.sort((a, b) => (a.points < b.points) ? 1 : (a.points === b.points) ? ((arrayOfObjects.indexOf(a) > arrayOfObjects.indexOf(a)) ? 1 : -1) : -1 );
                            
                            alert(`Ranking de usuarios:

- ${arrayOfObjects[0].name}: ${arrayOfObjects[0].points}
- ${arrayOfObjects[1].name}: ${arrayOfObjects[1].points}
- ${arrayOfObjects[2].name}: ${arrayOfObjects[2].points}
- ${arrayOfObjects[3].name}: ${arrayOfObjects[3].points}
- ${arrayOfObjects[4].name}: ${arrayOfObjects[4].points}

${userName}, has quedado en ${arrayOfObjects.indexOf(arrayOfObjects.find(element => element == userObject)) + 1}.ª posición.`);
                            playAgain = confirm(`¿Quieres volver a jugar, ${userName}?`)
                            if (playAgain) {
                                console.clear();
                                turn = 0;
                                points = 100;
                                bingo();
                            } else {
                                return;
                            }
                        }


                    } while (!(storedCardNumbers.every(x => x === 'X ')))
                    break;
                case '2':
                case 'no':
                    console.clear();
                    cardGenerator();
                    userCardSatisfaction();
            }

        }, 2000);

    }

    userCardSatisfaction();

}

bingo()
