var definition;
var answer;
var info;
var playerName;
var secondRow;
var i = 0; //Iteration variable. Used to avoid the for method
var k;
var enterKeys = document.getElementById("ingame");
var questions = [

    [{
            letter: "a",
            answer: "abducir",
            status: 0,
            question: "CON LA A:\nDicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
        },

        {
            letter: "b",
            answer: "bingo",
            status: 0,
            question: "CON LA B:\nJuego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
        },

        {
            letter: "c",
            answer: "churumbel",
            status: 0,
            question: "CON LA C:\nNiño, crío, bebé"
        },

        {
            letter: "d",
            answer: "diarrea",
            status: 0,
            question: "CON LA D:\nAnormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
        },

        {
            letter: "e",
            answer: "ectoplasma",
            status: 0,
            question: "CON LA E:\nGelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
        },

        {
            letter: "f",
            answer: "facil",
            status: 0,
            question: "CON LA F:\nQue no requiere gran esfuerzo, capacidad o dificultad"
        },

        {
            letter: "g",
            answer: "galaxia",
            status: 0,
            question: "CON LA G:\nConjunto enorme de estrellas, polvo interestelar, gases y partículas"
        },

        {
            letter: "h",
            answer: "harakiri",
            status: 0,
            question: "CON LA H:\nSuicidio ritual japonés por desentrañamiento"
        },

        {
            letter: "i",
            answer: "iglesia",
            status: 0,
            question: "CON LA I:\nTemplo cristiano"
        },

        {
            letter: "j",
            answer: "jabali",
            status: 0,
            question: "CON LA J:\nVariedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
        },

        {
            letter: "k",
            answer: "kamikaze",
            status: 0,
            question: "CON LA K:\nPersona que se juega la vida realizando una acción temeraria"
        },

        {
            letter: "l",
            answer: "licantropo",
            status: 0,
            question: "CON LA L:\nHombre lobo"
        },

        {
            letter: "m",
            answer: "misantropo",
            status: 0,
            question: "CON LA M:\nPersona que huye del trato con otras personas o siente gran aversión hacia ellas"
        },

        {
            letter: "n",
            answer: "necedad",
            status: 0,
            question: "CON LA N:\nDemostración de poca inteligencia"
        },

        {
            letter: "ñ",
            answer: "señal",
            status: 0,
            question: "CONTIENE LA Ñ:\nIndicio que permite deducir algo de lo que no se tiene un conocimiento directo."
        },

        {
            letter: "o",
            answer: "orco",
            status: 0,
            question: "CON LA O:\nHumanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
        },

        {
            letter: "p",
            answer: "protoss",
            status: 0,
            question: "CON LA P:\nRaza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
        },

        {
            letter: "q",
            answer: "queso",
            status: 0,
            question: "CON LA Q:\nProducto obtenido por la maduración de la cuajada de la leche"
        },

        {
            letter: "r",
            answer: "rata",
            status: 0,
            question: "CON LA R:\nRoedor"
        },

        {
            letter: "s",
            answer: "stackoverflow",
            status: 0,
            question: "CON LA S:\nComunidad salvadora de todo desarrollador informático"
        },

        {
            letter: "t",
            answer: "terminator",
            status: 0,
            question: "CON LA T:\nPelícula del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
        },

        {
            letter: "u",
            answer: "unamuno",
            status: 0,
            question: "CON LA U:\nEscritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
        },

        {
            letter: "v",
            answer: "vikingos",
            status: 0,
            question: "CON LA V:\nNombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
        },

        {
            letter: "w",
            answer: "sandwich",
            status: 0,
            question: "CONTIENE LA W:\nEmparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
        },

        {
            letter: "x",
            answer: "botox",
            status: 0,
            question: "CONTIENE LA X:\nToxina bacteriana utilizada en cirujía estética"
        },

        {
            letter: "y",
            answer: "peyote",
            status: 0,
            question: "CONTIENE LA Y:\nPequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"
        },

        {
            letter: "z",
            answer: "zen",
            status: 0,
            question: "CON LA Z:\nEscuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
        }
    ],

    [{
            letter: "a",
            answer: "aang",
            status: 0,
            question: "CON LA A:\nNombre del último maestro del aire"
        },

        {
            letter: "b",
            answer: "batman",
            status: 0,
            question: "CON LA B:\n Superhéroe enemigo del Joker"
        },

        {
            letter: "c",
            answer: "cola",
            status: 0,
            question: "CON LA C:\nSe le corta a los saiyans para no convertirse en mono"
        },

        {
            letter: "d",
            answer: "diagonal",
            status: 0,
            question: "CON LA D:\nLínea que une dos ángulos que no están en la misma cara."
        },

        {
            letter: "e",
            answer: "egipcia",
            status: 0,
            question: "CON LA E:\nAntigua cultura que adoraba a los michis"
        },

        {
            letter: "f",
            answer: "f",
            status: 0,
            question: "CON LA F:\nCompleta la frase:\n '...' en el chat"
        },

        {
            letter: "g",
            answer: "goku",
            status: 0,
            question: "CON LA G:\nAquél que murió y resucitó para salvarnos"
        },

        {
            letter: "h",
            answer: "homer",
            status: 0,
            question: "CON LA H:\nPersonaje amarillo más tonto de la televisión"
        },

        {
            letter: "i",
            answer: "inmovil",
            status: 0,
            question: "CON LA I:\nDícese de algo incapaz de moverse"
        },

        {
            letter: "j",
            answer: "jonas",
            status: 0,
            question: "CON LA J:\nNombre del protagonista de la serie Dark"
        },

        {
            letter: "k",
            answer: "katana",
            status: 0,
            question: "CON LA K:\nArma que usa Beatrix Kiddo para acabar con los 88 maniacos"
        },

        {
            letter: "l",
            answer: "l",
            status: 0,
            question: "CON LA L:\nNombre del mejor detective del mundo"
        },

        {
            letter: "m",
            answer: "muero",
            status: 0,
            question: "CON LA M:\nCompleta la frase:\nA ver si me '...'"
        },

        {
            letter: "n",
            answer: "netflix",
            status: 0,
            question: "CON LA N:\nCompleta la frase:\n'...' and chill"
        },

        {
            letter: "ñ",
            answer: "ñoquis",
            status: 0,
            question: "CON LA Ñ:\nTipo de pasta elaborada con patata"
        },

        {
            letter: "o",
            answer: "ostia",
            status: 0,
            question: "CON LA O:\nLo que no te dieron tus padres a tiempo"
        },

        {
            letter: "p",
            answer: "pararrayos",
            status: 0,
            question: "CON LA P:\nAparato que se usa para protegernos de los rayos"
        },

        {
            letter: "q",
            answer: "quentin",
            status: 0,
            question: "CON LA Q:\nNombre del famoso director de Reservoir Dogs"
        },

        {
            letter: "r",
            answer: "rasca",
            status: 0,
            question: "CON LA R:\nGato del show 'infantil' que ven los niños en los simpson"
        },

        {
            letter: "s",
            answer: "saiyan",
            status: 0,
            question: "CON LA S:\nRaza más poderosa del universo capaz de cambiar el color de su pelo"
        },

        {
            letter: "t",
            answer: "tracer",
            status: 0,
            question: "CON LA T:\nPersonaje del videojuego Overwatch capaz de teletransportarse"
        },

        {
            letter: "u",
            answer: "unicornio",
            status: 0,
            question: "CON LA U:\nCaballo mitológico con un cuerno"
        },

        {
            letter: "v",
            answer: "viciar",
            status: 0,
            question: "CON LA V:\nAcción de jugar a videojuegos durante mucho tiempo sin parar"
        },

        {
            letter: "w",
            answer: "wallie",
            status: 0,
            question: "CON LA W:\nRobot espacial recogedor de basura"
        },

        {
            letter: "x",
            answer: "fenix",
            status: 0,
            question: "CONTIENE LA X:\nAnimal mitlógico que resurge de sus cenizas"
        },

        {
            letter: "y",
            answer: "harry",
            status: 0,
            question: "CONTIENE LA Y:\nNombre del niño que sobrevivió a quien no debe ser nombrado"
        },

        {
            letter: "z",
            answer: "zafiro",
            status: 0,
            question: "CON LA Z:\nPiedra preciosa de color azul de extraordinaria dureza"
        }
    ],

    [{
            letter: "a",
            answer: "amarillo",
            status: 0,
            question: "CON LA A:\nColor del chubasquero de Jonas en la serie Dark"
        },

        {
            letter: "b",
            answer: "buffy",
            status: 0,
            question: "CON LA B:\nNombre de la famosa cazavampiros"
        },

        {
            letter: "c",
            answer: "cascada",
            status: 0,
            question: "CON LA C:\nCorriente de agua que cae desde cierta altura a causa de un desnivel en su cauce"
        },

        {
            letter: "d",
            answer: "donnie",
            status: 0,
            question: "CON LA D:\nNombre del personaje de Jake Gyllenhaal en la película que ve visiones de un conejo"
        },

        {
            letter: "e",
            answer: "erwin",
            status: 0,
            question: "CON LA E:\nNombre del comandante de la legión de reconocimiento"
        },

        {
            letter: "f",
            answer: "fahrenheit",
            status: 0,
            question: "CON LA F:\nSistema de temperatura en EEUU y videojuego de la compañía Quantic Dreams"
        },

        {
            letter: "g",
            answer: "gandalf",
            status: 0,
            question: "CON LA G:\nNombre coloquial de Mithrandir"
        },

        {
            letter: "h",
            answer: "hodor",
            status: 0,
            question: "CON LA H:\nAquél que aguanta el portón"
        },

        {
            letter: "i",
            answer: "inanimado",
            status: 0,
            question: "CON LA I:\nQue no tiene vida"
        },

        {
            letter: "j",
            answer: "jaskier",
            status: 0,
            question: "CON LA J:\nNombre del trobador de Gerald de Rivia"
        },

        {
            letter: "k",
            answer: "koala",
            status: 0,
            question: "CON LA K:\nAnimal de movimientos lentos que se cuelga de los árboles, común en Australia"
        },

        {
            letter: "l",
            answer: "ludwig",
            status: 0,
            question: "CON LA L:\nNombre del primer jefe del dlc del videojuego Bloodborne"
        },

        {
            letter: "m",
            answer: "matrioska",
            status: 0,
            question: "CON LA M:\nJuguetes de madera de origen ruso que se colocan uno dentro de otro"
        },

        {
            letter: "n",
            answer: "nagini",
            status: 0,
            question: "CON LA N:\nÚltimo horrocrux de quien no debe ser nombrado"
        },

        {
            letter: "ñ",
            answer: "patraña",
            status: 0,
            question: "CONTIENE LA Ñ:\nMentira o falsedad grande y complicada que se cuenta o se dice a alguien"
        },

        {
            letter: "o",
            answer: "ornitorrinco",
            status: 0,
            question: "CON LA O:\nRaza de Perry el espía"
        },

        {
            letter: "p",
            answer: "primo",
            status: 0,
            question: "CON LA P:\nInsulto y/o familiar"
        },

        {
            letter: "q",
            answer: "quisquilloso",
            status: 0,
            question: "CON LA Q:\nRevista de magos dirigida por Xenophilius Lovegood, padre de Luna Lovegood"
        },

        {
            letter: "r",
            answer: "robocop",
            status: 0,
            question: "CON LA R:\nFamoso robot policía"
        },

        {
            letter: "s",
            answer: "sherezade",
            status: 0,
            question: "CON LA S:\nPrincesa de los cuentos de las mil y una noches"
        },

        {
            letter: "t",
            answer: "tarantula",
            status: 0,
            question: "CON LA T:\nAnimal super valioso en el animal crossing"
        },

        {
            letter: "u",
            answer: "uroboros",
            status: 0,
            question: "CON LA U:\nSimbolo mitológico de un animal reptil que se engulle a sí mismo"
        },

        {
            letter: "v",
            answer: "vendetta",
            status: 0,
            question: "CON LA V:\nCompleta la frase:\nV de '...'"
        },

        {
            letter: "w",
            answer: "waldo",
            status: 0,
            question: "CON LA W:\nNombre del semiorco más fuerte de Gollarion"
        },

        {
            letter: "x",
            answer: "xavier",
            status: 0,
            question: "CON LA X:\nApellido del fundador de la academia X-Men"
        },

        {
            letter: "y",
            answer: "yunque",
            status: 0,
            question: "CON LA Y:\nSoporte de metal o piedra usado en herrería"
        },

        {
            letter: "z",
            answer: "zuko",
            status: 0,
            question: "CON LA Z:\nNombre del príncipe renegado a encontrar al Avatar"
        }
    ]
];
var selectedQuestions = [];
var correctQuestions = 0;
var wrongQuestions = 0;
var ranking = [];
var orderedRanking = [];
var rankingNames = [
    'Robin',
    'Barney',
    'Lilly',
    'Ted',
    'Marshall'
];
var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

