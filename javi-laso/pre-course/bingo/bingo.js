var card = [
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	//next line
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	//next line
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false },
	{ number: 0, matched: false }
];

var anotherGame = false;

function bingo() {
	var nextNumber = 0;
	var game = true;
	var alreadyOut = [];
	var turn = 1;
	var lineCompleted = false;

	resetCard();
	createNumbersForCard();

	console.log('Tu carton es:');
	logCard();

	while (game) {
		nextNumber = bombo(alreadyOut);
		alreadyOut.push(nextNumber);

		console.log('Numero del bombo: ' + nextNumber);

		for (var i = 0; i < card.length; i++) {
			if (card[i].number === nextNumber) {
				card[i].number = 'X';
				card[i].matched = true;
				console.log('Tienes ese numero! Tu carton:');
				logCard();
			}
		}

		if (!lineCompleted) {
			lineCompleted = isAnyLineComplete();
		}

		if (isCardComplete()) {
			console.log('¡Bingo! Has completado el carton en ' + turn + ' turnos');
			break;
		}

		turn++;
		game = askNewTurn();
	}
}

function askName() {
	var nameAsked = prompt('Hola, ¿como te llamas?');

	if (nameAsked === null || nameAsked.length === 0) {
		return -1;
	} else {
		return nameAsked;
	}
}

function bombo(arr) {
	// arr es el array de numeros que ya han salido, asi da un numero nuevo cada vez
	var isNewNumber = false;
	var number = 0;

	while (!isNewNumber) {
		number = Math.floor(Math.random() * 89 + 1);
		if (!arr.includes(number)) {
			isNewNumber = true;
		}
	}

	return number;
}

function askNewTurn() {
	var wantAnotherNumber = prompt('¿Quieres otro numero? Si/No');

	if (wantAnotherNumber === null) {
		return false;
	} else if (
		wantAnotherNumber.toLowerCase() === 'si' ||
		wantAnotherNumber.toLowerCase() === 's'
	) {
		return true;
	} else {
		return false;
	}
}

function isCardComplete() {
	var numberOfMatches = 0;
	for (var i = 0; i < card.length; i++) {
		if (card[i].matched === true) {
			numberOfMatches++;
		}
	}

	if (numberOfMatches === card.length) {
		return true;
	}

	return false;
}

function isAnyLineComplete() {
	var num = 0;

	for (var i = 0; i < 3; i++) {
		var numberOfMatches = 0;
		for (var j = 0; j < 5; j++) {
			if (card[num].matched === true) {
				numberOfMatches++;
			}
			num++;
		}
		if (numberOfMatches === 5) {
			console.log('¡Linea! Continuamos para Bingo');
			return true;
		}
	}

	return false;
}

function createNumbersForCard() {
	var alreadyOut = [];
	var bingoCard = [];
	var nextNumber = 0;

	for (var i = 0; i < 15; i++) {
		nextNumber = bombo(alreadyOut);
		bingoCard.push(nextNumber);
		alreadyOut.push(nextNumber);
	}

	bingoCard.sort((a, b) => a - b);

	for (i = 0; i < card.length; i++) {
		card[i].number = bingoCard[i];
	}
}

function logCard() {
	var cardLines = [[], [], []];
	var num = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 5; j++) {
			cardLines[i].push(card[num].number);
			num++;
		}
		console.log(cardLines[i]);
	}
}

function resetCard() {
	for (var i = 0; i < card.length; i++) {
		card[i].number = 0;
		card[i].matched = false;
	}
}

function sayGoodBye() {
	console.log('De acuerdo. ¡Hasta la proxima!');
}

var name = askName();

if (name !== '-1') {
	do {
		console.log('Bienvenido/a, ' + name + '. Comenzamos el Bingo.');

		bingo();
		console.log('¿Quieres volver a jugar? Si/No');
		var question = prompt('¿Quieres volver a jugar? Si/No');

		if (question.toLowerCase() === 'si' || question.toLowerCase() === 's') {
			anotherGame = true;
		} else {
			anotherGame = false;
			sayGoodBye();
		}
	} while (anotherGame);
} else {
	sayGoodBye();
}
