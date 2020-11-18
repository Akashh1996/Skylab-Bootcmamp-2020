var questions = [
	{
		letter: 'A',
		answer: ['ABDUCIR.', 'ACEITE.', 'AGENDA.'],
		status: 0,
		question: [
			'Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.',
			'Líquido graso de color verde amarillento que se obtiene prensando las aceitunas.',
			'Libro o cuaderno en el que se apunta aquello que se ha de hacer para no olvidarlo.'
		]
	},
	{
		letter: 'B',
		answer: ['BASTAR.', 'BUZÓN.', 'BONANZA.'],
		status: 0,
		question: [
			'Ser suficiente y proporcionado para algo.',
			'Abertura por donde se echan las cartas para el correo.',
			'Prosperidad.'
		]
	},
	{
		letter: 'C',
		answer: ['CHURUMBEL.', 'CHÁNDAL.', 'CARACOL.'],
		status: 0,
		question: [
			'Niño, crío, bebé.',
			'Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios.',
			'Nombre del molusco gasterópodo terrestre, de corte en espiral, cuya carne puede comerse.'
		]
	},
	{
		letter: 'D',
		answer: ['DIARREA.', 'DEVOTO.', 'DIALECTO.'],
		status: 0,
		question: [
			'Síntoma o fenómeno morboso que consiste en evacuaciones de vientre líquidas y frecuentes.',
			'Dedicado con fervor a obras de piedad y religión.',
			'Variedad de un idioma que no alcanza la categoría social de lengua.'
		]
	},
	{
		letter: 'E',
		answer: ['EFEMÉRIDE.', 'ENTERA.', 'ENTRECOT.'],
		status: 0,
		question: [
			'Acontecimiento notable que se recuerda en cualquier aniversario de él.',
			'Se dice de la leche que conserva toda la grasa y sustancias nutritivas.',
			'Trozo de carne sacado de entre costilla y costilla de la res.'
		]
	},
	{
		letter: 'F',
		answer: ['FÁCIL.', 'FORESTAL.', 'FIERA.'],
		status: 0,
		question: [
			'Que no requiere gran esfuerzo, capacidad o dificultad.',
			'Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos.',
			'Animal salvaje o agresivo.'
		]
	},
	{
		letter: 'G',
		answer: ['GALAXIA.', 'GORIGORI.', 'GORGORITO.'],
		status: 0,
		question: [
			'Conjunto enorme de estrellas, polvo interestelar, gases y partículas.',
			'Coloquialmente, canto fúnebre con el que se acompañan los entierros.',
			'Coloquialmente, quiebro que se hace con la garganta al cantar.'
		]
	},
	{
		letter: 'H',
		answer: ['HARAKIRI.', 'HOMBRERA.', 'HIDROAVIÓN.'],
		status: 0,
		question: [
			'Suicidio ritual japonés por desentrañamiento.',
			'Adorno especial de los vestidos en la parte correspondiente a los hombros.',
			'Avión que lleva, en lugar de ruedas, uno o cuatro flotadores para posarse sobre el agua.'
		]
	},
	{
		letter: 'I',
		answer: ['IGLESIA.', 'INTUIR.', 'INAPETENCIA.'],
		status: 0,
		question: [
			'Templo cristiano.',
			'Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista.',
			'Falta de ganas de comer.'
		]
	},
	{
		letter: 'J',
		answer: ['JADEAR.', 'JORNADA.', 'JARDINERÍA.'],
		status: 0,
		question: [
			'Respirar anhelosamente por efecto de algún trabajo o ejercicio impetuoso.',
			'Tiempo de duración del trabajo diario.',
			'Arte y oficio del jardinero.'
		]
	},
	{
		letter: 'K',
		answer: ['KAMIKAZE.', 'KOALA.', 'KIWI.'],
		status: 0,
		question: [
			'Persona que se juega la vida realizando una acción temeraria.',
			'Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos.',
			'Ave apterigiforme, del tamaño de una gallina, que habita en Nueva Zelanda.'
		]
	},
	{
		letter: 'L',
		answer: ['LICÁNTROPO.', 'LASTRE.', 'LOBERA.'],
		status: 0,
		question: [
			'Hombre lobo.',
			'Persona o cosa que entorpece o detiene algo.',
			'Guarida de lobos.'
		]
	},
	{
		letter: 'M',
		answer: ['MISÁNTROPO.', 'MENOR.', 'MENTIRA.'],
		status: 0,
		question: [
			'Persona que huye del trato con otras personas o siente gran aversión hacia ellas.',
			'Se dice de una persona que no ha alcanzado la mayoría de edad.',
			'Expresión o manifestación contraria a lo que se sabe, se piensa o se siente.'
		]
	},
	{
		letter: 'N',
		answer: ['NECEDAD.', 'NINFA.', 'NATIVO.'],
		status: 0,
		question: [
			'Demostración de poca inteligencia.',
			'Cada una de las fabulosas deidades de las aguas, bosques o selvas.',
			'Que ha nacido en el lugar de que se trata.'
		]
	},
	{
		letter: 'Ñ',
		answer: ['ÑU.', 'ÑOÑO.', 'ÑEEMUQUEÑO.'],
		status: 0,
		question: [
			'Mamífero rumiante africano de la familia de los antílopes, cuya cabeza recuerda la de un toro.',
			'Dicho coloquialmente de una persona: Sumamente apocada y de corto ingenio.',
			'Natural de Ñeembucú, departamento del Paraguay.'
		]
	},
	{
		letter: 'O',
		answer: ['OCULTAR.', 'ORDENANZA.', 'ÓRGANO.'],
		status: 0,
		question: [
			'Callar advertidamente lo que se pudiera o debiera decir, o disfrazar la verdad.',
			'Empleado que en ciertas oficinas desempeña funciones subalternas.',
			'Cada una de las partes del cuerpo animal o vegetal que ejercen una función.'
		]
	},
	{
		letter: 'P',
		answer: ['PIAR.', 'PRIORIDAD.', 'PIANOLA.'],
		status: 0,
		question: [
			'Dicho de algunas aves, y especialmente del pollo: Emitir cierto género de sonido o voz.',
			'Anterioridad de algo respecto de otra cosa en tiempo u orden.',
			'Piano que puede tocarse mecánicamente por pedales o por medio de corriente eléctrica.'
		]
	},
	{
		letter: 'Q',
		answer: ['QUESO.', 'QUIA.', 'QUEBRAR.'],
		status: 0,
		question: [
			'Producto obtenido por la maduración de la cuajada de la leche.',
			'Interjección usada coloquialmente para denotar incredulidad o negación.',
			'Dicho de una empresa o de un negocio: arruinarse.'
		]
	},
	{
		letter: 'R',
		answer: ['RADICAL.', 'RENCOR.', 'RÁFAGA.'],
		status: 0,
		question: [
			'Partidario de reformas extremas.',
			'Resentimiento arraigado y tenaz.',
			'Viento fuerte, repentino y de corta duración.'
		]
	},
	{
		letter: 'S',
		answer: ['STACKOVERFLOW.', 'SAMBA.', 'SIMPLE.'],
		status: 0,
		question: [
			'Comunidad salvadora de todo desarrollador informático.',
			'Danza popular brasileña de influencia africana, cantada, de compás binario.',
			'Que no tiene complicación.'
		]
	},
	{
		letter: 'T',
		answer: ['TERMINATOR.', 'TRAGAPERRAS.', 'TACO.'],
		status: 0,
		question: [
			'Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.',
			'Máquina de juegos de azar que funciona introduciendo monedas.',
			'Tortilla de maíz enrollada con algún alimento dentro, típica de México.'
		]
	},
	{
		letter: 'U',
		answer: ['ULULAR.', 'USURPAR.', 'UNGIR.'],
		status: 0,
		question: [
			'Dicho del viento: Producir sonido.',
			'Atribuirse y usar un título o cargo ajeno como si fuera propio.',
			'Aplicar a alguien o algo aceite u otra materia pingüe, extendiéndola superficialmente.'
		]
	},
	{
		letter: 'V',
		answer: ['VANDALISMO.', 'VIVIENDA.', 'VERDE.'],
		status: 0,
		question: [
			'Espíritu de destrucción que no respeta cosa alguna, sagrada ni profana.',
			'Lugar cerrado o cubierto construido para ser habitado por personas.',
			'Color de la esmeralda.'
		]
	},
	{
		letter: 'W',
		answer: ['WAGNERIANO.', 'WINDSURF.', 'WALKMAN.'],
		status: 0,
		question: [
			'Perteneciente o relativo a Richard Wagner, músico alemán, o a su obra.',
			'Deporte que consiste en deslizarse por el agua sobre una tabla especial provista de una vela.',
			'Reproductor portátil de casetes provisto de auriculares.'
		]
	},
	{
		letter: 'X',
		answer: ['XENOFOBIA.', 'XILÓFONO.', 'XILOGRAFÍA.'],
		status: 0,
		question: [
			'Fobia a los extranjeros.',
			'Instrumento musical de percusión compuesto de láminas de madera o metal.',
			'Impresión tipográfica hecha con planchas de madera grabadas.'
		]
	},
	{
		letter: 'Y',
		answer: ['YEMA.', 'YATE.', 'YEN.'],
		status: 0,
		question: [
			'Porción central del huevo en los vertebrados ovíparos.',
			'Embarcación de gala o de recreo.',
			'Unidad monetaria del Japón.'
		]
	},
	{
		letter: 'Z',
		answer: ['ZEN.', 'ZARANDEO.', 'ZODIACAL.'],
		status: 0,
		question: [
			'Escuela budista que busca la experiencia de la sabiduría más allá del discurso racional.',
			'Movimiento repetido y violento de un lado a otro.',
			'Perteneciente o relativo al zodíaco.'
		]
	}
];

