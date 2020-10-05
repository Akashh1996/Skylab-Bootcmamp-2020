var questions = [

    { letter: "a", answer: ["abducir", "alegria", "amazon"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", 
    "CON LA A. Sentimiento de felicidad", "CON LA A: Compañía creada por Jeff Bezos en 1994"]},

    { letter: "b", answer: ["bingo", "bateria", "billete"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", 
    "CON LA B. Instrumento de percusion que lleva el ritmo en los grupos de rock", "CON LA B. Dinero en forma de trozo de papel"]},

    { letter: "c", answer: ["churumbel", "cenar", "carambano"], status: 0, question: ["CON LA C. Niño, crío, bebé", 
    "CON LA C. Acción de comer por la noche", "CON LA C. Trozo de hielo largo y acabado en punta"]},

    { letter: "d", answer: ["diarrea", "diana", "dolor"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", 
    "CON LA D. Objetivo en el juego de los dardos", "Sensación desagradable como consecuencia de una lesión en los tejidos del cuerpo"]},

    { letter: "e", answer: ["ectoplasma", "experiencia", "emerger"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", 
    "CON LA E. Conocimiento de algo o habilidad para ello que se adquiere al haberlo realizado una o más veces", "CON LA E. Salir de dentro del agua u otro líquido"]},

    { letter: "f", answer: ["facil", "fundacion", "fiat"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. La saga más famosa de Isaac Asimov", 
    "CON LA F. Marca de coches italiana con sede en Turín"]},

    { letter: "g", answer: ["galaxia", "gol", "galicia"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", 
    "CON LA G. Un tanto en deportes como el fútbol, hockey o balonmano", "CON LA G. Comunidad autonoma de España situada en el noroeste de la península"]},

    { letter: "h", answer: ["harakiri", "harry", "herradura"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", 
    "CON LA H. Protagonista de una de las sagas de magos más famosas", "CON LA H. Pieza en forma de U para los cascos de los caballos"]},

    { letter: "i", answer: ["iglesia", "iman", "innovar"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Cuerpo que atrae el hierro", 
    "CON LA I. Acción de introducir novedades modificando elementos ya existentes con el fin de mejorarlos"]},

    { letter: "j", answer: ["jabali", "jalisco", "jerusalen"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", 
    "CON LA J. Estado de México cuya capital es Guadalajara", "CON LA J. Ciudad de Oriente Próximo situada en los montes de Judea, el mar Mediterráneo y la ribera norte del mar Muerto"]},

    { letter: "k", answer: ["kamikaze", "karate", "kilimanjaro"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", 
    "CON LA K. Arte marcial tradicional japonesa", "CON LA K. Montaña más alta de África"]},

    { letter: "l", answer: ["licantropo", "libertad", "letra"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. Capacidad humana de obrar según la propia voluntad",
    "CON LA L. Cada símbolo del alfabeto de un sistema de escritura"]},

    { letter: "m", answer: ["misantropo", "malaria", "ministerio"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", 
    "CON LA M. Enfermedad parasitaria transmitida por mosquitos que puede producir fiebre, escalofríos y sudoración", "CON LA M. Cada uno de los órganos en los que se divide la administración pública de un país"]},

    { letter: "n", answer: ["necedad", "nigeria", "navidad"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", 
    "CON LA N. País africano que delimita al sur con el golfo de Guinea", "CON LA N. Festividad cristiana que conmemora el nacimiento de Jesucristo"]},

    { letter: "ñ", answer: ["señal", "añoranza", "aliñar"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", 
    "CONTIENE LA Ñ. Sentimiento de anhelo por un momento, situación o acontecimiento pasado", "CONTIENE LA Ñ. Acción de potenciar el sabor de algún producto con especias u otros condimentos"]},

    { letter: "o", answer: ["orco", "obsesion", "ostentoso"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", 
    "CON LA O. Perturbación anímica producida por una idea fija que asalta la mente con persistencia", "CON LA O. Que muestra un lujo y riqueza excesivos"]},

    { letter: "p", answer: ["protoss", "piano", "palacio"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", 
    "CON LA P. Instrumento musical armónico de percusión con una caja de resonancia y un teclado", "CON LA P. Edificio utilizado como residencia por un jefe de Estado"]},

    { letter: "q", answer: ["queso", "quimera", "quito"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", 
    "CON LA Q. Monstruo híbrido de la mitología griega con cabezas de león, de cabra y de serpiente", "CON LA Q. Capital de la República de Ecuador"]},

    { letter: "r", answer: ["raton", "realzar", "robar"], status: 0, question: ["CON LA R. Roedor", "CON LA R. Hacer que una cualidad determinada destaque o sobresalga", 
    "CON LA R. Acción de apoderarse de bienes ajenos de manera fraudulenta mediante la fuerza o la intimidación"]},

    { letter: "s", answer: ["stackoverflow", "similar", "senectud"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", 
    "CON LA S. Que tiene semejanza o analogía con algo", "CON LA S. Término social que hace referencia a las últimas décadas de la vida"]},

    { letter: "t", answer: ["terminator", "teobromina", "troya"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    "CON LA T. Alcaloide de sabor amargo con efecto similar al de la cafeína en el sistema nervioso humano", 
    "CON LA T. Ciudad antigua situada en Turquía famosa por una guerra provocada por un rapto"]},

    { letter: "u", answer: ["unamuno", "usado", "uranio"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    "CON LA U. Que está gastado y deslucido por su utilización", "CON LA U. Elemento químico cuyos isótopos más abundantes son el 235 y 238"]},

    { letter: "v", answer: ["vikingos", "valencia", "vitalidad"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    "CON LA V. Número de electrones que le faltan o debe ceder un elemento químico para completar su último nivel de energía", "CON LA V. Dinamismo o vigor de la persona o cosa que manifiesta cierta actividad o energía"]},

    { letter: "w", answer: ["sandwich", "darwin", "kiwi"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    "CONTIENE LA W. Apellido del naturista inglés que planteó la idea de la evolución biológica", "CONTIENE LA W. Ave pequeña endémica de Nueva Zelanda incapaz de volar"]},

    { letter: "x", answer: ["botox", "toxina", "asfixia"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    "CONTIENE LA X. Sustancia venenosa producida por células de organismos biológicos", "CONTIENE LA X. Suspensión de la respiración por falta de oxígeno u otras causas"]},

    { letter: "y", answer: ["peyote", "abyecto", "influyente"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
    "CONTIENE LA Y. Que es despreciable o vil", "CONTIENE LA Y. Que tiene la capacidad necesaria para influir mucho en algo o alguien"]},

    { letter: "z", answer: ["zen", "zafarrancho", "zoomorfo"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    "CON LA Z. Conjunto de actividades con que se dispone una embarcación para una actividad determinada", "CON LA Z. Que tiene forma de animal"]},
];
var actualIndex = 0;
var actualLetter = questions[actualIndex];
var gameStarted = false;
var score = 0;
var fails = 0;
var answeredQuestions = 0;
var statement = document.getElementById("statement");
var writeBox = document.getElementById("write-box");
var nextButton = document.getElementById("next");
var output = document.getElementById("output");
var scoreBoard = document.getElementById("score-board");
var failsBoard = document.getElementById("fails-board");
var results = document.getElementById("results");
var answer;

