'use strict';

var questions = [
	{
		letter: 'a',
		answer: ['abducir', 'aceite', 'agenda'],
		status: 0,
		question: [
			'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
			'CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas',
			'CON LA A. Libro o cuaderno en el que se apunta aquello que se ha de hacer para no olvidarlo'
		]
	},
	{
		letter: 'b',
		answer: ['bingo', 'buzon', 'bonanza'],
		status: 0,
		question: [
			"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
			'CON LA B. Abertura por donde se echan las cartas para el correo',
			'CON LA B. Prosperidad'
		]
	},
	{
		letter: 'c',
		answer: ['churumbel', 'chandal', 'caracol'],
		status: 0,
		question: [
			'CON LA C. Niño, crío, bebé',
			'CON LA C. Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios',
			'CON LA C. Nombre del molusco gasterópodo terrestre, de corte en espiral, cuya carne puede comerse'
		]
	},
	{
		letter: 'd',
		answer: ['diarrea', 'devoto', 'dormir'],
		status: 0,
		question: [
			'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
			'CON LA D. Dedicado con fervor a obras de piedad y religión',
			'CON LA D. Hallarse en el estado de reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntario'
		]
	},
	{
		letter: 'e',
		answer: ['ectoplasma', 'entera', 'entrecot'],
		status: 0,
		question: [
			'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
			'CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas',
			'CON LA E. Trozo de carne sacado de entre costilla y costilla de la res'
		]
	},
	{
		letter: 'f',
		answer: ['facil', 'forestal', 'fiera'],
		status: 0,
		question: [
			'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
			'CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos',
			'CON LA F. Animal salvaje o agresivo'
		]
	},
	{
		letter: 'g',
		answer: ['galaxia', 'gorigori', 'gorgorito'],
		status: 0,
		question: [
			'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
			'CON LA G. Coloquialmente, canto fúnebre con el que se acompañan los entierros',
			'CON LA G. Coloquialmente, quiebro que se hace con la voz en la garganta al cantar'
		]
	},
	{
		letter: 'h',
		answer: ['harakiri', 'hombrera', 'hidroavion'],
		status: 0,
		question: [
			'CON LA H. Suicidio ritual japonés por desentrañamiento',
			'CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros',
			'CON LA H. Avión que lleva, en lugar de ruedas, uno o cuatro flotadores para posarse sobre el agua'
		]
	},
	{
		letter: 'i',
		answer: ['iglesia', 'intuir', 'inapetencia'],
		status: 0,
		question: [
			'CON LA I. Templo cristiano',
			'CON LA I. Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista',
			'CON LA I. Falta de ganas de comer'
		]
	},
	{
		letter: 'j',
		answer: ['jabali', 'jornada', 'jardineria'],
		status: 0,
		question: [
			"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
			'CON LA J. Tiempo de duración del trabajo diario',
			'CON LA J. Arte y oficio del jardinero'
		]
	},
	{
		letter: 'k',
		answer: ['kamikaze', 'koala', 'kimono'],
		status: 0,
		question: [
			'CON LA K. Persona que se juega la vida realizando una acción temeraria',
			'CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos',
			'CON LA K. Túnica de origen japonés, de mangas anchas y largas, abierta por delante y que se ciñe, cruzándola, mediante un cinturón'
		]
	},
	{
		letter: 'l',
		answer: ['licantropo', 'lastre', 'lobera'],
		status: 0,
		question: [
			'CON LA L. Hombre lobo',
			'CON LA L. Persona o cosa que entorpece o detiene algo',
			'CON LA L. Guarida de lobos'
		]
	},
	{
		letter: 'm',
		answer: ['misantropo', 'menor', 'mentira'],
		status: 0,
		question: [
			'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
			'CON LA M. Se dice de una persona que no ha alcanzado la mayoría de edad',
			'CON LA M. Expresión o manifestación contraria a lo que se sabe, se piensa o se siente'
		]
	},
	{
		letter: 'n',
		answer: ['necedad', 'ninfa', 'nativo'],
		status: 0,
		question: [
			'CON LA N. Demostración de poca inteligencia',
			'CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas',
			'CON LA N. Que ha nacido en el lugar de que se trata'
		]
	},
	{
		letter: 'ñ',
		answer: ['señal', 'patraña', 'hogaño'],
		status: 0,
		question: [
			'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo',
			'CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención',
			'CONTIENE LA Ñ. De tiempo que indica "en esta época", a diferencia de antaño'
		]
	},
	{
		letter: 'o',
		answer: ['orco', 'ordenanza', 'organo'],
		status: 0,
		question: [
			'CON LA O. Humanoide fantástico de apariencia terrible y bestial y piel de color verde, creado por el escritor Tolkien',
			'CON LA O. Empleado que en ciertas oficinas desempeña funciones subalternas',
			'CON LA O. Cada una de las partes del cuerpo animal o vegetal que ejercen una función'
		]
	},
	{
		letter: 'p',
		answer: ['protoss', 'prioridad', 'pianola'],
		status: 0,
		question: [
			'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
			'CON LA P. Anterioridad de algo respecto de otra cosa en tiempo u orden',
			'CON LA P. Piano que puede tocarse mecánicamente por pedales o por medio de corriente eléctrica'
		]
	},
	{
		letter: 'q',
		answer: ['queso', 'branquia', 'chisquero'],
		status: 0,
		question: [
			'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
			'CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos',
			'CONTIENE LA Q. Encendedor antiguo de bolsillo'
		]
	},
	{
		letter: 'r',
		answer: ['raton', 'rencor', 'rafaga'],
		status: 0,
		question: [
			'CON LA R. Roedor',
			'CON LA R. Resentimiento arraigado y tenaz',
			'CON LA R. Viento fuerte, repentino y de corta duración'
		]
	},
	{
		letter: 's',
		answer: ['stackoverflow', 'samba', 'simple'],
		status: 0,
		question: [
			'CON LA S. Comunidad salvadora de todo desarrollador informático',
			'CON LA S. Danza popular brasileña de influencia africana, cantada, de compás binario',
			'CON LA S. Que no tiene complicación'
		]
	},
	{
		letter: 't',
		answer: ['terminator', 'tragaperras', 'trece'],
		status: 0,
		question: [
			'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
			'CON LA T. Máquina de juegos de azar que funciona introduciendo monedas',
			'CON LA T. Número cardinal equivalente a 10 + 3'
		]
	},
	{
		letter: 'u',
		answer: ['ulular', 'usurpar', 'ungir'],
		status: 0,
		question: [
			'CON LA U. Dicho del viento: Producir sonido',
			'CON LA U. Atribuirse y usar un título o cargo ajeno como si fuera propio',
			'CON LA U. Aplicar a alguien o algo aceite u otra materia pingüe, extendiéndola superficialmente'
		]
	},
	{
		letter: 'v',
		answer: ['vikingos', 'vivienda', 'verde'],
		status: 0,
		question: [
			'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
			'CON LA V. Lugar cerrado o cubierto construido para ser habitado por personas',
			'CON LA V. Color de la esmeralda'
		]
	},
	{
		letter: 'w',
		answer: ['sandwich', 'wifi', 'waterpolo'],
		status: 0,
		question: [
			'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
			'CON LA W. Sistema de conexión inalámbrica, dentro de un área determinada, entre dispositivos electrónicos, y frecuentemente para acceso a internet',
			'CON LA W. Juego practicado en una piscina entre dos equipos de siete jugadores cada uno, que consiste en introducir el balón con la mano en la portería contraria mientras se nada'
		]
	},
	{
		letter: 'x',
		answer: ['botox', 'exterminar', 'exegesis'],
		status: 0,
		question: [
			'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
			'CONTIENE LA X. Matar o eliminar por completo de un lugar un conjunto de seres vivos',
			'CONTIENE LA X. Explicación o interpretación, particularmente de los libros de la Biblia'
		]
	},
	{
		letter: 'y',
		answer: ['peyote', 'leguleyo', 'rayo'],
		status: 0,
		question: [
			'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos, utilizado de forma ritual y medicinal por indígenas americanos',
			'CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente',
			'CONTIENE LA Y. Línea de luz que procede de un cuerpo luminoso, y especialmente las que vienen del sol'
		]
	},
	{
		letter: 'z',
		answer: ['zen', 'zarandeo', 'zodiacal'],
		status: 0,
		question: [
			'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
			'CON LA Z. Movimiento repetido y violento de un lado a otro',
			'CON LA Z. Perteneciente o relativo al zodíaco'
		]
	}
];