const setup = () => {
	var display = document.getElementById('display');
	var displayHeight =
		parseInt(window.getComputedStyle(display).height.slice(0, -2)) - 45;
	var radius = displayHeight / 0.97;
	const thetaNumbs = [];
	let theta = Math.PI / 2;
	for (let i = 0; i < questions.length; i++) {
		thetaNumbs.push(theta);
		theta -= (2 * Math.PI) / 27;
		let circle = document.createElement('div');
		circle.innerHTML = questions[i].letter;
		circle.className = 'circle';
		circle.setAttribute('id', `${questions[i].letter}`);
		circle.posx = Math.round(radius * Math.cos(thetaNumbs[i])) + 'px';
		circle.posy = Math.round(radius * Math.sin(thetaNumbs[i])) + 'px';
		circle.style.position = 'absolute';
		circle.style.top =
			displayHeight / 2 - parseInt(circle.posy.slice(0, -2)) + 'px';
		circle.style.left =
			displayHeight / 2 + parseInt(circle.posx.slice(0, -2)) + 'px';
		display.appendChild(circle);
	}
};

setup();

function rankingUsers(name, points) {
	this.name = name;
	this.points = points;
}

const arrayOfUsers = [
	{ name: 'Pedro', points: 23 },
	{ name: 'Celsa', points: 19 },
	{ name: 'Raúl', points: 17 },
	{ name: 'Ernest', points: 13 },
	{ name: 'Katy', points: 5 }
];