function nextIndex() { // pasa al siguiente índice reiniciando la cuenta al llegar al último
    actualIndex++;
    if (actualIndex >= questions.length) {
        actualIndex = 0;
    }
};

function nextWord() { // elige la letra siguiente que no haya sido contestada
    do {
        nextIndex();
        actualLetter = questions[actualIndex];
    } while (actualLetter.status !== 0 && answeredQuestions < questions.length);    
}

function assignAleatoryAnswer() { // elegir una de las posibles definiciones para cada letra
    for (var i = 0; i < questions.length; i++) {
        questions[i].selection = Math.floor(Math.random() * questions[0].answer.length);
    }
}

function startGame() { // reinicia todo para comenzar el juego
    
    scoreBoard.innerHTML = '';
    failsBoard.innerHTML = '';
    results.innerHTML = '';
    output.innerHTML = '';
    
    for (var i = 0; i < questions.length; i++) {
        questions[i].status = 0;
        document.getElementById(questions[i].letter).style.backgroundColor = 'blue';
    }

    if (questions[0].answer.length === 0) {
        statement.innerHTML = '¡Ya no quedan preguntas! Reinicia la página para volver a comenzar';
        nextButton.disabled = true;
        return;
    }

    assignAleatoryAnswer();    
    actualIndex = 0;
    actualLetter = questions[actualIndex];
    statement.innerHTML = actualLetter.question[actualLetter.selection];
    nextButton.innerHTML = 'Enviar';
    writeBox.disabled = false;
    score = 0;
    fails = 0;
    answeredQuestions = 0;
}

