var totalPlayers = [
	{ user: 'TONY STARK', points: 25 },
	{ user: 'STEPHEN STRANGE', points: 24 },
	{ user: 'BRUCE BANNER', points: 22 },
	{ user: 'ROCKET RACOON', points: 21 },
	{ user: 'NATASHA ROMANOFF', points: 19 },
	{ user: 'PETER PARKER', points: 18 },
	{ user: 'STEVE ROGERS', points: 15 },
	{ user: 'CAROL DANVERS', points: 14 },
	{ user: 'THOR', points: 5 },
	{ user: 'YO SOY GROOT', points: 1 }
];
var allUserNames = [
	'TONY STARK',
	'STEPHEN STRANGE',
	'BRUCE BANNER',
	'ROCKET RACOON',
	'NATASHA ROMANOFF',
	'PETER PARKER',
	'STEVE ROGERS',
	'CAROL DANVERS',
	'THOR',
	'YO SOY GROOT'
];
var questions = [];
var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeLeft;
var timerGenerate;
var gameAsk = document.getElementById('game_questions');
var userAnswer = document.getElementById('answer');
var userName = document.getElementById('user_name').value;

//Base de datos de preguntas y respuestas
var questionsList = [
	[
		{
			letter: 'a',
			answer: 'avengers',
			status: 0,
			question:
				'CON LA A. En inglés, grupo de superhéroes que defiende el mundo frente a invasores alienigenas'
		},
		{
			letter: 'a',
			answer: 'alma',
			status: 0,
			question: 'CON LA A. Gema que exige el sacrificio de lo que más quieres'
		},
		{
			letter: 'a',
			answer: 'avengers',
			status: 0,
			question:
				'CON LA A. En inglés, grupo de superhéroes que defiende el mundo frente a invasores alienigenas'
		}
	],
	[
		{
			letter: 'b',
			answer: 'bruce',
			status: 0,
			question:
				'CON LA B. Nombre del científico que tiene pánico a las situaciones de estrés'
		},
		{
			letter: 'b',
			answer: 'bifrost',
			status: 0,
			question:
				'CON LA B. Puente de arco iris por el que Thor puede viajar desde Asgard a cualquier planeta'
		},
		{
			letter: 'b',
			answer: 'bruce',
			status: 0,
			question:
				'CON LA B. Nombre del científico que tiene pánico a las situaciones de estrés'
		}
	],
	[
		{
			letter: 'c',
			answer: 'conejo',
			status: 0,
			question: 'CON LA C. Apodo con el que Thor se burla de Rocket'
		},
		{
			letter: 'c',
			answer: 'cero',
			status: 0,
			question: 'CON LA C. Número de Óscars que ha acumulado la saga Vengadores'
		},
		{
			letter: 'c',
			answer: 'civil war',
			status: 0,
			question:
				'CON LA C. --2 PALABRAS-- Títula de la película de Vengadores que desata la guerra entre Iron Man y Capitán América'
		}
	],
	[
		{
			letter: 'd',
			answer: 'danvers',
			status: 0,
			question: 'CON LA D. Apellido de la Vengadora más poderosa'
		},
		{
			letter: 'd',
			answer: 'destructor de tormentas',
			status: 0,
			question:
				'CON LA D. --3 PALABRAS-- Arma forjada por Thor y Rocket en la estrella de Nidavellir para matar a Thanos'
		},
		{
			letter: 'd',
			answer: 'danvers',
			status: 0,
			question: 'CON LA D. Apellido de la Vengadora más poderosa'
		}
	],
	[
		{
			letter: 'e',
			answer: 'nebula',
			status: 0,
			question:
				'CONTIENE LA E. Hija de Thanos a la que le encanta el color azul'
		},
		{
			letter: 'e',
			answer: 'endgame',
			status: 0,
			question: 'CON LA E. Título de la película que cierra la saga Vengadores'
		},
		{
			letter: 'e',
			answer: 'nebula',
			status: 0,
			question:
				'CONTIENE LA E. Hija de Thanos a la que le encanta el color azul'
		}
	],
	[
		{
			letter: 'f',
			answer: 'infinito',
			status: 0,
			question: 'CONTIENE LA F. Gemas que Thanos busca por todo el universo'
		},
		{
			letter: 'f',
			answer: 'infinito',
			status: 0,
			question: 'CONTIENE LA F. Gemas que Thanos busca por todo el universo'
		},
		{
			letter: 'f',
			answer: 'infinito',
			status: 0,
			question: 'CONTIENE LA F. Gemas que Thanos busca por todo el universo'
		}
	],
	[
		{
			letter: 'g',
			answer: 'groot',
			status: 0,
			question:
				"CON LA G. Personaje que con solo 3 palabras podia explicar cualquier cosa: 'Yo soy...'"
		},
		{
			letter: 'g',
			answer: 'guantelete',
			status: 0,
			question: 'CON LA G. Canalizador del poder de las Gemas del Infinito'
		},
		{
			letter: 'g',
			answer: 'groot',
			status: 0,
			question:
				"CON LA G. Personaje que con solo 3 palabras podia explicar cualquier cosa: 'Yo soy...'"
		}
	],
	[
		{
			letter: 'h',
			answer: 'thanos',
			status: 0,
			question: 'CONTIENE LA H. Según él, era inevitable'
		},
		{
			letter: 'h',
			answer: 'hydra',
			status: 0,
			question:
				'CON LA H. Organización criminal que nace en la Alemania Nazi para localizar el Teseracto, y que acaba derrotando el Capitán América'
		},
		{
			letter: 'h',
			answer: 'heimdal',
			status: 0,
			question:
				'CON LA H. Dios asgardiano que puede ver lo que ocurre en cualquier lugar del universo, y encargado de abrir el puente del Bifrost'
		}
	],
	[
		{
			letter: 'i',
			answer: 'tiempo',
			status: 0,
			question:
				'CONTIENE LA I. Gema que recupera Hulk en su viaje al pasado en Avengers: Endgame'
		},
		{
			letter: 'i',
			answer: 'tiempo',
			status: 0,
			question:
				'CONTIENE LA I. Gema que recupera Hulk en su viaje al pasado en Avengers: Endgame'
		},
		{
			letter: 'i',
			answer: 'tiempo',
			status: 0,
			question:
				'CONTIENE LA I. Gema que recupera Hulk en su viaje al pasado en Avengers: Endgame'
		}
	],
	[
		{
			letter: 'j',
			answer: 'jane',
			status: 0,
			question:
				'CON LA J. Gran científica, se convierte en el amor platónico de Thor'
		},
		{
			letter: 'j',
			answer: 'jotunheim',
			status: 0,
			question:
				'CON LA J. Mundo de los Gigantes Helados y hogar de nacimiento de Loki hasta que es adoptado por Odin'
		},
		{
			letter: 'j',
			answer: 'jane',
			status: 0,
			question:
				'CON LA J. Gran científica, se convierte en el amor platónico de Thor'
		}
	],
	[
		{
			letter: 'k',
			answer: 'ragnarok',
			status: 0,
			question:
				'CONTIENE LA K. Nombre que recibe la destrucción de Asgard a manos de Surtur y Hela'
		},
		{
			letter: 'k',
			answer: 'sokovia',
			status: 0,
			question:
				'CONTIENE LA K. Ciudad que acaba destruida en la lucha entre los Vengadores y Ultron'
		},
		{
			letter: 'k',
			answer: 'kree',
			status: 0,
			question:
				'CON LA K. Raza alienígena a la que se enfrenta Capitana Marvel, y a quien pertenece entre otros Ronan el Acusador'
		}
	],
	[
		{
			letter: 'l',
			answer: 'loki',
			status: 0,
			question: 'CON LA L. Muy a su pesar, siempre será el hermano de Thor'
		},
		{
			letter: 'l',
			answer: 'lang',
			status: 0,
			question: 'CON LA L. Apellido del personaje de Ant-Man'
		},
		{
			letter: 'l',
			answer: 'lobo',
			status: 0,
			question:
				'CON LA L. Raza del animal que libera Hela para conquistar Asgard en Thor: Ragnarok'
		}
	],
	[
		{
			letter: 'm',
			answer: 'morgan',
			status: 0,
			question: 'CON LA M. Hija que quiere 3.000 a su padre'
		},
		{
			letter: 'm',
			answer: 'mjolnir',
			status: 0,
			question: 'CON LA M. Nombre del martillo de Thor'
		},
		{
			letter: 'm',
			answer: 'mierda',
			status: 0,
			question:
				'CON LA M. Palabra que dice Drax cuando sus amigos le hacen entender que no domina la habilidad de la invisibilidad'
		}
	],
	[
		{
			letter: 'n',
			answer: 'nidavellir',
			status: 0,
			question:
				'CON LA N. Estrella en la que Thor forja el Destructor de Tormentas'
		},
		{
			letter: 'n',
			answer: 'neurocirujano',
			status: 0,
			question:
				'CON LA N. Trabajo de Stephen Strange antes de convertirse en Dr. Strange'
		},
		{
			letter: 'n',
			answer: 'nidavellir',
			status: 0,
			question:
				'CON LA N. Estrella en la que Thor forja el Destructor de Tormentas'
		}
	],
	[
		{
			letter: 'ñ',
			answer: 'araña',
			status: 0,
			question: 'CONTIENE LA Ñ. Insecto preferido de Peter Parker'
		},
		{
			letter: 'ñ',
			answer: 'araña',
			status: 0,
			question: 'CONTIENE LA Ñ. Insecto preferido de Peter Parker'
		},
		{
			letter: 'ñ',
			answer: 'araña',
			status: 0,
			question: 'CONTIENE LA Ñ. Insecto preferido de Peter Parker'
		}
	],
	[
		{
			letter: 'o',
			answer: 'odin',
			status: 0,
			question: 'CON LA O. Rey de Asgard y Padre de todos'
		},
		{
			letter: 'o',
			answer: 'odin',
			status: 0,
			question: 'CON LA O. Rey de Asgard y Padre de todos'
		},
		{
			letter: 'o',
			answer: 'odin',
			status: 0,
			question: 'CON LA O. Rey de Asgard y Padre de todos'
		}
	],
	[
		{
			letter: 'p',
			answer: 'pepper',
			status: 0,
			question: 'CON LA P. Ella sabe que en el fondo Tony Stark tiene corazón'
		},
		{
			letter: 'p',
			answer: 'poder',
			status: 0,
			question:
				'CON LA P. Primera Gema del Infinito que Thanos incrusta en el guantelete'
		},
		{
			letter: 'p',
			answer: 'happy',
			status: 0,
			question: 'CONTIENE LA P. Apodo del ayudante de Tony Stark'
		}
	],
	[
		{
			letter: 'q',
			answer: 'queens',
			status: 0,
			question: 'CON LA Q. Barrio natal de Peter Parker'
		},
		{
			letter: 'q',
			answer: 'quill',
			status: 0,
			question: 'CON LA Q. Apellido real de StardLord'
		},
		{
			letter: 'q',
			answer: 'valquiria',
			status: 0,
			question:
				'CONTIENE LA V. Defensora de Asgard y gran amiga de Thor, quien acaba entregándole el trono de Nuevo Asgard'
		}
	],
	[
		{
			letter: 'r',
			answer: 'romanoff',
			status: 0,
			question: 'CON LA R. Apellido de la mejor amiga del Capitán America'
		},
		{
			letter: 'r',
			answer: 'ronan',
			status: 0,
			question:
				'CON LA R. Villano ayudante de Thanos que localiza la Gema del Poder antes de que se la arrebaten los Guardianes de la Galaxia'
		},
		{
			letter: 'r',
			answer: 'robert',
			status: 0,
			question:
				'CON LA R. Nombre del actor que interpreta a Tony Stark/ Iron Man'
		}
	],
	[
		{
			letter: 's',
			answer: 'teseracto',
			status: 0,
			question:
				'CONTIENE LA S. Cuadrado de color azul que inicia la saga Avengers y esconde la gema del Espacio'
		},
		{
			letter: 's',
			answer: 'strange',
			status: 0,
			question: 'CON LA S. Apellido del Vengador guardián de la Gema del Tiempo'
		},
		{
			letter: 's',
			answer: 'sam',
			status: 0,
			question: 'CON LA S. Nombre real del vengador Falcon'
		}
	],
	[
		{
			letter: 't',
			answer: 'titan',
			status: 0,
			question: 'CON LA T. Planeta de origen de Thanos'
		},
		{
			letter: 't',
			answer: 'thor',
			status: 0,
			question: 'CON LA T. Según Peter Quill tampoco es tan guapo'
		},
		{
			letter: 't',
			answer: 'carter',
			status: 0,
			question:
				'CONTIENE LA T. Apellido de la teniente que acaba siendo el amor platónico de Steve Rogers'
		}
	],
	[
		{
			letter: 'u',
			answer: 'ultron',
			status: 0,
			question:
				'CON LA U. Villano que inicia una era que acaba suponiendo la destrucción de Sukovia'
		},
		{
			letter: 'u',
			answer: 'multiverso',
			status: 0,
			question:
				'CONTIENE LA U. Espacio por el que Los Vengadores viajan al pasado en busca de las Gemas del Infinito'
		},
		{
			letter: 'u',
			answer: 'ultron',
			status: 0,
			question:
				'CON LA U. Villano que inicia una era que acaba suponiendo la destrucción de Sucovia'
		}
	],
	[
		{
			letter: 'v',
			answer: 'jarvis',
			status: 0,
			question:
				'CONTIENE LA V. Ayudante histórico de la familia Stark, Tony Stark utiliza su nombre con su asistente virtual'
		},
		{
			letter: 'v',
			answer: 'vengador',
			status: 0,
			question:
				'CON LA V. El Capitán America esconsidera en la saga como el primer...'
		},
		{
			letter: 'v',
			answer: 'vision',
			status: 0,
			question:
				'CON LA V. Ser todopoderoso creado por la Gema de la Mente, y enamorado de Bruja Escarlata'
		}
	],
	[
		{
			letter: 'w',
			answer: 'wakanda',
			status: 0,
			question: 'CON LA W. País donde reina Black Panther'
		},
		{
			letter: 'w',
			answer: 'wanda',
			status: 0,
			question:
				'CON LA W. Nombre de la única Vengadora capaz de destruir la Gema de la Mente'
		},
		{
			letter: 'w',
			answer: 'howard',
			status: 0,
			question: 'CONTIENE LA W. Nombre del padre de Tony Stark'
		}
	],
	[
		{
			letter: 'x',
			answer: 'galaxia',
			status: 0,
			question:
				'CONTIENE LA X. StarLord, Gamora, Drax, Rocket y Groot están decididos a ser sus guardianes'
		},
		{
			letter: 'x',
			answer: 'xandar',
			status: 0,
			question:
				'CON LA X. Planeta donde Los Guardianes de la Galaxia dejan la Gema del Poder, y que posteriormente es arrasado por Thanos'
		},
		{
			letter: 'x',
			answer: 'galaxia',
			status: 0,
			question:
				'CONTIENE LA X. StarLord, Gamora, Drax, Rocket y Groot están decididos a ser sus guardianes'
		}
	],
	[
		{
			letter: 'y',
			answer: 'yondu',
			status: 0,
			question:
				'CON LA Y. Líder de los saqueadores y padrino de Peter Quill, domina una flecha mágica con sus silbidos'
		},
		{
			letter: 'y',
			answer: 'may',
			status: 0,
			question: 'CONTIENE LA Y. Nombre de la tia de Peter Parker'
		},
		{
			letter: 'y',
			answer: 'pym',
			status: 0,
			question:
				'CONTIENE LA Y. Apellido del inventor de las partículas que permiten a Ant-Man cambiar de tamaño o navegar en el multiverso'
		}
	],
	[
		{
			letter: 'z',
			answer: 'zoe',
			status: 0,
			question:
				'CON LA Z. Nombre de la actriz que interpreta el personaje de Gamora'
		},
		{
			letter: 'z',
			answer: 'zoe',
			status: 0,
			question:
				'CON LA Z. Nombre de la actriz que interpreta el personaje de Gamora'
		},
		{
			letter: 'z',
			answer: 'zoe',
			status: 0,
			question:
				'CON LA Z. Nombre de la actriz que interpreta el personaje de Gamora'
		}
	]
];