let userName;
let firstRanking = true;

const ranking = () => {
	if (!userName) {
		userName = 'Tú';
	}
	let userObject = new rankingUsers(userName, rightAnswers);
	arrayOfUsers.push(userObject);
	arrayOfUsers.sort((a, b) =>
		a.points < b.points
			? 1
			: a.points === b.points
			? arrayOfUsers.indexOf(a) > arrayOfUsers.indexOf(b)
				? 1
				: -1
			: -1
	);
	for (i = 0; i < arrayOfUsers.length; i++) {
		let user = document.createElement('li');
		user.innerHTML = `${i + 1}. ${arrayOfUsers[i].name}: ${
			arrayOfUsers[i].points
		}`;
		if (firstRanking) {
			document.getElementById('ranking-list').appendChild(user);
		} else {
			if (i < 6) {
				document
					.getElementById('ranking-list')
					.replaceChild(
						user,
						document.getElementById('ranking-list').childNodes[i]
					);
			}
		}
	}
	firstRanking = false;
};

let i = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let compensate = 1;
var firstCountdown = false;
var intervalId2;
var intervalId9;

const gameOver = () => {
	clearInterval(intervalId2);
	clearInterval(intervalId9);
	document.getElementById('letter').style.background =
		'linear-gradient(45deg, blue, rgb(86, 172, 206))';
	document.getElementById('letter').style.width = '150px';
	document.getElementById('letter').style.width = '150px';
	document.getElementById('letter').style.height = '150px';
	document.getElementById('letter').style.fontSize = '29px';
	document.getElementById('letter').style.lineHeight = '176px';
	document.getElementById('inside').style.lineHeight = '30px';
	document.getElementById('inside').style.display = 'inline-block';
	document.getElementById('letter').style.top = '275px';
	document.getElementById('letter').style.left = '674px';
	document.getElementById('inside').innerHTML = 'GAME OVER';
	let intervalId20;
	setTimeout(() => {
		document.getElementById('letter').style.zIndex = '4';
		document.getElementById('ranking-title').style.visibility = 'visible';
		document.getElementById('ranking').style.visibility = 'visible';
		document.getElementById('start').style.visibility = 'visible';
		let fontSize = 29;
		let top = 275;
		let left = 674;
		let opacity = 1;
		let opacity2 = 0;
		let opacity3 = 0;
		let opacity4 = 0;
		let opacity5 = 1;
		let count = 0;
		let width = 150;
		let height = 150;
		let lineHeightOutside = 166;
		let lineHeightInside = 30;
		intervalId20 = setInterval(() => {
			count += 1;
			fontSize += 5;
			width += 20;
			height += 20;
			lineHeightOutside += 25.75;
			lineHeightInside += 5;
			top -= 15.2;
			left -= 14.6;
			document.getElementById('letter').style.fontSize = `${fontSize}px`;
			document.getElementById('letter').style.top = `${top}px`;
			document.getElementById('letter').style.left = `${left}px`;
			document.getElementById('letter').style.width = `${width}px`;
			document.getElementById('letter').style.height = `${height}px`;
			document.getElementById(
				'letter'
			).style.lineHeight = `${lineHeightOutside}px`;
			document.getElementById(
				'inside'
			).style.lineHeight = `${lineHeightInside}px`;
			if (count > 20) {
				console.log(count);
				opacity -= 0.02;
				opacity2 += 0.01610169491;
				opacity3 += 0.01754385964;
				opacity4 += 0.03;
				opacity5 -= 0.04;
				document.getElementById('letter').style.opacity = `${opacity}`;
				document.getElementById('hidden-display').style.opacity = `${opacity5}`;
				document.getElementById('ranking').style.opacity = `${opacity2}`;
				document.getElementById('ranking-title').style.opacity = `${opacity4}`;
				document.getElementById('start').style.opacity = `${opacity3}`;
			}
			console.log(
				(document.getElementById('start').style.opacity = `${opacity3}`),
				document.getElementById('ranking-title').style.opacity,
				document.getElementById('ranking').style.opacity
			);
		}, 44);
	}, 100);
	ranking();

	setTimeout(() => {
		i = 0;
		firstRound = true;
		firstCountdown = false;
		rightAnswers = 0;
		wrongAnswers = 0;
		compensate = 1;
		document.body.addEventListener('keypress', enter);
		document.getElementById('input').value = '';
		document.getElementById('letter').style.visibility = 'hidden';
		document.getElementById('letter').style.width = '150px';
		document.getElementById('letter').style.height = '150px';
		document.getElementById('letter').style.fontSize = '90px';
		document.getElementById('letter').style.lineHeight = '146px';
		document.getElementById('inside').style.lineHeight = '30px';
		document.getElementById('inside').style.display = 'inline-block';
		document.getElementById('letter').style.top = '275px';
		document.getElementById('letter').style.left = '674px';
		document.getElementById('inside').innerHTML = 'A';
		document.getElementById('hidden-display').style.visibility = 'hidden';
		document.getElementById('letter').style.zIndex = '1';
		clearInterval(intervalId20);
	}, 3600);
};