function next() { // comienza el juego si no ha comenzado, lo finaliza si ya han sido todas las preguntas contestadas o pasa a la siguiente pregunta
    if (!gameStarted) {
        startGame();
        gameStarted = true;
    } else if (answeredQuestions >= questions.length) {
        endGame();
    } else {
        if (writeBox.value.length > 0) {
            nextWord();
            writeBox.value = '';
            statement.innerHTML = actualLetter.question[actualLetter.selection];
        }
    }
    
    writeBox.focus();
}

function checkAnswer(answer) { // comprueba si la respuesta dada es la correcta o incorrecta, o pasa de palabra. Hace recuento de aciertos, fallos y respuestas contestadas
    answer = answer.toLowerCase();
    if (answer === actualLetter.answer[actualLetter.selection]) {
        score++;
        actualLetter.status = 1;
        document.getElementById(actualLetter.letter).style.backgroundColor = 'green';
        output.innerHTML = '¡Correcto!';
        answeredQuestions++;
    } else if (answer === 'pasapalabra' || answer.length === 0) {
        ;
    } else {
        fails++;
        actualLetter.status = 2;
        document.getElementById(actualLetter.letter).style.backgroundColor = '#dd0000';
        output.innerHTML = '¡Fallaste! \'' + actualLetter.question[actualLetter.selection] + '\'. La respuesta correcta era: ' + 
            actualLetter.answer[actualLetter.selection].charAt(0).toUpperCase() + actualLetter.answer[actualLetter.selection].slice(1);
        actualLetter.wrongAnswer = answer;
        answeredQuestions++;
    }
}

function endGame() { // finaliza el juego, hace recuento, permite volver a comenzar. Elimina las respuestas ya dadas para que el juego se repita distinto
    writeBox.disabled = true;
    statement.innerHTML = '¡Finalizo el juego! Vamos a hacer recuento:';
    scoreBoard.innerHTML = 'Aciertos: ' + score;
    failsBoard.innerHTML = 'Fallos: ' + fails;
    writeBox.value = '';
    output.innerHTML = '';
    gameStarted = false;
    nextButton.innerHTML = 'Comenzar';

    if (score === answeredQuestions) {
        results.innerHTML = '¡FELICIDADES! Eres el ganador. ¿Quieres jugar otra vez?'
    } else {
        results.innerHTML = '¿Quieres jugar otra vez?';
    }

    for (var i = 0; i < questions.length; i++) {
        var actualSelection = questions[i].selection;
        questions[i].answer.splice(actualSelection, 1);
        questions[i].question.splice(actualSelection, 1);
    }
}

function debug() {
    console.log('Respuesta esperada: ' + actualLetter.answer[actualLetter.selection]);
    console.log('Respuestas que quedan: ' + actualLetter.answer);
    console.log(' ');
}

nextButton.onclick = function() {
    if (gameStarted) {
        checkAnswer(writeBox.value);
    }
    next();
};

window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        nextButton.click();
    }
})