//Activar botones para respuesta
function activeButtons() {
	document.getElementById('answer').addEventListener('keyup', function (event) {
		event.preventDefault();

		if (event.keyCode === 13) {
			document.getElementById('ok').onclick();
		}

		if (event.keyCode === 32) {
			document.getElementById('pasapalabra').onclick();
		}

		if (event.keyCode === 27) {
			document.getElementById('stop').onclick();
		}
	});
}

activeButtons();

//Seleccionar 27 preguntas aleatorias
function selectQuestions() {
	for (var j = 0; j < 27; j++) {
		var b = Math.floor(Math.random() * 3);
		questions.push(questionsList[j][b]);
		questions[j]['status'] = 0;
	}
	return questions;
}

//Mostrar clasificación desde menú principal
function showBestPlayers() {
	document.getElementById('container_menu').style.visibility = 'hidden';
	document.getElementById('container_best_players').style.visibility =
		'visible';
	document.getElementById('name_intro').style.visibility = 'hidden';
}

//Mostrar instrucciones del juego desde menú principal
function showInstructions() {
	document.getElementById('container_menu').style.visibility = 'hidden';
	document.getElementById('container_instructions').style.visibility =
		'visible';
	document.getElementById('name_intro').style.visibility = 'hidden';
}

//Botón volver a menú principal
function returnToMenu() {
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = 'hidden';
	document.getElementById('container_game').style.visibility = 'hidden';
	document.getElementById('container_best_players').style.visibility = 'hidden';
	document.getElementById('container_menu').style.visibility = 'visible';
	document.getElementById('container_instructions').style.visibility = 'hidden';
}