//TIME LEFT 
var myVar;
var timeLeft = 210;

function timer() {
    myVar = setInterval(function () {
        countDown();
    }, 1000);
}

function countDown() {
    document.getElementById("count-down").innerHTML = timeLeft + " secs";
    timeLeft--;
    if (timeLeft < 140) document.getElementById("count-down").style.color = "yellow";
    if (timeLeft < 70) document.getElementById("count-down").style.color = "red";
    if (timeLeft <= 0) return endgame();
    document.getElementById("count-down").innerHTML = timeLeft + " secs";
}

//START GAME

function buttonStartGame() {
    //Get Player's name
    playerName = document.getElementById("input-name").value;
    if (playerName === "") playerName = "Jugador";
    document.getElementById("player-name").innerText = playerName;
    //Change display
    document.getElementById("ingame").style.display = "unset";
    document.getElementById("input-name-box").style.display = "none";
    //Change info bar
    info = "Respuestas correctas: " + correctQuestions + "        " + "Respuestas incorrectas: " + wrongQuestions;
    document.getElementById("info").innerHTML = info;
    //Select the questions
    selectQuestions();
    //Show the first definition
    document.getElementById("definition").innerHTML = selectedQuestions[i].question;
    //Start timer
    timer();
    //Add event listeners
    events();
}

