const questionLetter = [
	"letter-A",
	"letter-B",
	"letter-C",
	"letter-D",
	"letter-E",
	"letter-F",
	"letter-G",
	"letter-H",
	"letter-I",
	"letter-J",
	"letter-K",
	"letter-L",
	"letter-M",
	"letter-N",
	"letter-O",
	"letter-P",
	"letter-Q",
	"letter-R",
	"letter-S",
	"letter-T",
	"letter-U",
	"letter-V",
	"letter-W",
	"letter-X",
	"letter-Y",
	"letter-Z",
];
const questions = [
	{
		letter: "a",
		status: 0,
		answers: [
			{ answ: "arpia", quest: "CON LA A. Mujer malvada" },
			{
				answ: "acueducto",
				quest:
					"CON LA A. Conducto de agua formado por canales y caños subterráneos, o por arcos levantados",
			},
			{
				answ: "atona",
				quest: "CON LA A. Oveja que cría un cordero de otra madre",
			},
		],
	},
	{
		letter: "b",
		status: 0,
		answers: [
			{
				answ: "broza",
				quest:
					"CON LA B. Conjunto de hojas, ramas, cortezas y otros despojos de las plantas",
			},
			{ answ: "birmano", quest: "CON LA B. Natural de Birmania, país de Asia" },
			{
				answ: "buhardilla",
				quest:
					"CON LA B. Parte de un edificio situada inmediatamente debajo del tejado, con techo en pendiente y destinada a vivienda",
			},
		],
	},
	{
		letter: "c",
		status: 0,
		answers: [
			{
				answ: "cementerio",
				quest:
					"CON LA C. Terreno, generalmente cercado, destinado a enterrar cadáveres",
			},
			{
				answ: "cierto",
				quest: "CON LA C. Conocido como verdadero, seguro, indubitable",
			},
			{
				answ: "comedia",
				quest:
					"CON LA C. Pieza teatral en cuya acción suelen predominar los aspectos placenteros, festivos o humorísticos, con desenlace casi siempre feliz",
			},
		],
	},
	{
		letter: "d",
		status: 0,
		answers: [
			{ answ: "duro", quest: "CON LA D. Moneda de cinco pesetas" },
			{
				answ: "dardo",
				quest:
					"CON LA D. Arma arrojadiza, semejante a una lanza pequeña y delgada, que se tira con la mano",
			},
			{
				answ: "diligencia",
				quest:
					"CON LA D. Coche grande, dividido en dos o tres departamentos, arrastrado por caballerías y destinado al transporte de viajeros",
			},
		],
	},
	{
		letter: "e",
		status: 0,
		answers: [
			{
				answ: "elocuencia",
				quest:
					"CON LA E. Facultad de hablar o escribir de modo eficaz para deleitar, conmover o persuadir",
			},
			{
				answ: "epitafio",
				quest:
					"CON LA E. Inscripción que se pone, o se supone puesta, sobre un sepulcro o en la lápida o lámina colocada junto al enterramiento",
			},
			{ answ: "etanol", quest: "CON LA E. Alcohol etílico" },
		],
	},
	{
		letter: "f",
		status: 0,
		answers: [
			{ answ: "fraternal", quest: "CON LA F. Propio de hermanos" },
			{
				answ: "follaje",
				quest: "CON LA F. Conjunto de hojas de los árboles y de otras plantas",
			},
			{ answ: "fritura", quest: "CON LA F. Conjunto de cosas fritas" },
		],
	},
	{
		letter: "g",
		status: 0,
		answers: [
			{ answ: "gibado", quest: "CON LA G. Jorobado, corcovado" },
			{
				answ: "grumo",
				quest: "CON LA G. Parte de una sustancia que se coagula",
			},
			{
				answ: "gorgotear",
				quest:
					"CON LA G. Dicho de un líquido o de un gas: Producir ruido al moverse en el interior de alguna cavidad",
			},
		],
	},
	{
		letter: "h",
		status: 0,
		answers: [
			{
				answ: "halagar",
				quest:
					"CON LA H. Dar a alguien muestras de afecto o rendimiento con palabras o acciones que puedan serle gratas",
			},
			{
				answ: "heno",
				quest: "CON LA H. Hierba segada, seca, para alimento del ganado",
			},
			{
				answ: "huella",
				quest:
					"CON LA H. Señal que deja el pie del hombre o del animal en la tierra por donde pasa",
			},
		],
	},
	{
		letter: "i",
		status: 0,
		answers: [
			{
				answ: "idealista",
				quest:
					"CON LA I. Que propende a representarse las cosas de una manera ideal",
			},
			{ answ: "invisible", quest: "CON LA I. Que no puede ser visto" },
			{
				answ: "ionizar",
				quest:
					"CON LA I. Disociar una molécula en iones o convertir un átomo o molécula en ion",
			},
		],
	},
	{
		letter: "j",
		status: 0,
		answers: [
			{
				answ: "juliana",
				quest:
					"CON LA J. Dicho de la manera de cortar las verdudas para ensaladas o guarnición de otros alimentos: en tiras finas",
			},
			{
				answ: "jabalina",
				quest:
					"CON LA J. Arma, a manera de pica o venablo, que se usaba más comúnmente en la caza mayor, y actualmente en una modalidad deportiva",
			},
			{ answ: "jinete", quest: "CON LA J. Persona diestra en la equitación" },
		],
	},
	{
		letter: "k",
		status: 0,
		answers: [
			{
				answ: "kosher",
				quest:
					"CON LA K. Dicho de un producto alimenticio, una comida, un menú, etc. Obtenido o preparado según los preceptos del judaísmo",
			},
			{
				answ: "kamikaze",
				quest: "CON LA K. Persona que lleva a cabo un atentado suicida",
			},
			{ answ: "kilometraje", quest: "CON LA K. Acción de kilometrar" },
		],
	},
	{
		letter: "l",
		status: 0,
		answers: [
			{
				answ: "letal",
				quest: "CON LA L. Que ocasiona o puede ocasionar la muerte",
			},
			{ answ: "laudable", quest: "CON LA L. Digno de alabanza" },
			{ answ: "libremente", quest: "CON LA L. Con libertad" },
		],
	},
	{
		letter: "m",
		status: 0,
		answers: [
			{
				answ: "malabarismo",
				quest: "CON LA M. Arte de juegos de destreza y agilidad",
			},
			{
				answ: "mermelada",
				quest: "CON LA M. Conserva elaborada con fruta cocida y azúcar",
			},
			{ answ: "morcal", quest: "CON LA M. Tripa gruesa para embutidos" },
		],
	},
	{
		letter: "n",
		status: 0,
		answers: [
			{ answ: "nimiedad", quest: "CON LA N. Pequeñez, insignificancia" },
			{
				answ: "nada",
				quest: "CON LA N. Inexistencia total o carencia absoluta de todo ser",
			},
			{
				answ: "noria",
				quest:
					"CON LA N. Máquina compuesta de dos grandes ruedas engranadas que, mediante cangilones, sube el agua de los pozos, acequias",
			},
		],
	},
	{
		letter: "o",
		status: 0,
		answers: [
			{
				answ: "osamenta",
				quest: "CON LA O. Esqueleto del ser humano y de los animales",
			},
			{ answ: "oliente", quest: "CON LA O. Que huele o exhala olor" },
			{
				answ: "otoba",
				quest:
					"CON LA O. Árbol de la América tropical, semejante a la mirística, y cuyo fruto es muy parecido a la nuez moscada",
			},
		],
	},
	{
		letter: "p",
		status: 0,
		answers: [
			{
				answ: "pronunciamiento",
				quest:
					"CON LA P. Alzamiento militar contra el Gobierno, promovido por un jefe del Ejército u otro caudillo",
			},
			{
				answ: "pescado",
				quest:
					"CON LA P. Pez comestible sacado del agua por cualquiera de los procedimientos de pesca",
			},
			{
				answ: "popular",
				quest: "CON LA P. Perteneciente o relativo al pueblo",
			},
		],
	},
	{
		letter: "q",
		status: 0,
		answers: [
			{
				answ: "quesadilla",
				quest:
					"CON LA Q. Tortilla de maíz o de trigo doblada por la mitad, rellena de queso y a veces de otros ingredientes, propia de la cocina mexicana",
			},
			{
				answ: "quad",
				quest:
					"CON LA Q. Vehículo todoterreno de cuatro ruedas similar a una motocicleta",
			},
			{ answ: "quebradizo", quest: "CON LA Q. Fácil de quebrarse" },
		],
	},
	{
		letter: "r",
		status: 0,
		answers: [
			{
				answ: "ruleta",
				quest: "CON LA R. Rueda giratoria utilizada en juegos de azar",
			},
			{
				answ: "ritmo",
				quest:
					"CON LA R. Orden acompasado en la sucesión o acaecimiento de las cosas",
			},
			{
				answ: "resolver",
				quest:
					"CON LA R. Solucionar un problema, una duda, una dificultad o algo que los entraña",
			},
		],
	},
	{
		letter: "s",
		status: 0,
		answers: [
			{
				answ: "suero",
				quest:
					"CON LA S. Parte de la sangre o de la linfa que permanece líquida después de haberse producido la coagulación",
			},
			{ answ: "silbido", quest: "CON LA S. Acción y efecto de silbar" },
			{ answ: "sorber", quest: "CON LA R. Beber aspirando" },
		],
	},
	{
		letter: "t",
		status: 0,
		answers: [
			{
				answ: "toldo",
				quest:
					"CON LA T. Pabellón o cubierta de tela que se tiende para hacer sombra",
			},
			{
				answ: "tarabilla",
				quest:
					"CON LA T. Zoquete pequeño de madera que sirve para cerrar puertas y ventanas",
			},
			{
				answ: "termita",
				quest:
					"CON LA T. Insecto del orden de los isópteros, que vive en colonias y que roe madera, de la que se alimenta, por lo que puede ser peligroso para ciertas construcciones",
			},
		],
	},
	{
		letter: "u",
		status: 0,
		answers: [
			{ answ: "usanza", quest: "CON LA U. Ejercicio o práctica de algo" },
			{
				answ: "ubicar",
				quest: "CON LA U. Situar o instalar en determinado espacio o lugar",
			},
			{
				answ: "ungir",
				quest:
					"CON LA U. Aplicar a alguien o algo aceite u otra materia pingüe, extendiéndola superficialmente",
			},
		],
	},
	{
		letter: "v",
		status: 0,
		answers: [
			{ answ: "vigente", quest: "CON LA V. Que está en vigor y observancia" },
			{
				answ: "varadero",
				quest:
					"CON LA V. Lugar donde varan las embarcaciones para resguardarlas o para limpiar sus fondos o repararlas",
			},
			{ answ: "voraz", quest: "CON LA V. Dicho de un animal: Muy comedor" },
		],
	},
	{
		letter: "w",
		status: 0,
		answers: [
			{ answ: "washington", quest: "CON LA W. Capital de Estados Unidos" },
			{
				answ: "windsurf",
				quest:
					"CON LA W. Deporte que consiste en deslizarse por el agua sobre una tabla especial provista de una vela.",
			},
			{
				answ: "whisky",
				quest:
					"CON LA W. Licor alcohólico que se obtiene del grano de algunas plantas, destilando un compuesto amiláceo en estado de fermentación",
			},
		],
	},
	{
		letter: "x",
		status: 0,
		answers: [
			{
				answ: "extender",
				quest:
					"CONTIENE LA X. Hacer que algo, aumentando su superficie, ocupe más lugar o espacio que el que antes ocupaba",
			},
			{ answ: "xenofobia", quest: "CON LA X. Fobia a los extranjeros" },
			{
				answ: "taxi",
				quest:
					"CONTIENE LA X. Automóvil de alquiler con conductor, generalmente provisto de taxímetro",
			},
		],
	},
	{
		letter: "y",
		status: 0,
		answers: [
			{
				answ: "poyo",
				quest:
					"CONTIENE LA Y. Banco de piedra u otra materia arrimado a las paredes, ordinariamente a la puerta de las casas de zonas rurales",
			},
			{ answ: "yuan", quest: "CON LA Y. Unidad monetaria de China" },
			{ answ: "yegua", quest: "CON LA Y. Hembra del caballo" },
		],
	},
	{
		letter: "z",
		status: 0,
		answers: [
			{
				answ: "zurcir",
				quest:
					"CON LA Z. Coser la rotura de una tela, juntando los pedazos con puntadas o pasos ordenados, de modo que la unión resulte disimulada",
			},
			{ answ: "zaragalla", quest: "CON LA Z. Carbón vegetal menudo" },
			{
				answ: "zombi",
				quest:
					"CON LA Z. Persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad",
			},
		],
	},
];