function userNameFormat(a) {
	a = a[0].toUpperCase() + a.slice(1);
	a = a[0] + a.slice(1).toLowerCase();
	return a;
}

function answerFormat(a) {
	if (a[a.length - 1] === '.' || a[a.length - 1] === ',') {
		a = a.substring(0, a.length - 1);
	}
	a = a.slice(0).toLowerCase();
	return a
		.normalize('NFD')
		.replace(
			/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
			'$1'
		)
		.normalize();
}

function rankingUsers(name, userPoints) {
	this.name = name;
	this.userPoints = userPoints;
}

const arrayOfUsers = [
	{ name: 'David', userPoints: 22 },
	{ name: 'Pedro', userPoints: 20 },
	{ name: 'Celsa', userPoints: 17 },
	{ name: 'Ernest', userPoints: 13 },
	{ name: 'Katy', userPoints: 8 }
];

var num;

function passedWords(letter, answer, status, question) {
	return {
		letter,
		answer,
		status,
		question
	};
}

const passedWordsArr = [];

var points = 0;
var errors = 0;
var correct = 0;
var notCorrect = 0;
var letter;

function display() {
	if (correct === 1) {
		console.clear();
		console.log(
			'%cpasapalabra' + `%c   ${letter}   `,
			'line-height: 180px; border-radius: 100%; background: content-box radial-gradient(blue, skyblue); padding: 20px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans',
			'line-height: 75px; border-radius: 100%; background: content-box radial-gradient(olivedrab, green); padding: 10px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans;'
		);
		console.log(
			`\t      %c   ${points}   `,
			'color: #fff; text-shadow:0 0 5px #000; font-family: Keedy Sans; font-weight: bold; font-size: 23px; padding: 1em; background: content-box radial-gradient(tomato, coral); border-radius: 30px; line-height: 40px'
		);
	} else if (notCorrect === 1) {
		console.clear();
		console.log(
			'%cpasapalabra' + `%c   ${letter}   `,
			'line-height: 180px; border-radius: 100%; background: content-box radial-gradient(blue, skyblue); padding: 20px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans',
			'line-height: 75px; border-radius: 100%; background: content-box radial-gradient(red, crimson); padding: 10px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans;'
		);
		console.log(
			`\t      %c   ${points}   `,
			'color: #fff; text-shadow:0 0 5px #000; font-family: Keedy Sans; font-weight: bold; font-size: 23px; padding: 1em; background: content-box radial-gradient(tomato, coral); border-radius: 30px; line-height: 40px'
		);
	} else {
		console.clear();
		console.log(
			'%cpasapalabra' + `%c${letter ? `   ${letter}   ` : ''}`,
			'line-height: 180px; border-radius: 100%; background: content-box radial-gradient(blue, skyblue); padding: 20px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans',
			'line-height: 75px; border-radius: 100%; background: content-box radial-gradient(blue, skyblue); padding: 10px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans;'
		);
		console.log(
			`\t      %c   ${points}   `,
			'color: #fff; text-shadow:0 0 5px #000; font-family: Keedy Sans; font-weight: bold; font-size: 23px; padding: 1em; background: content-box radial-gradient(tomato, coral); border-radius: 30px; line-height: 40px'
		);
	}
}