function passedWords(letter, answer, status, question) {
	return {
		letter,
		answer,
		status,
		question
	};
}

const passedWordsArr = [];

let timeoutId;
let timer = document.getElementById('timer');
let counting = document.getElementById('countdown');
var firstRound = true;

let number;
const displayQuestions = () => {
	if (firstRound) {
		number = Math.floor(Math.random() * 3);
		document.getElementById('inside').innerHTML = questions[i].letter;
		if (i === 0) {
			document.getElementById('hidden-display').style.visibility = 'visible';
			document.getElementById('hidden-display').style.opacity = '0';
			let opacity = 0;
			let intervalId3 = setInterval(() => {
				opacity += 0.02040816326;
				document.getElementById('hidden-display').style.opacity = `${opacity}`;
			}, 10);
			setTimeout(() => {
				clearInterval(intervalId3);
				document.getElementById('hidden-display').style.opacity = '1';
			}, 500);
			document.getElementById('question').innerHTML =
				questions[i].question[number];
			i += 1;
		} else {
			document.getElementById('question').innerHTML =
				questions[i].question[number];
			i += 1;
		}
	} else {
		if (i >= passedWordsArr.length) {
			i = 0;
		}
		document.getElementById('inside').innerHTML = passedWordsArr[i].letter;
		document.getElementById('question').innerHTML = passedWordsArr[i].question;
		i += 1;
	}
};