//Panel nuevo jugador/a visible
function newUserIntro() {
	document.getElementById('user_name').value = '';
	document.getElementById('name_intro').style.visibility = 'visible';
	document.getElementById('alert_user').style.visibility = 'hidden';
	document.getElementById('user_name').focus();
}

//Introducción de nuevo jugador/a
function newUser() {
	userName = document.getElementById('user_name').value;
	userName = userName.toUpperCase();
	if (userName === '') {
		//Vacio para evitar que avance el programa
	} else if (allUserNames.indexOf(userName) === -1) {
		allUserNames.push(userName);
		document.getElementById('container_menu').style.visibility = 'hidden';
		document.getElementById('play_menu').style.display = 'none';
		document.getElementById('container_game').style.visibility = 'visible';
		document.getElementById('correct').innerHTML = 'Aciertos';
		document.getElementById('incorrect').innerHTML = 'Errores';
		document.getElementById('correct').style.color = 'white';
		document.getElementById('incorrect').style.color = 'white';
		questions = [];
		questionIndex = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;

		selectQuestions();

		for (var i = 0; i < questions.length; i++) {
			questions[i].status = 0;
			document.getElementsByClassName('results')[i].style.backgroundColor =
				'white';
		}

		gameQuestions();
		timer();
	} else {
		document.getElementById('alert_user').style.visibility = 'visible';
		setTimeout(newUserIntro, 2000);
	}
	document.getElementById('answer').focus();
}

