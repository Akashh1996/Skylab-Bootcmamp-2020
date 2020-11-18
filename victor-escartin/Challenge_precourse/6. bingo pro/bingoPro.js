/*Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre).

Para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número. Si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0.

El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X" (solamente se puede cantar línea 1 vez).

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.

Por último, deberá preguntar si desea volver a jugar. Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

Versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que: function()=> Generar Numero Random Bombo function()=> Nuevo turno (Match carton[i] === randomNum) function() => Preguntar Nuevo Turno


Pro
● Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "Yes" para proceder.

● Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.

● Antes de empezar el juego, muestra el sistema de puntos al usuario.

● Ranking de usuarios (ordenado por puntos)
*/

var result = 0;
var showCard;
var score;
var finalRanking = [];
var line = [];
var card = [];

//Función perfil usuario
function user() {
	var player = { name: String, score: Number };
	var name = prompt('Por favor, introduce tu nombre:');
	name = name.toString();
	if (name == null || name === '') {
		alert('Debes introducir un nombre de JUGADOR para iniciar el BINGO');
		user();
	} else {
		alert('¡Bienvenido ' + name + ', iniciamos el juego!');
		createCard();
		console.log('Tu resultado ha sido: ' + result + ' intentos');
		points();
		player.name = name;
		player.score = score;
		finalRanking.push(player);
		//console.log(finalRanking);
	}

	menu();
}

//Función menú opciones usuario
function menu() {
	let option = prompt('Indica si quieres JUGAR, ver RESULTADOS o SALIR');

	if (option === null) {
		return;
	} else {
		option = option.toString();
		option = option.toLowerCase();
		switch (option) {
			case 'jugar':
				user();
				break;
			case 'resultados':
				ranking();
				break;
			case 'salir':
				break;
			default:
				alert('Por favor, vuelva a indicar tu elección');
				menu();
		}
	}
}

//Función crear tarjeta
function createCard() {
	card = [];

	for (let i = 0; i < 15; i++) {
		let randNum = Math.ceil(Math.random() * 10);
		card.push(randNum);
	}

	console.log('%cEsta es tu tarjeta de juego:', 'color: blue');

	showCard = card.join();
	console.log(
		showCard[0],
		showCard[1],
		showCard[2],
		showCard[3],
		showCard[4],
		'\n',
		showCard[5],
		showCard[6],
		showCard[7],
		showCard[8],
		showCard[9],
		'\n',
		showCard[10],
		showCard[11],
		showCard[12],
		showCard[13],
		showCard[14]
	);
	console.log('%c¡Mucha Suerte!', 'color: blue');
	bingo(card);
	return result;
}

//Función tachar números de la tarjeta
function bingo(userCard) {
	if (confirm('¿Sacamos un número nuevo?')) {
		result += 1;
		number = Math.ceil(Math.random() * 10);
		console.log('El número es el ' + number);
	} else {
		return;
	}

	if (userCard.includes(number)) {
		userCard[userCard.indexOf(number)] = 'X';
		showCard = userCard.join();
		console.log(showCard);

		while (
			userCard[0] != 'X' ||
			userCard[1] != 'X' ||
			userCard[2] != 'X' ||
			userCard[3] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X' ||
			userCard[4] != 'X'
		) {
			if (
				(userCard[0] == 'X' &&
					userCard[1] == 'X' &&
					userCard[2] == 'X' &&
					userCard[3] == 'X' &&
					userCard[4] == 'X') ||
				(userCard[5] == 'X' &&
					userCard[6] == 'X' &&
					userCard[7] == 'X' &&
					userCard[8] == 'X' &&
					userCard[9] == 'X') ||
				(userCard[10] == 'X' &&
					userCard[11] == 'X' &&
					userCard[12] == 'X' &&
					userCard[13] == 'X' &&
					userCard[14] == 'X')
			) {
				console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡LINEA!!!!!!!!!!!!!!!!!!!!');
				console.log(showCard);
				bingo(userCard);
			} else {
				bingo(userCard);
			}
		}

		console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡BINGO!!!!!!!!!!!!!!!!!!!!');
		console.log('%cHas completado la tarjeta, ¡ENHORABUENA!', 'color:blue');
	} else {
		console.log(showCard);
		bingo(card);
	}

	return result;
}

//Función solicitar cambio tarjeta
function otherCard() {
	let newCard = prompt('¿Quieres cambiar tu cartón?');
	if (newCard === null) {
		return;
	} else {
		newCard = newCard.toString();
		newCard = newCard.toLowerCase();
		switch (newCard) {
			case 'si':
				createCard();
				break;
			case 'no':
				bingo(card);
				break;
			default:
				alert('Por favor, responde SI o NO');
				otherCard();
		}
	}
}

//Función calcular resultados
function points() {
	if (result < 40) {
		score = 100;
	} else if (result < 60) {
		score = 50;
	} else if (result < 80) {
		score = 20;
	} else {
		score = 10;
	}
	return console.log('La puntuación obtenida es ' + score + ' puntos');
}

//Función mostrar resultados y clasificación jugadores ordenada por puntuación de mayor a menor
function ranking() {
	console.log(
		'PUNTUACIONES:\n\n -Menos de 40 intentos= 100 puntos\n -Menos de 600 intentos= 50 puntos\n -Menos de 80 intentos= 20 puntos\n -80 intentos o más= 10 punto'
	);

	finalRanking.sort(function (a, b) {
		if (a.score > b.score) {
			return -1;
		}
		if (a.score < b.score) {
			return 1;
		}
		return 0;
	});

	console.log('%cEste es el ranking de resultados: ', 'color: blue');

	for (let z = 0; z < finalRanking.length; z++) {
		console.log(
			finalRanking[z].name + ': ' + finalRanking[z].score + ' puntos'
		);
	}

	menu();
}

user();
