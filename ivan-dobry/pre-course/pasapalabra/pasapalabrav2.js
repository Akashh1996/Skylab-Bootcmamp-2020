function pasapalabra() {
	var questions = [
		{
			letter: 'a',
			answer: ['abducir', 'adn', 'atomo'],
			status: 0,
			question: [
				'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
				'CON LA A. Molecula portadora de la información genética',
				'CON LA A. Está formado por electrones, protones y neutrones.'
			]
		},

		{
			letter: 'b',
			answer: ['bingo', 'barometro', 'bacteria'],
			status: 0,
			question: [
				"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
				'CON LA B. Aparato para medir la presion atmosferica.',
				'CON LA B. Microorganismo procariota.'
			]
		},

		{
			letter: 'c',
			answer: ['churumbel', 'caries', 'coulomb'],
			status: 0,
			question: [
				'CON LA C. Niño, crío, bebé',
				'CON LA C. Destrucción del diente por falta de higiene',
				'CON LA C. Cientifico que estudió las cargas eléctricas y descubrió una ley que lleva su nombre.'
			]
		},

		{
			letter: 'd',
			answer: ['diarrea', 'densidad', 'diamante'],
			status: 0,
			question: [
				'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
				'CON LA D. Masa partido del volumen',
				'CON LA D. El mineral mas duro de la naturaleza.'
			]
		},

		{
			letter: 'e',
			answer: ['ectoplasma', 'enfermedad', 'enlace'],
			status: 0,
			question: [
				'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
				'CON LA E. Falta de salud.',
				'CON LA E. Fuerza que mantiene unidos a los átomos.'
			]
		},

		{
			letter: 'f',
			answer: ['facil', 'fumar', 'fosil'],
			status: 0,
			question: [
				'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
				'CON LA F. Hábito perjudicial para el sistema respiratorio.',
				'CON LA F. Forma de vida del pasado que se encuentra en las rocas.'
			]
		},

		{
			letter: 'g',
			answer: ['galaxia', 'gramo', 'gemelos'],
			status: 0,
			question: [
				'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
				'CON LA G. Unidad de masa.',
				'CON LA G. Que nacen del mismo óvulo.'
			]
		},

		{
			letter: 'h',
			answer: ['harakiri', 'hidrogeno', 'hervivoro'],
			status: 0,
			question: [
				'CON LA H. Suicidio ritual japonés por desentrañamiento',
				'CON LA H. Elemento químico de numero atomico 1.',
				'CON LA H. Animal vegetariano.'
			]
		},

		{
			letter: 'i',
			answer: ['iglesia', 'insecto', 'iman'],
			status: 0,
			question: [
				'CON LA I. Templo cristiano',
				'CON LA I. La mosca, la hormiga, la avispa y la abeja lo són.',
				'CON LA I. Material magnetico con un polo norte y otro sur.'
			]
		},

		{
			letter: 'j',
			answer: ['jabali', 'jueves', 'jirafa'],
			status: 0,
			question: [
				"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
				'CON LA J. Dia de la semana.',
				'CON LA J. Animal de cuello muy largo.'
			]
		},

		{
			letter: 'k',
			answer: ['kamikaze', 'kilogramo', 'kelvin'],
			status: 0,
			question: [
				'CON LA K. Persona que se juega la vida realizando una acción temeraria',
				'CON LA K. Unidad de medida de masa',
				'CON LA K. Unidad de temperatura en el S.I.'
			]
		},

		{
			letter: 'l',
			answer: ['licantropo', 'lepra', 'laboratorio'],
			status: 0,
			question: [
				'CON LA L. Hombre lobo',
				'CON LA L. Enfermedad cutanea degenerativa.',
				'CON LA L. Lugar donde se hacen experimentos químicos.'
			]
		},

		{
			letter: 'm',
			answer: ['misantropo', 'marmol', 'masa'],
			status: 0,
			question: [
				'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
				'CON LA M. Roca que se utiliza en la construcción.',
				'CON LA M. Cantidad de materia que tiene un cuerpo.'
			]
		},

		{
			letter: 'n',
			answer: ['necedad', 'neutron', 'nube'],
			status: 0,
			question: [
				'CON LA N. Demostración de poca inteligencia',
				'CON LA N. Particula subatómica sin carga eléctrica',
				'CON LA N. Condensación de agua en la atmosfera.'
			]
		},

		{
			letter: 'ñ',
			answer: ['señal', 'cigueña', 'año'],
			status: 0,
			question: [
				'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
				'CONTIENE LA Ñ. Ave típica de nuestra tierra.',
				'CONTIENE LA Ñ. Unidad de tiempo.'
			]
		},

		{
			letter: 'o',
			answer: ['orco', 'oro', 'oveja'],
			status: 0,
			question: [
				'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
				'CON LA O. Elemento quimico cuyo simbolo es Au.',
				'CON LA O. Animal con abrigo de lana.'
			]
		},

		{
			letter: 'p',
			answer: ['protoss', 'poro', 'probeta'],
			status: 0,
			question: [
				'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
				'CON LA P. Agujero de la piel.',
				'CON LA P. Material de laboratorio que sirve para medir el volumen.'
			]
		},

		{
			letter: 'q',
			answer: ['queso', 'quimica', 'queratina'],
			status: 0,
			question: [
				'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
				'CON LA Q. Ciencia que estudia las transformaciones de la materia.',
				'CON LA Q. Proteina de las uñas.'
			]
		},

		{
			letter: 'r',
			answer: ['raton', 'reactivos', 'regla'],
			status: 0,
			question: [
				'CON LA R. Roedor',
				'CON LA R. Sustancias iniciales en una reacción química.',
				'CON LA R. Instrumento de medida de longitud.'
			]
		},

		{
			letter: 's',
			answer: ['stackoverflow', 'solido', 'sal'],
			status: 0,
			question: [
				'CON LA S. Comunidad salvadora de todo desarrollador informático',
				'CON LA S. Estado de agregación en la que se encuentra la sal.',
				'CON LA S. Cloruro sodico.'
			]
		},

		{
			letter: 't',
			answer: ['terminator', 'temperatura', 'transplante'],
			status: 0,
			question: [
				'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
				'CON LA T. Energía interna de los cuerpos.',
				'CON LA T. Sustitución de un órgano por otro.'
			]
		},

		{
			letter: 'u',
			answer: ['unamuno', 'ulcera', 'utero'],
			status: 0,
			question: [
				"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
				'CON LA U. Herida en el estomago muy dolorosa y sangrante.',
				'CON LA U. Parte del cuerpo donde se gesta el feto.'
			]
		},

		{
			letter: 'v',
			answer: ['vikingos', 'valle', 'volumen'],
			status: 0,
			question: [
				'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
				'CON LA V. Depresión entre dos montañas.',
				'CON LA V. Espacio que ocupa un cuerpo.'
			]
		},

		{
			letter: 'w',
			answer: ['sandwich', 'waterpolo', 'kiwi'],
			status: 0,
			question: [
				'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
				'CON LA W. Deporte que se practica en la piscina con un balón.',
				'CONTIENE LA W. Fruta que por el interior es de color verde.'
			]
		},

		{
			letter: 'x',
			answer: ['botox', 'extincion', 'expanden'],
			status: 0,
			question: [
				'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
				'CONTIENE LA X. Desaparición de una especie animal o vegetal.',
				'CONTIENE LA X. Cuando un gas se comprime, sus particulas se...'
			]
		},

		{
			letter: 'y',
			answer: ['peyote', 'yedra', 'yeso'],
			status: 0,
			question: [
				'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos',
				'CON LA Y. Planta trepadorda',
				'CON LA Y. Mineral usado para la fabricación de escayola.'
			]
		},

		{
			letter: 'z',
			answer: ['zen', 'zorro', 'zoologia'],
			status: 0,
			question: [
				'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
				'CON LA Z. Animal astuto y poco amigo de las gallinas.',
				'CON LA Z. Ciencia que estudia los animales.'
			]
		}
	];

	let answer, name;
	let newNum;
	let randomArr = [];
	let fail = 0;
	let score = 0;
	let highScore = [
		{ name: 'Tommy', score: 27 },
		{ name: 'Janis', score: 20 },
		{ name: 'Sharon', score: 15 },
		{ name: 'Lenon', score: 11 },
		{ name: 'Ozzy', score: 0 }
	];

	function bienvenida() {
		name = prompt('Introduzca su nombre');

		if (name == '') {
			console.log('Introduzca un nombre, porfavor!');
			return bienvenida();
		} else if (name == null) {
			console.log('Adios!');
		} else {
			console.log(
				'BIENVENIDO A PASAPALABRA ' +
					name +
					" !!! \nResponda correctamente a todas las preguntas para ganar el juego. \nPuede escribir 'pasapalabra' para pasar a la siguiente pregunta y contestarla mas adelante. \nEscriba 'end' para finalizar la partida en cualquier momento."
			);
			return firstMenu();
		}
	}

	function firstMenu() {
		let firstChoice = prompt('Presione : \n1.-Iniciar Partida \n2.-Salir');

		if (firstChoice == 1) {
			randomArray();
			return askQuestions();
		} else if (firstChoice == 2 || firstChoice == null) {
			console.log('Adios!');
		} else {
			console.log('Presione 1 o 2!!');
			return firstMenu();
		}
	}

	function askQuestions() {
		for (let i = 0; i < questions.length; i++) {
			if (questions[i].status == 0) {
				console.log(
					'La siguiente pregunta es: \n' + questions[i].question[randomArr[i]]
				);
				answer = prompt('Escriba su respuesta: ');

				if (answer == '') {
					console.log('Escriba una respuesta!');
					i--;
				} else if (answer == null) {
					return endMenu();
				} else if (answer.toLowerCase() === questions[i].answer[randomArr[i]]) {
					console.log('Correcto!!!');
					questions[i].status = 1;
					score++;
				} else if (answer.toLowerCase() === 'pasapalabra') {
					console.log('Pasamos a la siguiente pregunta.');
				} else if (answer.toLowerCase() === 'end') {
					return endMenu();
				} else {
					console.log('Incorrecto!!');
					questions[i].status = 1;
					fail++;
				}
			}
		}

		return checkQuestions();
	}

	function checkQuestions() {
		for (let i = 0; i < questions.length; i++) {
			if (questions[i].status == 0) {
				return askQuestions();
			}
		}

		return winerMenu();
	}

	function endMenu() {
		console.log(
			'Juego finalizado. \nHa respondido correctamente a ' +
				score +
				' preguntas. \nGracias por jugar!'
		);
	}

	function winerMenu() {
		if (fail == 0) {
			console.log(
				'Fin del Juego!!! \nFelicidades, ha respondido correctamente a todas las preguntas!!!!!!'
			);
		} else {
			console.log(
				'Fin del juego!!! \nHa respondido correctamente a ' +
					score +
					' preguntas y fallado en ' +
					fail
			);
		}

		for (let i = 0; i < highScore.length; i++) {
			if (score >= highScore[i].score) {
				highScore.splice(i, 0, { name: name, score: score });
				break;
			}
		}

		console.log('Mejores puntuaciones: ');

		for (let j = 0; j < highScore.length; j++) {
			console.log(
				'Nombre: ' + highScore[j].name + ' Puntuacion: ' + highScore[j].score
			);
		}

		return rePlayMenu();
	}

	function rePlayMenu() {
		let rePlayChoice = prompt('Desea Jugar de nuevo? \n1.-Si \n2.-No');

		if (rePlayChoice == 1) {
			for (let i = 0; i < questions.length; i++) {
				questions[i].status = 0;
			}
			score = 0;
			fail = 0;
			randomArr = [];
			randomArray();
			return askQuestions();
		} else if (rePlayChoice == 2 || rePlayChoice == null) {
			console.log('Adios!');
		} else {
			console.log('Escriba 1 o 2!');
			return rePlayMenu();
		}
	}

	function randomArray() {
		for (let i = 0; i < 27; i++) {
			newNum = Math.floor(Math.random() * 3);
			randomArr.push(newNum);
		}
	}

	bienvenida();
}

pasapalabra();