const enter = () => {
	if (event.key === 'Enter') {
		time();
	}
};

var intervalId10;
var intervalId11;
var increasing;
var deactivated;

function ending() {
	gameOver();
}

const time = () => {
	deactivated = false;
	document.getElementById('letter').style.visibility = 'visible';
	document.getElementById('letter').style.opacity = '1';
	if (!firstCountdown) {
		document.getElementById('timer').innerHTML = '150';
		document.getElementById('right-answers').innerHTML = '0';
		let circles = document.getElementsByClassName('circle');
		for (const circle of circles) {
			circle.style.background =
				'linear-gradient(45deg, blue, rgb(86, 172, 206))';
		}
	}
	document.body.removeEventListener('keypress', enter);
	document.getElementById('start').style.visibility = 'hidden';
	document.getElementById('start').style.opacity = '0';
	document.getElementById('ranking-title').style.visibility = 'hidden';
	document.getElementById('ranking-title').style.opacity = '0';
	document.getElementById('ranking').style.visibility = 'hidden';
	document.getElementById('ranking').style.opacity = '0';
	document.getElementById('name').style.visibility = 'hidden';

	counting.innerHTML = 3;
	const countdown = () => {
		firstCountdown = true;
		counting.style.zIndex = '3';

		let fontSize = 10;
		let top = 165;
		let opacity = 1;
		let count = 0;

		let intervalId1 = setInterval(() => {
			counting.style.visibility = 'visible';
			count += 1;
			fontSize += 20;
			top -= 10.5;
			counting.style.fontSize = `${fontSize}px`;
			counting.style.top = `${top}px`;
			if (count > 72) {
				opacity -= 0.01428571428;
				counting.style.opacity = `${opacity}`;
			}
		}, 7.5);

		setTimeout(() => {
			counting.innerHTML -= 1;
			counting.style.fontSize = '10px';
			counting.style.opacity = '1';
			clearInterval(intervalId1);
			document.getElementById('end').addEventListener('click', ending);
		}, 1000);

		timeoutId = setTimeout(countdown, 1000);
	};

	countdown();

	setTimeout(() => {
		clearTimeout(timeoutId);
		counting.style.visibility = 'hidden';
	}, 3000);

	setTimeout(() => {
		document.getElementById('questions').style.background =
			'linear-gradient(35deg, rgb(33, 156, 212), rgb(69, 209, 202))';
		document.getElementById('letter').style.background =
			'linear-gradient(45deg, blue, rgb(86, 172, 206))';
		document.getElementById('question').style.color = 'rgb(255, 246, 246)';
		document.getElementById('question').style.textShadow =
			'1.7px 1.7px 2px rgb(11, 106, 119)';
		document.getElementById('question').style.lineHeight = '1.3';
		document.getElementById('input').placeholder = 'Escribe aquí tu respuesta';
		document.getElementById('end').style.boxShadow = 'none'; // inerhtml
		displayQuestions();
	}, 2750);

	setTimeout(() => {
		intervalId2 = setInterval(() => {
			if (+timer.innerHTML === 0) {
				gameOver();
				clearInterval(intervalId2);
			} else {
				timer.innerHTML -= 1;
			}
		}, 1000);
	}, 3000);

	let letter = document.getElementById('letter');
	let style = window.getComputedStyle(letter);
	let width = style.getPropertyValue('width');
	let height = style.getPropertyValue('height');
	let lineHeight = style.getPropertyValue('line-height');
	let top = style.getPropertyValue('top');
	let left = style.getPropertyValue('left');
	let fontSize = style.getPropertyValue('font-size');
	width = width.slice(0, -2);
	height = height.slice(0, -2);
	lineHeight = lineHeight.slice(0, -2);
	top = top.slice(0, -2);
	left = left.slice(0, -2);
	fontSize = fontSize.slice(0, -2);
	setTimeout(() => {
		intervalId9 = setInterval(() => {
			if (increasing) {
				if (style.getPropertyValue('width') === '165px') {
					increasing = false;
				} else {
					increasing = true;
					width = Number(width) + 1;
					height = Number(height) + 1;
					lineHeight = Number(lineHeight) + 1;
					top = Number(top) - 0.47;
					left = Number(left) - 0.5;
					fontSize = Number(fontSize) + 1.5;
					letter.style.width = `${width}px`;
					letter.style.height = `${height}px`;
					letter.style.lineHeight = `${lineHeight}px`;
					letter.style.top = `${top}px`;
					letter.style.left = `${left}px`;
					letter.style.fontSize = `${fontSize}px`;
				}
			} else {
				if (style.getPropertyValue('width') === '150px') {
					increasing = true;
				} else {
					increasing = false;
					width = Number(width) - 1;
					height = Number(height) - 1;
					lineHeight = Number(lineHeight) - 1;
					top = Number(top) + 0.47;
					left = Number(left) + 0.5;
					fontSize = Number(fontSize) - 1.5;
					letter.style.width = `${width}px`;
					letter.style.height = `${height}px`;
					letter.style.lineHeight = `${lineHeight}px`;
					letter.style.top = `${top}px`;
					letter.style.left = `${left}px`;
					letter.style.fontSize = `${fontSize}px`;
				}
			}
		}, 30);
	}, 3000);
};

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