console.log(
	'%cpasapalabra',
	'line-height: 180px; border-radius: 100%; background: content-box radial-gradient(blue, skyblue); padding: 20px; font-size: 35px; font-weight: bold; color: white; font-family: Keedy Sans'
);

do {
	var userName = prompt(
		'¡Bienvenido/a a pasapalabra!\n\nPor favor, introduce tu nombre:'
	);
	if (userName === '' || userName === null || !isNaN(userName)) {
		alert('Debes añadir un nombre.');
	}
	if (userName) {
		userName = userNameFormat(userName);
	}
} while (userName === null || !isNaN(userName) || userName === '');

display();

alert(`${userName}, antes de empezar, debes saber que:

1. Comenzarás la partida con 0 puntos en tu marcador, y por cada acierto, se te sumará 1 punto.

2. En cualquier momento puedes terminar la partida. Solo tienes que introducir 'END'.`);

alert('¡Buena suerte!');

function ending() {
	if (questions.every((x) => x.status === 1)) {
		alert(`GAME OVER.
Has acertado ${points} letra(s) y has fallado ${errors}.`);
		let userObject = new rankingUsers(userName, userPoints);
		arrayOfUsers.push(userObject);
		arrayOfUsers.sort((a, b) =>
			a.userPoints < b.userPoints
				? 1
				: a.userPoints === b.userPoints
				? arrayOfUsers.indexOf(a) > arrayOfUsers.indexOf(b)
					? 1
					: -1
				: -1
		);
		alert(`Ranking de usuarios:

- ${arrayOfUsers[0].name}: ${arrayOfUsers[0].userPoints}
- ${arrayOfUsers[1].name}: ${arrayOfUsers[1].userPoints}
- ${arrayOfUsers[2].name}: ${arrayOfUsers[2].userPoints}
- ${arrayOfUsers[3].name}: ${arrayOfUsers[3].userPoints}
- ${arrayOfUsers[4].name}: ${arrayOfUsers[4].userPoints}${
			arrayOfUsers[5] && arrayOfUsers[5].name === userObject.name
				? `\n- ${arrayOfUsers[5].name}: ${arrayOfUsers[5].userPoints}`
				: ''
		}${
			arrayOfUsers[6] && arrayOfUsers[6].name === userObject.name
				? `\n- ${arrayOfUsers[6].name}: ${arrayOfUsers[6].userPoints}`
				: ''
		}

${userName}, has quedado en ${
			arrayOfUsers.indexOf(
				arrayOfUsers.find((element) => element == userObject)
			) + 1
		}.ª posición.`);
		var playAgain = confirm(`¿Quieres volver a jugar, ${userName}?`);

		if (playAgain) {
			points = 0;
			errors = 0;
			correct = 0;
			notCorrect = 0;
			letter = '';
			numberOfRounds = 0;
			for (const object of questions) {
				object.status = 0;
			}
			console.clear();
			display();
			alert('¡Buena suerte!');
			pasapalabra();
		}
	} else {
		passedWordsFunction();
	}
}

