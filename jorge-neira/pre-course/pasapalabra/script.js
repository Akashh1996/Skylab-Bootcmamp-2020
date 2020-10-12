/*TEMA 4. PROYECTO Pasapalabra Game! (Final JS)*/
/*
Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el 
usuario deberá adivinar qué palabra estamos tratando, por ejemplo: '>>>'With the letter "M", 
Capital of Spain, located in the center of the country. '>>>' "Madrid" '>>>'Correct, you have 1 Point!
PRO
    ● El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...
    ● El programa debe estar preparado para aceptar el input "END" para terminar el juego
     en cualquier momento, si esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.
    ● Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, 
    se podrían hacer tres preguntas diferentes.
*/
'use strict';

const pasapalabra = () => {
	let questionList = [
		{
			letter: 'a',
			answer: ['antivirus', 'actualizar', 'amazon'],
			status: 0,
			question: [
				'CON LA A: Programas que permiten analizar la memoria, las unidades de disco y otros elementos de un ordenador, en busca de virus.',
				'CON LA A: En un entrono virtual, reemplazar información por considerarse antigua o no válida',
				'CON LA A: Compañía creada por Jeff Bezos en 1994'
			]
		},
		{
			letter: 'b',
			answer: ['bit', 'blog', 'backup'],
			status: 0,
			question: [
				'CON LA B: Unidad mínima de información empleada en la informática y en las telecomunicaciones',
				'CON LA B: Sitio web similiar a un diario personal online, cuyas entradas o artículos publicados se denominan post',
				'CON LA B: Hacer copia de seguridad.'
			]
		},
		{
			letter: 'c',
			answer: ['conexion', 'comprimir', 'cracker'],
			status: 0,
			question: [
				'CON LA C: Enlace que se establece entre el emisor y el receptor a través del que se envía el mensaje',
				'CON LA C: Reducir el peso de un archivo para que ocupe menos espacio sin perder la información original',
				'CON LA C: Es una persona interesada en saltarse la seguridad de un sistema informático.'
			]
		},
		{
			letter: 'd',
			answer: ['directorio', 'digital', 'dom'],
			status: 0,
			question: [
				'CON LA D: Tipo de buscador',
				'CON LA D: Contrario a analógico',
				'CON LA D: Estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página.'
			]
		},
		{
			letter: 'e',
			answer: ['ebay', 'encriptar', 'extension'],
			status: 0,
			question: [
				'CON LA E: Sitio de subastas por internet más popular en el mundo.',
				'CON LA E: Proteger archivos expresando su contenido en un lenguaje cifrado',
				'CON LA E: Cadena de caracteres anexado al nombre de un archivo usualmente precedido de un punto'
			]
		},
		{
			letter: 'f',
			answer: ['facebook', 'fakenews', 'firewall'],
			status: 0,
			question: [
				'CON LA F: Red social creada por Mark Zuckerberg en 2006',
				'CON LA F: Bulos o noticias falsas en la red',
				'CON LA F: Su traducción literal es muro de fuego, también conocido a nivel técnico como cortafuegos.'
			]
		},
		{
			letter: 'g',
			answer: ['gift', 'gigaherzt', 'gusano'],
			status: 0,
			question: [
				'CON LA G: Formato de imagen digital usado para crear animaciones cortas que se reproducen en bucle',
				'CON LA G: 1000 megahertz',
				'CON LA G: Es un programa similar a un virus que, a diferencia de éste, solamente realiza copias de sí mismo, o de partes de él. En ingles Worm.'
			]
		},
		{
			letter: 'h',
			answer: ['hacker', 'hardware', 'harmonyos'],
			status: 0,
			question: [
				'CON LA H: Pirata informático',
				'CON LA H: Componentes físicos de un PC.',
				'CON LA H: Nombre del sistema operativo de Huawei'
			]
		},
		{
			letter: 'i',
			answer: ['internet', 'intel', 'ip'],
			status: 0,
			question: [
				'CON LA I: Red informática de nivel mundial que utiliza la línea telefónica para transmitir la información',
				'CON LA I: Primera empresa de procesadores.',
				'CON LA I: Direccion única e irrepetible que se asigna a un dispositivo que trata de comunicarse con otro en Internet'
			]
		},
		{
			letter: 'j',
			answer: ['jpg', 'joke', 'javascript'],
			status: 0,
			question: [
				'CON LA J: Formato de imagen más popular con gran grado de compresión.',
				'CON LA J: No es un virus, sino bromas de mal gusto que tienen por objeto hacer pensar a los usuarios que han sido afectados por un virus.',
				'CON LA J: Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.'
			]
		},
		{
			letter: 'k',
			answer: ['kindle', 'keylogger', 'key'],
			status: 0,
			question: [
				'CON LA K: Tableta diseñada por Amazon.com como la versión multimedia del lector de libros electrónicos',
				'CON LA K: Programa que recoge y guarda una lista de todas las teclas pulsadas por un usuario. Dicho programa puede hacer pública la lista, permitiendo que terceras personas conozcan estos datos -lo que ha escrito el usuario afectado',
				'CON LA K: Tecla, en su uso más general, o bien, por extensión, el teclado.'
			]
		},
		{
			letter: 'l',
			answer: ['link', 'linux', 'lcd'],
			status: 0,
			question: [
				'CON LA L: Elemento de un documento electrónico que permite acceder automáticamente a otro documento o a otra parte del mismo.',
				'CON LA L: Sistema operativo gratuito para PC derivado de Unix',
				'CON LA L: Monitor de Cristal Líquido.'
			]
		},
		{
			letter: 'm',
			answer: ['microsoft', 'malware', 'meme'],
			status: 0,
			question: [
				'CON LA M: Fundada en 1975 por Bill Gates, entre otros.',
				'CON LA M: Cualquier programa, documento o mensaje, susceptible de causar perjuicios a los usuarios de sistemas informáticos. MALicious softWARE.',
				'CON LA M: Imagen, video o texto, por lo general distorsionado con fines caricaturescos que se difunde principalmente a través de Internet'
			]
		},
		{
			letter: 'n',
			answer: ['navegador', 'netiqueta', 'nuke'],
			status: 0,
			question: [
				'CON LA N: Software informático que permite acceder a internet',
				'CON LA N: Norma o regla que tengo que cumplir para no generar conflictos cuando me comunico en la red',
				'CON LA N: Caída o pérdida de la conexión de red, provocada de forma intencionada por alguna persona.'
			]
		},
		{
			letter: 'o',
			answer: ['open source', 'offline', 'ocr'],
			status: 0,
			question: [
				'CON LA O: Expresión de la lengua inglesa que pertenece al ámbito de la informática. Aunque puede traducirse como fuente abierta o código abierto',
				'CON LA O: Modo en el que trabajo cuando no tengo Internet',
				'CON LA O: Reconocimiento óptico de caracteres.'
			]
		},
		{
			letter: 'p',
			answer: ['perfil', 'programar', 'podcast'],
			status: 0,
			question: [
				'CON LA P: He de crearme uno para acceder por primera vez a mi red social favorita',
				'CON LA P: Dar instrucciones a un dispositivo digital para que realice una tarea en un momento determinado',
				'CON LA P: Emisión de radio o de televisión que un usuario puede descargar de internet mediante una suscripción previa y escucharla tanto en una computadora como en un reproductor portátil.'
			]
		},
		{
			letter: 'q',
			answer: ['qr', 'quicktime', 'quick access'],
			status: 0,
			question: [
				'CON LA Q: Código de barras de 2D compuesto por módulos negros en forma de cuadrado con fondo blanco',
				'CON LA Q: Formato de video creado por Apple.',
				'CON LA Q: Acceso rápido en ingles.'
			]
		},
		{
			letter: 'r',
			answer: ['recomendar', 'ram', 'robo de identidad'],
			status: 0,
			question: [
				'CON LA R: En LinkedIn, dar un like',
				'CON LA R: Memoria de acceso aleatorio.',
				'CON LA R: Obtención de información confidencial del usuario, como contraseñas de acceso a diferentes servicios, con el fin de que personas no autorizadas puedan utilizarla para suplantar al usuario afectado.'
			]
		},
		{
			letter: 's',
			answer: ['serie', 'selfie', 'servidor'],
			status: 0,
			question: [
				'CON LA S: Cuando los componentes de un circuito están dispuestos en una línea, uno tras otro, se dice que hay una conexión en...',
				'CON LA S: Autofoto',
				'CON LA S: Ordenador conectado a la red que presta asistencia a otros usuarios'
			]
		},
		{
			letter: 't',
			answer: ['tutor', 'teclado', 'troyano'],
			status: 0,
			question: [
				'CON LA T: Persona que resuelve mis dudas sobre el curso online que estoy haciendo',
				'CON LA T: Dispositivo principal de entrada en PC.',
				'CON LA T: Programa que llega al ordenador de manera encubierta, aparentando ser inofensivo, se instala y realiza determinadas acciones que afectan a la confidencialidad del usuario afectado.'
			]
		},
		{
			letter: 'u',
			answer: ['ubicacion', 'ubuntu', 'url'],
			status: 0,
			question: [
				'CON LA U: La comparto cuando quiero decir dónde estoy',
				'CON LA U: Distribución de Linux más famosa basada en Debian.',
				'CON LA U: Dirección a través de la cual se accede a las páginas Web en Internet'
			]
		},
		{
			letter: 'v',
			answer: ['viral', 'visical', 'virus'],
			status: 0,
			question: [
				'CON LA V: Acepción referida a un mensaje o contenido que se difunde con gran rápidez a través de las redes sociales',
				'CON LA V: Primera hoja de cálculo',
				'CON LA V: Programas que se pueden introducir en los ordenadores y sistemas informáticos de formas muy diversas, produciendo efectos molestos, nocivos e incluso destructivos e irreparables.'
			]
		},
		{
			letter: 'w',
			answer: ['wallapop', 'webinar', 'wav'],
			status: 0,
			question: [
				'CON LA W: Empresa española fundada en el año 2013, que ofrece una plataforma dedicada a la compra venta de productos de segunda mano entre usuarios a través de Internet',
				'CON LA W: Conferencia o seminario en formato online que se transmite en directo a través de una herramienta especializada',
				'CON LA W: Extensión de tipo de formato de sonido con muy poca o nula compresión.'
			]
		},
		{
			letter: 'x',
			answer: ['xeon', 'xml', 'xxi'],
			status: 0,
			question: [
				'CON LA X: Familia de microprocesadores Intel para servidores PC y Macintosh',
				'CON LA X: Lenguaje de Marcado Extensible o Lenguaje de Marcas Extensible, metalenguaje que permite definir lenguajes de marcas',
				'CON LA X: Siglo actual dónde la computadora parece que estuvo toda la vida y ahora nos parece imposible vivir sin tecnología'
			]
		},
		{
			letter: 'y',
			answer: ['youtuber', 'yahoo', 'yosemite'],
			status: 0,
			question: [
				'CON LA Y: Profesion de moda entre los más pequeños que consiste en grabar videos y subirlos su canal en una plataforma online, para conseguir el mayor numero de visitas posible',
				'CON LA Y: Empresa global de medios con sede en Estados Unidos que posee un portal de Internet, un directorio web y una serie de servicios tales como el popular correo electrónico',
				'CON LA Y: Undécima versión de OS X, el sistema operativo de Apple para los ordenadores Macintosh.'
			]
		},
		{
			letter: 'z',
			answer: ['zoom', 'zettabyte', 'zombie'],
			status: 0,
			question: [
				'CON LA Z: Aplicación que utilizo cuando teletrabajo para reunirme con mis compañeros de equipo',
				'CON LA Z: Unidad de almacenamiento de información equivale a 1021 bytes, cuyo prefijo fue adoptado en 1991, viene del latín septem, que significa siete',
				'CON LA Z: Ordenador conectado a la red que ha sido comprometido por un hacker, un virus informático o un troyano. Puede ser utilizado para realizar distintas tareas maliciosas de forma remota'
			]
		}
	];

	let userName;
	let highScore = [
		{ name: 'Nuria', score: 22 },
		{ name: 'Albert', score: 8 },
		{ name: 'Marina', score: 11 },
		{ name: 'Jorge', score: 19 },
		{ name: 'Paula', score: 13 }
	];
	let questionsToAsk, correct, incorrect, letters;
	const unicodeCharacters = ['\u{02713}', '\u{02717}'];
	const [check, cross] = unicodeCharacters;

	function wellcome() {
		userName = prompt(
			'Bienvenid@ al pasapalabras, introduce tu nombre',
			'John Doe'
		);
		userName === '' || userName == null
			? (alert('Nombre Invalido'), wellcome())
			: (alert(`Bienvenido ${userName}`), playingConfirm());
	}

	function playingConfirm() {
		let wantToPlay = confirm(
			`El pasapalabras esta a punto de empezar!, pero antes haremos un pequeño recordatorio. \n\t-Respuesta correcta: 1 Punto ${check} \n\t-Respuesta incorrecta: 1 error ${cross} \n\t-Escribir PASAPALABRA: No contara \nEl juego acabara cuando respondas a todas las preguntas \nSi deseas finalizar el juego, simplemente escribe "END" como respuesta \n!BUENA SUERTE!`
		);
		wantToPlay
			? (resetNewGame(), playingPasapalabra(questionList))
			: console.log('Hasta luego!');
	}

	function resetNewGame() {
		questionsToAsk = 0;
		correct = 0;
		incorrect = 0;
		letters = [];
		for (let x = 0; x < questionList.length; x++) {
			letters.push(questionList[x].letter.toUpperCase());
			questionList[x].status = 0;
		}
		questionsToAsk = Math.floor(Math.random() * 3);
	}

	function playingPasapalabra(questionListArray) {
		let userAnswer;
		let questionAnswerCounter = 0;
		let x;
		while (questionAnswerCounter !== 26) {
			for (x = 0; x < questionListArray.length; x++) {
				if (questionListArray[x].status === 0)
					console.log(
						`\nPregunta: ${questionListArray[x].question[questionsToAsk]}`
					);
				else continue;
				do {
					userAnswer = prompt('Escribe la respuesta');
				} while (userAnswer === '' || userAnswer === null);
				userAnswer.toLowerCase();
				if (userAnswer === 'end') break;
				if (userAnswer === 'pasapalabra') continue;
				if (userAnswer === questionListArray[x].answer[questionsToAsk]) {
					console.log(
						`CORRECTO! Has conseguido 1 punto! \n\tTu respuesta: ${userAnswer}`
					);
					questionListArray[x].status = 1;
					letters[x] = check;
					questionAnswerCounter = questionAnswerCounter++, correct++;
				} else {
					console.log(
						`INCORRECTO! Lo haras mejor en la proxima pregunta! \n\tTu respuesta: ${userAnswer} \n\tRespuesta Correcta: ${questionListArray[x].answer[questionsToAsk]}`
					);
					questionListArray[x].status = 1;
					letters[x] = cross;
					questionAnswerCounter++, incorrect++;
				}
				console.log(
					`\t\t%c${letters.slice(0, 13).join(' | ')}`,
					'color: orange; font-size: 15px'
				);
				console.log(
					`\t\t%c${letters.slice(13, 26).join(' | ')}`,
					'color: orange; font-size: 15px'
				);
			}
			if (userAnswer === 'end') {
				exit();
				break;
			}
			questionAnswerCounter !== 26 && (x = 0);
		}
		questionAnswerCounter === 26 && finishGame();
	}

	function finishGame() {
		let userFinalResult = { name: userName, score: correct };
		highScore.push(userFinalResult);
		console.log(
			`Has finalizado el pasapalabras con ${correct} aciertos y ${incorrect} fallos. \nTabla de rankings:`
		);
		highScore.sort(function (a, b) {
			return b.score - a.score;
		});
		highScore.forEach((scoreArray) => {
			console.log(`Nombre: ${scoreArray.name} Puntos: ${scoreArray.score}`);
		});
		confirm('Desea Volver a Jugar')
			? wellcome()
			: console.log('Hasta la proxima!');
	}

	function exit() {
		console.log(
			`Gracias por jugar, has abandonado la partida con ${correct} aciertos. \nVuelve pronto!`
		);
	}
	wellcome();
};

pasapalabra();
