function pasapalabra() {

    let name = '';

    let start = window.confirm('Desea comenzar el juego?');

    while(start) {

        let counterPoints = 0;
        name = getPlayerName(); 
        if(name === null) {
            return window.alert('Ha decidido abandonar la partida.') 
        }

        let actualPlayer = new Player(name)
        
        let play = true;
        let rosco = generateRosco();
        let exit = false;

        window.alert('Si desea responder en la próxima ronda, ingrese: pasapalabra, si no sabe la respuesta, ingrese una palabra cualquiera. Si desea abandonar el juego, ingrese END.');

        while(play) {

            for (e of rosco) {
                
                if(e.status === 'wrong' || e.status === 'right') {

                    continue;
                }

                let answer = window.prompt(e.question);

                while(answer === null || answer.length === 0 ) {
                    window.alert('No ha ingresado una respuesta válida, si desea abandonar el juego, ingrese END. Si quiere responder en la proxima ronda, escriba pasapalabra. Si no sabe la respuesta, escriba una palabra cuaquiera.');
                    answer = window.prompt(e.question);
                } 

                
                if(checkAnswer(answer, e.answer)) {

                    e.status = 'right';
                    counterPoints++;
                    window.alert('Correcto!');

                }else if (answer.toLowerCase() === 'pasapalabra') {   
                 
                    continue;

                }else if(answer.toLowerCase() === 'end') {

                    exit = true;
                    break;

                }else {

                    window.alert('Incorrecto!');
                    e.status = 'wrong';

                }

            }
            if(exit) {

                
                cleanStatus(rosco);
                window.alert('Ha decidido salir del juego');
                return 'Adios';
            }

            let pending = pendingQuestions(rosco);

            if( pending.length > 0){ 

                window.alert('Tiene '+ pending.length + ' preguntas sin responder');
                showPending(pending);
                play = window.confirm('Si desea continuar seleccione Aceptar, si desea terminar la partida seleccione Cancelar, (no se registraran sus puntos si no finaliza la partida)');
                

            }else {

                window.alert('Ha terminado la partida');
                actualPlayer.points = counterPoints;
                playersArray.push(actualPlayer);

                window.alert('Su puntuación es de: ' + counterPoints + ' puntos.');

                console.log('Respuestas de preguntas incorrectas:')
                showAnswersIncorrects(answersIncorrects(rosco)); 

                console.log('Ranking:')
                showScorePlayer(playersMaxMinScore());

                play = false;

                cleanStatus(rosco);
                

            }

        }
        start = window.confirm('Desea comenzar una nueva partida?');

    }
    
    window.alert('Ha decidido abandonar el juego');
    return 'Adios!';

}

function answersIncorrects(rosco) {

    let answerWrong = [];

    for (e of rosco) {
        if(e.status === 'wrong') {

            answerWrong.push(e);
        }
    }
    return answerWrong;

}

function showAnswersIncorrects(answerInc) {

    for (e of answerInc) {

        console.log(e.question + ': '+ e.answer);

    }
}



function showPending(letters) {

    console.log('Las letras pendientes son: '+ letters.join(', '));

}

function pendingQuestions(questionsList) { 

    let pendingLetters = []; 
    

    for (e of questionsList) {

        if(e.status === 0) {
            
            pendingLetters.push(e.letter);
        }

    }
    return pendingLetters;

}

function checkAnswer(answerPlayer, answer) {
    
    if(answerPlayer.toLowerCase() === answer.toLowerCase()) {

        return true;

    } else {

        return false;
    }
}


function randomChoice(arr) {

    return arr[Math.floor(arr.length * Math.random())];
    
}

function generateRosco() {
    
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let rosco = [];
    

    for (e of letters) {

        let groupedQuestions = [];

        for (q of questions) {

            if(e === q.letter) {

                groupedQuestions.push(q);
            }

        }
        rosco.push(randomChoice(groupedQuestions));
    }

    return rosco;

}

function getPlayerName(){

    let name = null;
    let askAgain = true;
    
    while(askAgain) {
        name = window.prompt('Ingrese su nombre')

        if (name === null || name.length === 0 || isANumber(Number(name))) {
            name = null;
            askAgain = window.confirm('No ha ingresado un nombre válido. Si desea continuar, seleccione Aceptar e ingrese su nombre, si desea salir, seleccione Cancelar.')
        }
        else {
            askAgain = false;
        }
    }
    return name;
}


function cleanStatus(rosco) {

    for (e of rosco) {

        e.status = 0;
    }

}