function passedWordsFunction() {
	for (const passedWord of passedWordsArr) {
		if (passedWord.status === 0) {
			correct = 0;
			notCorrect = 0;

			letter = passedWord.letter;
			letter = letter.toUpperCase();

			display();

			do {
				var userAnswer = prompt(`${passedWord.question}.`);
				if (userAnswer === '' || userAnswer === null) {
					alert('Por favor, introduce una respuesta, o di: ¡pasapalabra!');
				} else if (!isNaN(userAnswer)) {
					alert('No se admiten números, solo letras.');
				}
			} while (userAnswer === '' || userAnswer === null || !isNaN(userAnswer));

			userAnswer = answerFormat(userAnswer);

			if (userAnswer === 'end') {
				alert(`GAME OVER.
Has acertado ${points} letra(s) y has fallado ${errors}.`);
				break;
			} else if (userAnswer === 'pasapalabra') {
				continue;
			} else if (userAnswer === passedWord.answer) {
				points += 1;
				correct = 1;
				passedWord.status = 1;
				for (const object of questions) {
					if (object.letter === passedWord.letter) {
						object.status = 1;
					}
				}
				display();
				alert(`¡Correcto!
Un punto más en tu marcador.`);
			} else {
				errors += 1;
				notCorrect = 1;
				passedWord.status = 1;
				for (const object of questions) {
					if (object.letter === passedWord.letter) {
						object.status = 1;
					}
				}
				display();
				alert(`¡No!
La respuesta correcta es: ${passedWord.answer}.`);
			}
		}
	}

	if (userAnswer === 'end') {
		return;
	}

	ending();
}

var numberOfRounds = 0;

function pasapalabra() {
	numberOfRounds += 1;

	if (numberOfRounds === 1) {
		for (const object of questions) {
			num = Math.floor(Math.random() * 3);

			correct = 0;
			notCorrect = 0;

			letter = object.letter;
			letter = letter.toUpperCase();

			display();

			do {
				var userAnswer = prompt(`${object.question[num]}.`);
				if (userAnswer === '' || userAnswer === null) {
					alert('Por favor, introduce una respuesta, o di: ¡pasapalabra!');
				} else if (!isNaN(userAnswer)) {
					alert('No se admiten números, solo letras.');
				}
			} while (userAnswer === '' || userAnswer === null || !isNaN(userAnswer));

			userAnswer = answerFormat(userAnswer);

			if (userAnswer === 'end') {
				alert(`GAME OVER.
Has acertado ${points} letra(s) y has fallado ${errors}.`);
				break;
			} else if (userAnswer === 'pasapalabra') {
				var passedWord = passedWords(
					object.letter,
					object.answer[num],
					object.status,
					object.question[num]
				);
				passedWordsArr.push(passedWord);
				continue;
			} else if (userAnswer === object.answer[num]) {
				points += 1;
				correct = 1;
				object.status = 1;
				display();
				alert(`¡Correcto!
Un punto más en tu marcador.`);
			} else {
				errors += 1;
				notCorrect = 1;
				object.status = 1;
				display();
				alert(`¡No!
La respuesta correcta es: ${object.answer[num]}.`);
			}
		}
	} else {
		passedWordsFunction();
	}

	if (userAnswer === 'end') {
		return;
	}

	ending();
}

pasapalabra();