//EVENT LISTENERS !!!!NOT WORKING!!!!!
/* function events () {
	document.getElementById('answer').addEventListener('keypress', function(event){
		event.preventDefault();

		if(event.code === 13) {
            //13 is enter
			return buttonAceptar();
		}
		if(event.code === 32) {
            //32 is space
			return buttonPasapalabra();
		}
	})
} */

function selectQuestions() {
    selectedQuestions = [];
    for (let j = 0; j < questions[0].length; j++) {
        k = Math.floor(Math.random() * (3 - 0)) + 0; //Math.floor(Math.random() * (max - min) ) + min
        selectedQuestions.push(questions[k][j]);
    }
}

function buttonAceptar() {
    if (document.getElementById("button-pasapalabra").style.display !== "none") {
        //Check answer
        checkAnswer();
        //buttons display
        changeDisplay();
        //Change info bar
        return infoBar();
    }
    if (document.getElementById("button-pasapalabra").style.display = "none") {
        return buttonNext();
    }
}

function changeDisplay() {
    var visible = document.getElementById("button-pasapalabra");
    if (visible.style.display !== "none") {
        document.getElementById("button-pasapalabra").style.display = "none";
        document.getElementById("button-aceptar").style.display = "none";
        document.getElementById("button-next").style.display = "unset";
    } else if (visible.style.display === "none") {
        document.getElementById("button-pasapalabra").style.display = "unset";
        document.getElementById("button-aceptar").style.display = "unset";
        document.getElementById("button-next").style.display = "none";
    }
}