const submitForm = () => {
	let inputCopy = answerFormat(document.getElementById('input').value);
	let answerCopy;
	if (firstRound) {
		answerCopy = answerFormat(questions[i - 1].answer[number]);
	} else {
		answerCopy = answerFormat(passedWordsArr[i - 1].answer);
	}
	if (document.getElementById('input').value === '') {
		return;
	} else if (inputCopy === 'end') {
		gameOver();
	} else if (inputCopy === 'pasapalabra') {
		if (firstRound) {
			document.getElementById('input').value = '';
			var passedWord = passedWords(
				questions[i - 1].letter,
				questions[i - 1].answer[number],
				questions[i - 1].status,
				questions[i - 1].question[number]
			);
			passedWordsArr.push(passedWord);
			if (questions.length === i) {
				firstRound = false;
			}
			displayQuestions();
		} else {
			document.getElementById('input').value = '';
			displayQuestions();
		}
	} else if (inputCopy === answerCopy) {
		rightAnswers += 1;
		document.getElementById('input').value = '';
		document.getElementById('right-answers').innerHTML = rightAnswers;
		document.getElementById('letter').style.background = 'rgb(11, 170, 8)';

		if (!firstRound) {
			document.getElementById(
				`${passedWordsArr[i - 1].letter}`
			).style.background = 'rgb(9, 175, 6)';
			document.getElementById(
				`${passedWordsArr[i - 1].letter}`
			).style.textShadow = '2px 2px 4px ' + 'rgb(8, 90, 0)';
			passedWordsArr.splice(i - 1, 1);
			i -= 1;
			if (passedWordsArr.length > 0) {
				setTimeout(displayQuestions, 500);
			} else {
				setTimeout(gameOver, 500);
			}
		} else {
			questions[i - 1].status = 1;
			document.getElementById(`${questions[i - 1].letter}`).style.background =
				'rgb(9, 175, 6)';
			document.getElementById(`${questions[i - 1].letter}`).style.textShadow =
				'2px 2px 4px ' + 'rgb(8, 90, 0)';
			if (questions[i - 1].letter === 'Z' && passedWordsArr.length === 0) {
				setTimeout(gameOver, 500);
			} else {
				if (questions[i - 1].letter === 'Z') {
					firstRound = false;
				}
				setTimeout(displayQuestions, 500);
			}
		}
		setTimeout(() => {
			document.getElementById('letter').style.background =
				'linear-gradient(45deg, blue, rgb(86, 172, 206))';
		}, 500);
	} else {
		deactivated = true;
		wrongAnswers += 1;
		document.getElementById('input').value = '';
		clearInterval(intervalId9);
		document.getElementById('end').removeEventListener('click', ending);
		setTimeout(() => {
			clearInterval(intervalId2);
			document.getElementById('question').innerHTML =
				'La respuesta correcta es:';
			let mybr = document.createElement('br');
			document.getElementById('question').appendChild(mybr);
			if (firstRound) {
				document.getElementById(`${questions[i - 1].letter}`).style.background =
					'rgb(235, 52, 52)';
				document.getElementById(`${questions[i - 1].letter}`).style.textShadow =
					'2px 2px 4px ' + 'rgb(90, 0, 0)';
				document.getElementById('question').innerHTML +=
					questions[i - 1].answer[number];
				if (questions[i - 1].letter === 'Z' && passedWordsArr.length === 0) {
					clearInterval(timeoutId);
					setTimeout(gameOver, 2750);
				} else {
					if (questions[i - 1].letter === 'Z') {
						firstRound = false;
					}
					setTimeout(time, 2750);
				}
			} else {
				document.getElementById(
					`${passedWordsArr[i - 1].letter}`
				).style.background = 'rgb(235, 52, 52)';
				document.getElementById(
					`${passedWordsArr[i - 1].letter}`
				).style.textShadow = '2px 2px 4px ' + 'rgb(90, 0, 0)';
				document.getElementById('question').innerHTML +=
					passedWordsArr[i - 1].answer;
				passedWordsArr.splice(i - 1, 1);
				i -= 1;
				compensate += 1;
				if (passedWordsArr.length > 0) {
					setTimeout(time, 2750);
				} else {
					clearInterval(timeoutId);
					setTimeout(gameOver, 2750);
				}
			}
			document.getElementById('letter').style.background = 'red';
			document.getElementById('letter').style.width = '150px';
			document.getElementById('letter').style.height = '150px';
			document.getElementById('letter').style.fontSize = '90px';
			document.getElementById('letter').style.lineHeight = '146px';
			document.getElementById('letter').style.top = '275px';
			document.getElementById('letter').style.left = '674px';
			document.getElementById('questions').style.background =
				'linear-gradient(100deg, rgb(255, 9, 9), rgb(241, 144, 144))'; // inerhtml
			document.getElementById('question').style.color = 'rgb(255, 246, 246)';
			document.getElementById('question').style.textShadow =
				'1.7px 1.7px 2px rgb(119, 11, 11)';
			document.getElementById('question').style.lineHeight = '1.6';
			document.getElementById('input').placeholder = '';
			document.getElementById('end').style.boxShadow =
				'0 0 0 1pt rgb(253, 189, 189)';
		}, 500);
	}
};
document.getElementById('filter-form').addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && !deactivated) {
		submitForm();
	}
});
document.getElementById('pasapalabra').addEventListener('click', () => {
	if (!deactivated && firstRound) {
		var passedWord = passedWords(
			questions[i - 1].letter,
			questions[i - 1].answer[number],
			questions[i - 1].status,
			questions[i - 1].question[number]
		);
		passedWordsArr.push(passedWord);
		if (questions.length === i) {
			firstRound = false;
			i = 0;
		}
		displayQuestions();
	} else if (!deactivated && !firstRound) {
		document.getElementById('input').value = '';
		displayQuestions();
	}
});
document.getElementById('end').addEventListener('click', ending);