let right_Q = [];
let wrong_Q = [];
var counter = 0;
let timeLeft = document.getElementById("time-left").textContent;
let displayedQuestion = document.getElementById("question");
let answerToQuestion = document.getElementById("answer");
let answerStatus = document.querySelectorAll(".letter-circle-blue");
//let letterCaseSelector = document.querySelectorAll(".letter-container");
const start = document.getElementById("startButton");
const nextQuestion = document.getElementById("nextQuestion");
const submitAnswer = document.getElementById("submitButton");

start.addEventListener("click", () => {
	do {
		// SOLICITUD DEL NOMBRE:
		var userName = prompt("Introduzca su nombre, por favor:");
		if (isFinite(userName) || userName === null) {
			var notValidInput = window.confirm(
				"El formato de entrada no es váldo. Inténtalo de nuevo."
			);
			if (notValidInput === false) {
				var exit = confirm("¿Quieres salir del juego?");
				if (exit === true) {
					throw new Error("El juego se ha terminado.");
				}
			}
		}
	} while (isFinite(userName) || userName === null);

	displayedQuestion.innerHTML = `Bienvenido ${userName} al juego de PASAPALABRA! Donde si aciertas todas las preguntas del rosco, puedes ganar mucho dinero! Mucha suerte!`;
});

