//Variables
var l = 0;
var numeros = [0];
var numerosCarton = [0];
var turnos = 0;
var puntos = 100 - turnos;
var ranking = { Fulanito: 10, Juanito: 12, Menganito: 8, Jorgito: 15 };
var rankingOrder = [];

//Funcion principal
function bingo() {
	var nombre = prompt('¡Bienvenido a BINGO! Introduce tu nombre:');
	if (nombre === null) {
		return console.log('¡Hasta otra!');
	} else if (nombre === '') {
		return bingo();
	} else {
		window.alert(`Hola ${nombre}, así funciona el sistema de puntos:\n
El número de turnos que necesites para hacer bingo se resta a 100 (puntos = 100 - turnos).\n
¡Acaba el bingo con el mínimo de turnos para obtener más puntos y subir en el ranking!`);
		mostrarRanking();
		console.log('Este es tu cartón:');
	}
	var bingoCard = generarCarton();
	mostrarCarton(bingoCard);
	cambiarCarton(nombre);
}

//Funciones para generar el carton
function generarCarton() {
	return [
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false },
		{ number: randomNumber(), matched: false }
	];
}

function randomNumber() {
	var x = Math.floor(Math.random() * 99);
	if (numerosCarton.includes(x)) {
		return randomNumber();
	} else {
		numerosCarton.push(x);
		return x;
	}
}
//

function cambiarCarton(nombre) {
	switch (
		prompt(
			`${nombre}, ¿quieres empezar a jugar o cambiar de cartón? (JUGAR/CAMBIAR)`
		)
	) {
		case 'JUGAR':
			return nuevoTurno(bingoCard, nombre);
		case 'CAMBIAR':
			var bingoCard = generarCarton();
			console.log('Este es tu nuevo cartón:');
			mostrarCarton(bingoCard);
			return cambiarCarton(nombre);
		case null:
			return console.log('¡Hasta pronto!');
		default:
			alert('Introduce una opción válida (JUGAR o CAMBIAR)');
			cambiarCarton(nombre);
	}
}

function mostrarCarton(bingoCard = bingoCard) {
	return console.log(`${bingoCard[0]['number']} ${bingoCard[1]['number']} ${bingoCard[2]['number']} ${bingoCard[3]['number']} ${bingoCard[4]['number']}\n
${bingoCard[5]['number']} ${bingoCard[6]['number']} ${bingoCard[7]['number']} ${bingoCard[8]['number']} ${bingoCard[9]['number']}\n
${bingoCard[10]['number']} ${bingoCard[11]['number']} ${bingoCard[12]['number']} ${bingoCard[13]['number']} ${bingoCard[14]['number']}`);
}

function generarNum() {
	var x = Math.floor(Math.random() * 99);
	if (numeros.includes(x)) {
		return generarNum();
	} else {
		numeros.push(x);
		return x;
	}
}

function nuevoTurno(bingoCard, nombre) {
	var nuevoNum = generarNum();
	turnos++;
	console.log(`El nuevo número es el ${nuevoNum}.`);
	for (var i = 0; i < bingoCard.length; i++) {
		if (bingoCard[i]['number'] === nuevoNum) {
			bingoCard[i]['number'] = 'X';
			bingoCard[i]['matched'] = true;
			console.log(`TU CARTÓN TIENE EL ${nuevoNum}!`);
		}
	}
	if (hayLinea(bingoCard)) {
		console.log('¡HAS HECHO LÍNEA! Continuamos para bingo...');
		mostrarCarton(bingoCard);
		return preguntarNuevoTurno(bingoCard, nombre);
	} else if (hayBingo(bingoCard)) {
		console.log(
			`Has completado el bingo en ${turnos} turnos, que equivalen a ${
				100 - turnos
			} puntos.`
		);
		window.alert(
			`¡FELICIDADES, HAS COMPLETADO EL BINGO! TU PUNTUACIÓN ES DE ${
				100 - turnos
			} PUNTOS\nA continuación puedes comprovar tu posición en el ranking.`
		);
		//ranking[nombre] = 100 - turnos;
		ranking[nombre] = 100 - turnos;
		mostrarRanking();
		if (window.confirm('¿Quieres volver a jugar?')) {
			numeros = [0];
			numerosCarton = [0];
			turnos = 0;
			l = 0;
			return bingo();
		} else {
			return console.log('¡Hasta otra!');
		}
	} else {
		console.log('Así queda tu cartón:');
		mostrarCarton(bingoCard);
		return preguntarNuevoTurno(bingoCard, nombre);
	}
}

function preguntarNuevoTurno(bingoCard, nombre) {
	if (window.confirm(`${nombre}, ¿quieres jugar un nuevo turno?`)) {
		return nuevoTurno(bingoCard, nombre);
	} else {
		return console.log('¡Hasta otra!');
	}
}

function hayLinea(bingoCard) {
	if (
		bingoCard[0]['matched'] &&
		bingoCard[1]['matched'] &&
		bingoCard[2]['matched'] &&
		bingoCard[3]['matched'] &&
		bingoCard[4]['matched'] &&
		l === 0
	) {
		l = 1;
		return true;
	}
	if (
		bingoCard[5]['matched'] &&
		bingoCard[6]['matched'] &&
		bingoCard[7]['matched'] &&
		bingoCard[8]['matched'] &&
		bingoCard[9]['matched'] &&
		l === 0
	) {
		l = 1;
		return true;
	}
	if (
		bingoCard[10]['matched'] &&
		bingoCard[11]['matched'] &&
		bingoCard[12]['matched'] &&
		bingoCard[13]['matched'] &&
		bingoCard[14]['matched'] &&
		l === 0
	) {
		l = 1;
		return true;
	}
	hayBingo(bingoCard);
}

function hayBingo(bingoCard) {
	if (
		bingoCard[0]['matched'] &&
		bingoCard[1]['matched'] &&
		bingoCard[2]['matched'] &&
		bingoCard[3]['matched'] &&
		bingoCard[4]['matched'] &&
		bingoCard[5]['matched'] &&
		bingoCard[6]['matched'] &&
		bingoCard[7]['matched'] &&
		bingoCard[8]['matched'] &&
		bingoCard[9]['matched'] &&
		bingoCard[10]['matched'] &&
		bingoCard[11]['matched'] &&
		bingoCard[12]['matched'] &&
		bingoCard[13]['matched'] &&
		bingoCard[14]['matched']
	) {
		return true;
	}
}

function mostrarRanking() {
	rankingOrder = [];
	for (var nombre in ranking) {
		rankingOrder.push([nombre, ranking[nombre]]);
	}
	rankingOrder.sort(function (a, b) {
		return b[1] - a[1];
	});
	console.log('Ranking actualizado:');
	for (var i = 0; i < rankingOrder.length; i++) {
		console.log(`${i + 1}º. ${rankingOrder[i]} puntos.`);
	}
}

bingo();