function userNameFormat(a) {
	a = a[0].toUpperCase() + a.slice(1);
	a = a[0] + a.slice(1).toLowerCase();
	return a;
}

const nameOpacity = (e) => {
	if (e.key === 'Enter') {
		userName = userNameFormat(document.getElementById('name').value);
		let opacity = 1;
		let intervalId8 = setInterval(() => {
			if (opacity === 0) {
				clearInterval(intervalId8);
			} else {
				opacity -= 0.02;
				document.getElementById('name').style.opacity = `${opacity}`;
			}
		}, 10);
		setTimeout(() => document.body.addEventListener('keypress', enter), 500);
		setTimeout(
			() => (document.getElementById('name').style.visibility = 'hidden'),
			1000
		);
		document
			.getElementById('name')
			.removeEventListener('keypress', nameOpacity);
	}
};

const makeVisible = () => {
	let instructions = document.getElementById('instructions');
	let style = window.getComputedStyle(instructions);
	let opacity = style.getPropertyValue('opacity');
	instructions.style.visibility = 'visible';

	if (opacity === '0') {
		let intervalId15 = setInterval(() => {
			if (+Number(opacity).toFixed(2) === 0.93) {
				clearInterval(intervalId15);
			} else {
				opacity = +opacity + 0.01;
				instructions.style.opacity = `${opacity}`;
			}
		}, 7);
	} else if (+opacity === 0.93) {
		let intervalId16 = setInterval(() => {
			if (+Number(opacity).toFixed(2) === 0.0) {
				instructions.style.visibility = 'hidden';
				clearInterval(intervalId16);
			} else {
				opacity = +opacity - 0.01;
				instructions.style.opacity = `${opacity}`;
			}
		}, 5);
	}
};