//  SETUP PARA ELEGIR UNA PALABRA ENTRE TRES PARA CADA UNA DE LAS LETRAS:
for (i = 0; i < questions.length; i++) {
	var x = Math.floor(Math.random() * (questions[i].answers.length - 1));
	questions[i].answer = questions[i].answers[x].answ;
	questions[i].question = questions[i].answers[x].quest;
}

// EVENTO DE UN TURNO

nextQuestion.addEventListener("click", () => {
	timeCountDown();
	start.disabled = true;
	nextQuestion.disabled = true;
	displayedQuestion.innerHTML = questions[counter].question;
	if (questions[counter].status === 0) {
		submitAnswer.addEventListener("click", () => {
			let inputByUser = answerToQuestion.value;
			let transformToLowerCase = inputByUser.toLowerCase();

			switch (transformToLowerCase) {
				case questions[counter].answer:
					right_Q.push(questions[counter].answer);
					questions[counter].status = 1;
					answerStatus[counter].className = "letter-circle-green";
					alert("¡CORRECTO!");
					checkAnswers();
					counter++;
					if (counter === 26) counter = 0;
					break;
				case "pasapalabra":
					counter++;
					if (counter === 26) counter = 0;
					break;
				case "end":
					if (right_Q.length === 1) {
						alert(
							`Sentimos que tengas que marcharte. ¡Has acertado ${right_Q.length} palabra! \n¡Gracias por jugar con nosotros y esperamos volver a veerte pronto!`
						);
						throw new Error("El juego se ha terminado");
					} else if (right_Q.length === 0) {
						alert(
							`Sentimos que tengas que marcharte. ¡No has acertado palabra alguna! \n¡Gracias por jugar con nosotros y esperamos volver a veerte pronto!`
						);
						throw new Error("El juego se ha terminado");
					} else {
						alert(
							`Sentimos que tengas que marcharte. ¡Has acertado ${right_Q.length} palabras! \n¡Gracias por jugar con nosotros y esperamos volver a veerte pronto!`
						);
						throw new Error("El juego se ha terminado");
					}
				default:
					wrong_Q.push(questions[counter].answer);
					questions[counter].status = 1;
					answerStatus[counter].className = "letter-circle-red";
					alert(
						`¡NOOO, has fallado! La palabra correcta ${questions[counter].answer}`
					);
					checkAnswers();
					counter++;
					if (counter === 26) counter = 0;
					break;
			}
			answerToQuestion.value = "";
			answerToQuestion.innerHTML = "";
			while (questions[counter].status === 1) counter++;
			displayedQuestion.innerHTML = questions[counter].question;
		});
	}
});