function infoBar() {
    info = "Respuestas correctas: " + correctQuestions + "        " + "Respuestas incorrectas: " + wrongQuestions;
    document.getElementById("info").innerHTML = info;
}

function checkAnswer() {
    answer = document.getElementById("answer").value;
    selectedQuestions[i].status = 1;
    //Si la respuesta es correcta
    if (answer.toLowerCase() === selectedQuestions[i].answer) {
        //Chancge dot color to green
        document.getElementById(selectedQuestions[i].letter).style.color = "black";
        document.getElementById(selectedQuestions[i].letter).style.backgroundImage = "linear-gradient(135deg, rgb(51, 255, 0), rgb(30, 252, 1))";
        document.getElementById(selectedQuestions[i].letter).style.border = "9px solid rgb(0, 199, 60)";
        document.getElementById(selectedQuestions[i].letter).style.borderStyle = "outset";
        //Correct questions +1
        correctQuestions++;
        //Answer info green and correct
        document.getElementById("result-info").style.color = "rgb(0, 255, 13)";
        document.getElementById("result-info").innerHTML = "¡RESPUESTA CORRECTA!"
    }
    //Si la respuesta es incorrecta
    else if (answer.toLowerCase() !== selectedQuestions[i].answer || answer === "") {
        //Chancge dot color to red
        document.getElementById(selectedQuestions[i].letter).style.color = "white";
        document.getElementById(selectedQuestions[i].letter).style.backgroundImage = "linear-gradient(135deg, rgb(253, 0, 0), rgb(146, 0, 0))";
        document.getElementById(selectedQuestions[i].letter).style.border = "9px solid red";
        document.getElementById(selectedQuestions[i].letter).style.borderStyle = "outset";
        //Wrong questions +1
        wrongQuestions++;
        //Answer info red and incorrect and show the correct answer
        document.getElementById("result-info").style.color = "red";
        document.getElementById("result-info").innerHTML = "RESPUESTA INCORRECTA... LA RESPUESTA CORRECTA ERA: " + selectedQuestions[i].answer;
    }
}