document.getElementById('name').addEventListener('keypress', nameOpacity);
document.getElementById('start').addEventListener('click', time);
document
	.getElementById('instructions-icon')
	.addEventListener('click', makeVisible);

function rotate() {
	document.getElementsByClassName('flip-box-inner')[0].style.transform =
		'rotateX(180deg)';
}
function rotateBack() {
	document.getElementsByClassName('flip-box-inner')[0].style.transform = '';
}
document.getElementById('arrow').addEventListener('click', () => {
	if (document.getElementById('ranking').clientHeight === 104) {
		let height = 104;
		let intervalId30 = setInterval(() => {
			if (height === 449) {
				document
					.getElementsByClassName('flip-box')[0]
					.addEventListener('mouseover', rotate);
				document
					.getElementsByClassName('flip-box')[0]
					.addEventListener('mouseout', rotateBack);
				clearInterval(intervalId30);
			} else {
				height += 1.5;
				document.getElementById('ranking').style.height = `${height}px`;
			}
		}, 18.5);
	}
});

function returning() {
	document
		.getElementsByClassName('flip-box')[0]
		.removeEventListener('mouseover', rotate);
	document
		.getElementsByClassName('flip-box')[0]
		.removeEventListener('mouseout', rotateBack);
	if (document.getElementById('ranking').clientHeight === 448) {
		let height = 448;
		let intervalId40 = setInterval(() => {
			if (height === 103) {
				document.getElementsByClassName('flip-box-inner')[0].style.transform =
					'';
				clearInterval(intervalId40);
			} else {
				height -= 1.5;
				document.getElementById('ranking').style.height = `${height}px`;
			}
		}, 18.5);
	}
}

document.getElementById('arrow2').addEventListener('click', returning);
