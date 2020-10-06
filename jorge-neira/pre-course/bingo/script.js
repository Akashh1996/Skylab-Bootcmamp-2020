/* BINGO GAME! */

const bingo = () => {
	let userName;
	let userPlaying = false;
	let userTurns = 0;
	let pointsOnLine = 0;
	let lineMatch = false;
	let userHaveCardBoard = false;
	let newDisplay = [[], [], []];
	let lines = [[], [], []];
	let ballDispenserNumbers = [];
	let cardBoard = [
		{ RangeOfNumbers: [1, 9], Value: [] },
		{ RangeOfNumbers: [10, 19], Value: [] },
		{ RangeOfNumbers: [20, 29], Value: [] },
		{ RangeOfNumbers: [30, 39], Value: [] },
		{ RangeOfNumbers: [40, 49], Value: [] },
		{ RangeOfNumbers: [50, 59], Value: [] },
		{ RangeOfNumbers: [60, 69], Value: [] },
		{ RangeOfNumbers: [70, 79], Value: [] },
		{ RangeOfNumbers: [80, 90], Value: [] }
	];

	const wellcome = () => {
		do {
			userName = prompt(
				'Bienvenido a BINGO GAME! \nInserte su nombre para comenzar a jugar!'
			);
		} while (isFinite(userName) || userName == null);

		const startGame = confirm(`Bienvenido ${userName}! \nListo para jugar?`);
		if (startGame === true) mainMenuGame();
		else console.log('Vuelve pronto!');
	};

	const mainMenuGame = () => {
		const userOption = prompt('1- Comenzar \n2- ¿Como jugar? \n3- Salir');
		switch (userOption) {
			case '1':
				secondMenuGame();
				break;
			case '2':
				alert(
					'Bienvenido a BINGO GAME! de 90 Bolas \nEs un bingo clasico en formato consola. \nPodras sacar aleatoriamente cartones hasta tener el que mas te guste \nCompletar una linea te otorgara 7 puntos, que se descontaran de tu cantidad de turnos \nA ver si logras completar el BINGO en el menor de turnos posible. \nDicho esto! a JUGAR!'
				);
				mainMenuGame();
				break;
			case '3':
				console.log(`Gracias por jugar ${userName}, vuelve pronto!`);
				break;
			default:
				alert('Introduce una de las opciones disponibles');
				mainMenuGame();
		}
	};

	const secondMenuGame = () => {
		const userOption = prompt(
			'1- Elegir carton para Jugar! \n2- Vamos a jugar! \n3- Atras'
		);
		switch (userOption) {
			case '1':
				userHaveCardBoard = true;
				cleanCardBoard();
				generateNewCardboard();
				showCardBoard();
				break;
			case '2':
				if (userHaveCardBoard === true) {
					clearStoredData();
					generateBallDispenser();
					playingMenuGame();
				} else {
					alert('Necesitas un un carton para poder jugar');
					secondMenuGame();
				}
				break;
			case '3':
				mainMenuGame();
				break;
			default:
				alert('Introduce una de las opciones disponibles');
				secondMenuGame();
		}
	};

	const playingMenuGame = () => {
		alert(
			'Listos para jugar! \nPara sacar un numero, simplemente dale a Aceptar en cada turno, \nde lo contrario dale a Cancelar para volver al menu principal'
		);
		userPlaying = true;
		while (userPlaying === true) {
			const playingCheck = confirm('Sacar Numero!');
			switch (playingCheck) {
				case true:
					playingTheGame();
					break;
				case false:
					userHaveCardBoard = false;
					userPlaying = false;
					console.clear();
					clearStoredData();
					cleanCardBoard();
					secondMenuGame();
					break;
			}
		}
	};

	const clearStoredData = () => {
		userTurns = 0;
		lineMatch = false;
		pointsOnLine = 0;
		ballDispenserNumbers = [];
		lines = [[], [], []];
	};

	const cleanCardBoard = () => {
		for (let x = 0; x < cardBoard.length; x++) {
			cardBoard[x].Value = [];
			cardBoard[x].MatchLine = false;
		}
		newDisplay = [[], [], []];
	};

	const generateBallDispenser = () => {
		for (let x = 1; x <= 90; x++) {
			ballDispenserNumbers.push(x);
		}
	};

	const generateNewCardboard = () => {
		for (let x = 0; x < cardBoard.length; x++) {
			while (cardBoard[x].Value.length < 3) {
				let num = generateRandomNumber(
					cardBoard[x].RangeOfNumbers[0],
					cardBoard[x].RangeOfNumbers[1]
				);
				if (cardBoard[x].Value.indexOf(num) === -1)
					cardBoard[x].Value.push(num);
				else continue;
			}
		}
		for (let x = 0; x < cardBoard.length; x++) {
			for (let z = 0; z < cardBoard[x].Value.length; z++) {
				newDisplay[z].push(cardBoard[x].Value[z]);
			}
		}
		let n;
		for (let x = 0; x < 3; x++) {
			n = 0;
			while (n < 4) {
				let randomFillCardBoard = generateRandomNumber(0, 8);
				if (newDisplay[x][randomFillCardBoard] !== `|||`) {
					newDisplay[x].splice(randomFillCardBoard, 1, `|||`);
					n++;
				} else continue;
			}
		}
	};

	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const showCardBoard = () => {
		console.clear();
		console.log(`\t\t\tBINGO GAME 90 BOLAS`);
		for (let i = 0; i < newDisplay.length; i++) {
			console.log(`|\t${newDisplay[i].join('\t')}\t|`);
		}
		if (userPlaying === false) secondMenuGame();
	};

	const playingTheGame = () => {
		userTurns = userTurns + 1;
		let randomIndexBall = generateRandomNumber(
			0,
			ballDispenserNumbers.length - 1
		);
		let getBall = ballDispenserNumbers[randomIndexBall];
		for (let x = 0; x < newDisplay.length; x++) {
			for (let z = 0; z < newDisplay[x].length; z++) {
				if (newDisplay[x][z] == getBall) {
					newDisplay[x][z] = 'X';
					lines[x].push('X');
				}
			}
		}
		if (lineMatch === false) {
			for (let x = 0; x < lines.length; x++) {
				if (lines[x].length == 5) {
					lineMatch = true;
					pointsOnLine = userTurns - 7;
					userTurns = userTurns - 7;
				}
			}
		}
		showCardBoard();
		if (ballDispenserNumbers.length > 0) {
			console.log(
				`\tBola N.º: ${
					ballDispenserNumbers[randomIndexBall]
				} Turnos: ${userTurns} linea: ${lineMatch ? 'Si' : 'No'}`
			);
			if (lineMatch === true) {
				console.log(`!LINEA!, Has conseguido linea con ${pointsOnLine} puntos`);
			}
			ballDispenserNumbers.splice(randomIndexBall, 1);
		}
		if (lines[0].length == 5 && lines[1].length == 5 && lines[2].length == 5) {
			console.log(`!BINGO!, Hasta ganado con un total de ${userTurns} puntos!`);
			userPlaying = false;
			userHaveCardBoard = false;
			cleanCardBoard();
			clearStoredData();
			mainMenuGame();
		}
	};
	wellcome();
};
bingo();