function buttonNext() {
    //Check if we're done
    if (correctQuestions + wrongQuestions === 27) return endgame();
    //If it's the end of the row, start again.
    do {
        i++
        if (i > 26) i = 0;
    } while (selectedQuestions[i].status === 1);
    //Change buttons display
    changeDisplay();
    //Change definition display
    document.getElementById("definition").innerHTML = selectedQuestions[i].question;
    //Hide answer info (if its correct or incorrect)
    document.getElementById("result-info").innerHTML = "";
    //Empty the answer bar
    document.getElementById("answer").value = "";
}

function buttonPasapalabra() {
    if (document.getElementById("button-pasapalabra").style.display !== "none") {
        //Change display
        changeDisplay();
        //Answer info pasapalabra
        document.getElementById("result-info").style.color = "white";
        document.getElementById("result-info").innerHTML = "PASAPALABRA..."
    }
}

function endgame() {
    document.getElementById("ingame").style.display = "none";
    document.getElementById("endgame").style.display = "unset";
    clearInterval(myVar);
}

function seeRanking() {
    var firstTime = true;
    if (document.getElementById("podium").style.display !== "flex" && firstTime) {
        document.getElementById("podium").style.display = "flex";
        initRanking();
        orderRanking();
    } else if (document.getElementById("podium").style.display !== "flex" && !firstTime) {
        document.getElementById("podium").style.display = "flex";
    } else {
        document.getElementById("podium").style.display = "none";
    }
}

function initRanking() {
    rankingNames.push(playerName);
    for (let ñ = 0; ñ < rankingNames.length; ñ++) { //Initialize ranking
        if (rankingNames[ñ] === playerName) {
            ranking.push(rankingFactory(rankingNames[ñ], correctQuestions));
        } else {
            ranking.push(rankingFactory(rankingNames[ñ], Math.floor(Math.random() * (27 - 0)) + 0));

        }
    }
}

function rankingFactory(name, points) {
    return {
        name: name,
        points: points,
    }
}

function orderRanking() {
    for (let j = 0; j < ranking.length + orderedRanking.length; j++) {
        var maxPoints = 0;
        var maxRanking;
        for (let ñ = 0; ñ < ranking.length; ñ++) {
            if (ranking[ñ].points >= maxPoints) {
                maxPoints = ranking[ñ].points;
                maxRanking = ranking[ñ];
            }
        }
        orderedRanking.push(maxRanking);
        ranking.splice(ranking.indexOf(maxRanking), 1);
    }
    for (let j = 0; j < orderedRanking.length; j++) {
        document.getElementById(j).innerHTML = orderedRanking[j].name + "              " + orderedRanking[j].points + " puntos"
    }
}

function playAgain() {
    //Reset
    reset();
    //Change Display
    document.getElementById("endgame").style.display = "none";
    document.getElementById("input-name-box").style.display = "unset";

}

function reset() {
    correctQuestions = 0;
    wrongQuestions = 0;
    secondRow = false;
    ranking = [];
    orderedRanking = [];
    i = 0;
    k = 0;
    document.getElementById("result-info").innerHTML = "";
    document.getElementById("result-info").style.value = "white";
    timeLeft = 210;
    document.getElementById("count-down").style.color = "white";

    var x = document.getElementsByClassName("dot");
    for (let j = 0; j < 27; j++) {
        x[j].style.color = "white";
        x[j].style.backgroundImage = "linear-gradient(135deg, rgb(219, 219, 219), rgb(56, 56, 56))";
        x[j].style.border = "9px solid blue";
    }
}