function showScorePlayer(players) {

    for (e of players) {

        console.log(e.name + ' '+ e.points + ' puntos.');

    }

}


function isANumber(n) {

    let esUnNumero = false;
    
        if(typeof n === 'number' && !isNaN(n)){

            esUnNumero = true; 

        }else {

            return false;
        }
    
    return esUnNumero;
}


function Player(name){

    this.name = name,
    this.points = 0
}



var playersArray = [];

var playersMaxMinScore = () => playersArray.slice().sort(function(a,b){return b.points - a.points;});


var questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, 

    { letter: "a", answer: "activision", status: 0, question: "CON LA A. Empresa distribuidora de la saga Call of Duty" },
        
    { letter: "b", answer: "black ops", status: 0, question: "CON LA B. Título en el que la historia del juego discurre durante la Guerra Fría (mayoritariamente durante la Guerra de Vietnam)" },
    
    { letter: "c", answer: "campero", status: 0, question: "CON LA C. Jugador cansino que no se mueve de su posición inicial para matar por sorpresa" },
    
    { letter: "d", answer: "dominio", status: 0, question: "CON LA D. Juego en el que debes controlar tres objetivos marcados por banderas" },
    
    { letter: "e", answer: "eutanasia", status: 0, question: "CON LA E. Medalla que se obtiene al disparar a un jugador provocando que se suicide" },
    
    { letter: "f", answer: "fringe", status: 0, question: "CON LA F. Mapa de Black Ops 3 ambientado en una zona rural de California" },
    
    { letter: "g", answer: "granada", status: 0, question: "CON LA G. Objeto explosivo que se lanza para matar a uno o varios objetivos" },
    
    { letter: "h", answer: "highrise", status: 0, question: "CON LA H. Mapa de Modern Warfare 2 done muchos Youtubers aprendieron a hacer 'trick-shots'" },
    
    { letter: "i", answer: "instruccion", status: 0, question: "CON LA I. Modo de juego para noobs" },
    
    { letter: "j", answer: "hijacked", status: 0, question: "CONTIENE LA J. Mapa mítico de Black Ops 2 ambientado en un barco" },
    
    { letter: "k", answer: "killcam", status: 0, question: "CON LA K. Repetición donde se ve la última baja" },
    
    { letter: "l", answer: "lodestar", status: 0, question: "CON LA L. Racha de puntos de Black Ops 2 con la que se lanzan misiles mediante una panel de control" },
    
    { letter: "m", answer: "manowar", status: 0, question: "CON LA M. Arma semi-automática de Black Ops 3" },
    
    { letter: "n", answer: "noscope", status: 0, question: "CON LA N. Nombre que recibe cuando disparas sin apuntar con un arma de francotirador" },
    
    { letter: "ñ", answer: "niño rata", status: 0, question: "CONTIENE LA Ñ. Dícese de un jugador de corta edad que tras ser abatido grita como un roedor" },
    
    { letter: "o", answer: "overflow", status: 0, question: "CON LA O. Mapa de Black Ops 2 ambientado en una ciudad" },
    
    { letter: "p", answer: "pakistan", status: 0, question: "CON LA P. Uno de los dos lugares donde se ambientan la mayoría de mapas de Call of Duty" },
    
    { letter: "q", answer: "posquemador", status: 0, question: "CONTIENE LA Q. Ventaja que te permite tener más duración de salto en Black Ops 3" },
    
    { letter: "r", answer: "rushear", status: 0, question: "CON LA R. Palabra que se utiliza para describir la acción de recorrer el mapa por un lateral de forma temeraria" },
    
    { letter: "s", answer: "supersalto", status: 0, question: "CON LA S. En Advanced Warfare hay una innovación que es..." },
    
    { letter: "t", answer: "turbine", status: 0, question: "CON LA T. Mapa de Black Ops 2 en el que hay un avión accidentado y que a muy poca gente le gusta jugar" },
    
    { letter: "u", answer: "unidad canina", status: 0, question: "CON LA U. Racha de Black Ops 2 que para obtenerla necesitas 1800 puntos y muchas correas para perros" },
    
    { letter: "v", answer: "vtol", status: 0, question: "CON LA V. Racha de Black Ops 2 que controlas desde un panel mediante la cual puedes disprar misiles y balas" },
    
    { letter: "w", answer: "warthog", status: 0, question: "CONTIENE LA W. Racha de puntos de Black Ops 2 controlada por la IA que hace una masacre por oleadas" },
    
    { letter: "x", answer: "xp", status: 0, question: "CON LA X. Necesario para subir de nivel" },
     
    { letter: "y", answer: "infinity ward", status: 0, question: "CONTIENE LA Y. Compañía que ha sacado el último Call of Duty" },
    
    { letter: "z", answer: "zombies", status: 0, question: "CON LA Z. Modo de juego donde no te enfrentas a personas" },

    { letter: "a", answer: "alpinismo", status: 0, question: "CON LA A. Deporte que consiste en la ascensión a las altas montañas." },
        
    { letter: "b", answer: "boda", status: 0, question: "CON LA B. Ceremonia mediante la cual se unen en un matrimonio dos personas y fiesta con la que se celebra." },
    
    { letter: "c", answer: "crecida", status: 0, question: "CON LA C. Aumento del caudal de los ríos y arroyos. " },
    
    { letter: "d", answer: "dublin", status: 0, question: "CON LA D. Ciudad capital de Irlanda." },
    
    { letter: "e", answer: "espinilla", status: 0, question: "CON LA E. Grano con un puntito negro que se forma en la piel de la cara." },
    
    { letter: "f", answer: "frontera", status: 0, question: "CON LA F. Línea que separa un Estado de otro." },
    
    { letter: "g", answer: "genero", status: 0, question: "CON LA G. Cualquier cosa que tomada en conjunto es objeto de comercio." },
    
    { letter: "h", answer: "hoguera", status: 0, question: "CON LA H. Fuego hecho al aire libre hecho con materias combustibles que levanta muchas llamas. " },
    
    { letter: "i", answer: "incubadora", status: 0, question: "CON LA I. Recinto en el que se tiene a los niños prematuros hasta que alcanza la madurez suficiente para poder vivir fuera de él. " },
    
    { letter: "j", answer: "jaruzelski", status: 0, question: "CON LA J. Apellido del político considerado el último líder de la época socialista en Polonia, nombrado jefe del Gobierno en 1981" },
    
    { letter: "k", answer: "koala", status: 0, question: "CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos" },
    
    { letter: "l", answer: "laurel", status: 0, question: "CON LA L. Árbol siempre verde cuyas ramas, formando una corona, se otorga como símbolo de gloria y fama." },
    
    { letter: "m", answer: "mapamundi", status: 0, question: "CON LA M. Representación total de la Tierra en dos círculos o elipses correspondientes a dos hemisferios." },
    
    { letter: "n", answer: "NASA", status: 0, question: "CON LA N. Organismo aeroespacial estadounidense constituido en el año 1958 como sucesor de la NACA." },
    
    { letter: "ñ", answer: "compañia", status: 0, question: "CONTIENE LA Ñ. Agrupación de actores, cantantes o bailarines unidos para representar espectáculos escénicos." },
    
    { letter: "o", answer: "omega", status: 0, question: "CON LA O. Vigésimo cuarta letra del alfabeto griego que corresponde a la ´o´larga del latino." },
    
    { letter: "p", answer: "pantufla", status: 0, question: "CON LA P. Zapatilla sin talón." },
    
    { letter: "q", answer: "laqueario", status: 0, question: "CONTIENE LA Q. Gladiador armado de lazo y puñal." },
    
    { letter: "r", answer: "rampa", status: 0, question: "CON LA R. Plano inclinado dispuesto para subir y bajar por él." },
    
    { letter: "s", answer: "serrano", status: 0, question: "CON LA S. Se dice del jamón que está curado." },
    
    { letter: "t", answer: "tomate", status: 0, question: "CON LA T. Coloquialmente, roto o agujero hecho en una prenda de punto como una media o un calcetín." },
    
    { letter: "u", answer: "urografía", status: 0, question: "CON LA U. Radiografía de las vías urinarias." },
    
    { letter: "v", answer: "valladolid", status: 0, question: "CON LA V. Ciudad más poblada de Castilla y León." },
    
    { letter: "w", answer: "wagneriano", status: 0, question: "CON LA W. Perteneciente o relativo a Richard Wagner, músico alemán, o a su obra." },
    
    { letter: "x", answer: "kleenex", status: 0, question: "CONTIENE X. Marca registrada que ha pasado a ser la denominación común del pañuelo de papel." },
     
    { letter: "y", answer: "anteayer", status: 0, question: "CONTIENE LA Y. En el día que precede inmediatamente al de ayer." },
    
    { letter: "z", answer: "zarate", status: 0, question: "CON LA Z. Apellido del escritor colombiano, premio Planeta en 1972 con la obra 'La cárcel'." } ]