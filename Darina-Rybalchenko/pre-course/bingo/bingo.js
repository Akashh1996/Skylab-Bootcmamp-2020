let bingoCard
let name;
let randomNumber;

function initiateBingoCard() {
    bingoCard = [1, 2, 3, 4, 5]
}

function bingo() {
    showBingoCard()
    getRandomNumber()
    updateBingoCard()
    checkLine()
}

function askName() {
    alert("Bienvenido a Bingo SkyLab")
    name = prompt("Como te llamas?")
    if (name === null || name === "" || isNaN(name) === false) {
        alert("Por favor introduzca la informacion correcta")
        askName()
    } else {
        alert("Bienvenido " + name)
    }
}

function showBingoCard() {
    let message = "Tu carton: "
    for (let i = 0; i < bingoCard.length; i++) {
        message += bingoCard[i] + " "
    }
    alert(message)
}

function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 5) + 1;
    alert("El numero de la bola " + randomNumber)
}

function updateBingoCard() {
    for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i] === randomNumber) {
            bingoCard[i] = "X"
        }
    }

}
function checkLine() {
    if (line()) {
        alert("LINEA")
        let playAgain = prompt("Quieres jugar otra vez?")
        if (playAgain === "Si") {
            initiateBingoCard()
            bingo()
        }
    } else {
        bingo()
    }
}

function line() {
    let numberRemaining = bingoCard.some(number => typeof (number) === "number")
    return !numberRemaining
}

askName()
initiateBingoCard()
bingo()