// COMPROBACIÓN FINAL JUEGO

function checkAnswers() {
	if (right_Q.length === 26) {
		alert(
			`¡Enhorabuena, has conseguido responder correctamente a todas las preguntas!`
		);
		throw new Error("El juego se ha terminado");
	} else if (right_Q.length < 26 && right_Q.length + wrong_Q.length === 26) {
		alert(
			`Lo sentimos pero no has conseguido llevarte el bote. Tu resumen de la partida es el siguiente: \n PALABRAS ACERTADAS: ${right_Q.length} \n PALABRAS ERRONEAS: ${wrong_Q.length}`
		);
		throw new Error("El juego se ha terminado");
	}
}

// CUENTA ATRAS

function timeCountDown() {
	var countDown = setInterval(function () {
		timeLeft--;
		document.getElementById("time-left").textContent = timeLeft;
		if (timeLeft <= 0) {
			alert(
				`¡El tiempo se ha acabado!  Tu resumen de la partida es el siguiente: \n PALABRAS ACERTADAS: ${right_Q.length} \n PALABRAS ERRONEAS: ${wrong_Q.length}`
			);
			clearInterval(countDown);
			throw new Error("Tiempo agotado");
		}
	}, 1000);
}

answerToQuestion.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submitAnswer.click();
	}
});