//Generador de preguntas
function gameQuestions() {
	userAnswer.value = '';

	if (questions[questionIndex].status === 0) {
		gameAsk.innerHTML = questions[questionIndex].question;
	} else {
		goToList();
	}
}

//Condicionales de respuesta
function answerAnalyzer() {
	userAnswer.value = userAnswer.value.toLowerCase();

	if (userAnswer.value === questions[questionIndex].answer) {
		questions[questionIndex].status = 'c';
		document.getElementsByClassName('results')[
			questionIndex
		].style.backgroundColor = 'green ';
		correctAnswer++;
		document.getElementById('correct').innerHTML =
			'<span style="color:white">' + 'Aciertos: ' + '</span>' + correctAnswer;
		document.getElementById('correct').style.color = 'green';
		goToList();
	} else {
		questions[questionIndex].status = 'f';
		document.getElementsByClassName('results')[
			questionIndex
		].style.backgroundColor = 'red';
		incorrectAnswer++;
		document.getElementById('incorrect').innerHTML =
			'<span style="color:white">' + 'Errores: ' + '</span>' + incorrectAnswer;
		document.getElementById('incorrect').style.color = 'red';
		goToList();
	}
}

//Jugador/a pulsa PASAPALABRA
function userPasapalabra() {
	document.getElementsByClassName('results')[
		questionIndex
	].style.backgroundColor = 'blue';
	goToList();
}

