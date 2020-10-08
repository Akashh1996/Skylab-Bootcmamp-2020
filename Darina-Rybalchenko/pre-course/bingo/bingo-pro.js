let bingoCard = []
let playerName;
let randomNumber;
let turn = 0;
let points = 100;
let playerExit = false;
let endOfGame = false
let players = [
    { name: "Manel", score: 115 },
    { name: "Anna", score: 89 },
    { name: "Maria", score: 93 },
]

function prepareBingoGame() {
    askName()
    createBingoCard(15)
    askNewBingoCard()
}

function bingo() {
    turn += 1
    getRandomNumber()
    showTurnResult()
    updatePoints()
    showBingoCard()
    checkLine()

    if (endOfGame) {
        newGame()
    } else {
        askToPlayAnotherTurn()
        if (!playerExit) bingo()
    }
}

function playersScores() {
    addPlayerScore()
    sortPlayersPoints()
    showPlayersScores()
    console.log("%cGracias por jugar al Bingo! Hasta luego!", "color: green")
}

function initiateBingoCard() {
    bingoCard = []
}

function askName() {
    name = prompt("Como te llamas?")
    if (name === null || name === "" || isNaN(name) === false) {
        alert("Por favor introduzca la informacion correcta")
        askName()
    } else {
        playerName = name
        alert("Bienvenido " + name)
    }
}

function createBingoCard(quantityOfNumbers) {
    initiateBingoCard()
    while (bingoCard.length < quantityOfNumbers) {
        let number = getRandomNumber()
        let alreadyBingoCard = bingoCard.includes(number)
        if (!alreadyBingoCard) bingoCard.push(number)
    }
    showBingoCard()
}

function askNewBingoCard() {
    let messageNewCard = prompt("Quieres escoger otro carton?\n1: Si\n2: No")
    switch (messageNewCard) {
        case "1":
            createBingoCard(15)
            askNewBingoCard()
            break;
        case "2":
            alert("Empezamos el juego")
            bingo()
            break;
        default:
            alert("Debes introducir la informacion correcta")
            askNewBingoCard()
    }
}

function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 15) + 1;
    return randomNumber
}

function showTurnResult() {
    console.log(`Ha salido el numero: ${randomNumber}.\nEl turno numero: ${turn}.\nTu puntuacion: ${points}`)
}

function updatePoints() {
    let success = false
    for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i] === randomNumber) {
            bingoCard[i] = "X"
            points += 1
            success = true
        }
    }
    if (!success) points -= 1
}

function showBingoCard() {
    console.log("%cTu carton es: " + bingoCard, "color: brown")
}

function checkLine() {
    if (line()) {
        alert("----------BINGO----------")
        console.log("BINGO!")
        endOfGame = true
    }
}

function newGame() {
    let playAgain = confirm("Quieres jugar otra vez?")
    if (playAgain) {
        endOfGame = true
    } else {
        alert("Bye")
    }
}

function line() {
    let numberRemaining = bingoCard.some(number => typeof (number) === "number")
    return !numberRemaining
}

function askToPlayAnotherTurn() {
    let option = confirm("Quieres jugar otro turno?")
    if (!option) playerExit = true
}

function addPlayerScore() {
    players.push({ name: playerName, score: points })
}

function sortPlayersPoints() {
    players.sort(function (a, b) { return b.score - a.score })
}

function showPlayersScores() {
    console.log("%cLa puntuacion: ", "color: blue")
    for (let i = 0; i < players.length; i++) {
        console.log(`${players[i].name} tiene ${players[i].score} puntos\n`)
    }
}

prepareBingoGame()
playersScores()