//Incorporar en Ranking jugador/a y puntuación
function userRanked() {
	totalPlayers.push({
		user: userName,
		points: correctAnswer
	});
}

//Analisis de respuestas
function goToList() {
	if (questionIndex < questions.length - 1) {
		questionIndex++;
		gameQuestions();
		document.getElementById('answer').focus();
	} else if (
		questionIndex === questions.length - 1 &&
		correctAnswer + incorrectAnswer === questions.length
	) {
		clearInterval(timerGenerate);
		userRanked();
		rankingBestPlayers();
	} else if (questionIndex === questions.length - 1) {
		questionIndex = 0;
		gameQuestions();
	}
}

//Mostrar Clasificación General de jugadores/as
function rankingBestPlayers() {
	document.getElementById('container_menu').style.visibility = 'hidden';
	document.getElementById('container_game').style.visibility = 'hidden';
	document.getElementById('container_best_players').style.visibility =
		'visible';

	function list() {
		function sortRanking() {
			totalPlayers.sort(function (a, b) {
				return b.points - a.points;
			});
		}
		sortRanking();

		var filterUser = totalPlayers.filter(function (value) {
			return value.user;
		});

		for (var i = 0; i < filterUser.length; i++) {
			document.getElementById('first').innerHTML =
				'<span style="color:orange">' +
				filterUser[0].user +
				'</span>' +
				' con un total de: ' +
				filterUser[0].points +
				' puntos';
			document.getElementById('second').innerHTML =
				'<span style="color:orange">' +
				filterUser[1].user +
				'</span>' +
				' con un total de: ' +
				filterUser[1].points +
				' puntos';
			document.getElementById('third').innerHTML =
				'<span style="color:orange">' +
				filterUser[2].user +
				'</span>' +
				' con un total de: ' +
				filterUser[2].points +
				' puntos';
			document.getElementById('fourth').innerHTML =
				'<span style="color:orange">' +
				filterUser[3].user +
				'</span>' +
				' con un total de: ' +
				filterUser[3].points +
				' puntos';
			document.getElementById('fifth').innerHTML =
				'<span style="color:orange">' +
				filterUser[4].user +
				'</span>' +
				' con un total de: ' +
				filterUser[4].points +
				' puntos';
			document.getElementById('sixth').innerHTML =
				'<span style="color:orange">' +
				filterUser[5].user +
				'</span>' +
				' con un total de: ' +
				filterUser[5].points +
				' puntos';
			document.getElementById('seventh').innerHTML =
				'<span style="color:orange">' +
				filterUser[6].user +
				'</span>' +
				' con un total de: ' +
				filterUser[6].points +
				' puntos';
			document.getElementById('eighth').innerHTML =
				'<span style="color:orange">' +
				filterUser[7].user +
				'</span>' +
				' con un total de: ' +
				filterUser[7].points +
				' puntos';
			document.getElementById('nineth').innerHTML =
				'<span style="color:orange">' +
				filterUser[8].user +
				'</span>' +
				' con un total de: ' +
				filterUser[8].points +
				' puntos';
			document.getElementById('tenth').innerHTML =
				'<span style="color:orange">' +
				filterUser[9].user +
				'</span>' +
				' con un total de: ' +
				filterUser[9].points +
				' puntos';
		}
	}
	list();
}

//Cuenta atrás
function timer() {
	var timerPanel = document.getElementById('timer');
	timerPanel.innerHTML = '300';
	timeLeft = 300;
	timerGenerate = setInterval(function () {
		timeLeft--;
		if (timeLeft <= 10) {
			timerPanel.style.color = 'red';
		}
		if (timeLeft === 0) {
			clearInterval(timerGenerate);
			userRanked();
			rankingBestPlayers();
		}
		timerPanel.innerHTML = timeLeft;
	}, 1000);
}

//Botón salir del juego
function endGame() {
	clearInterval(timerGenerate);
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = 'hidden';
	document.getElementById('container_game').style.visibility = 'hidden';
	document.getElementById('container_menu').style.visibility = 'visible';
}
