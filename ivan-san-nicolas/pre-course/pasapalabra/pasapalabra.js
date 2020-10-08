function pasapalabra() {
    var player = {
        name: '',
        correct: [],
        points: 0,
        completedQuestions: false
    }
    var questions = [           //Status 0 means unanswered, and 1 means answered. Nothing to do with correct and incorrect.

        [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A:\nDicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

        { letter: "b", answer: "bingo", status: 0, question: "CON LA B:\nJuego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C:\nNiño, crío, bebé" },

        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D:\nAnormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E:\nGelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

        { letter: "f", answer: "facil", status: 0, question: "CON LA F:\nQue no requiere gran esfuerzo, capacidad o dificultad" },

        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G:\nConjunto enorme de estrellas, polvo interestelar, gases y partículas" },

        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H:\nSuicidio ritual japonés por desentrañamiento" },

        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I:\nTemplo cristiano" },

        { letter: "j", answer: "jabali", status: 0, question: "CON LA J:\nVariedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K:\nPersona que se juega la vida realizando una acción temeraria" },

        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L:\nHombre lobo" },

        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M:\nPersona que huye del trato con otras personas o siente gran aversión hacia ellas" },

        { letter: "n", answer: "necedad", status: 0, question: "CON LA N:\nDemostración de poca inteligencia" },

        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ:\nIndicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

        { letter: "o", answer: "orco", status: 0, question: "CON LA O:\nHumanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

        { letter: "p", answer: "protoss", status: 0, question: "CON LA P:\nRaza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

        { letter: "q", answer: "queso", status: 0, question: "CON LA Q:\nProducto obtenido por la maduración de la cuajada de la leche" },

        { letter: "r", answer: "raton", status: 0, question: "CON LA R:\nRoedor" },

        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S:\nComunidad salvadora de todo desarrollador informático" },

        { letter: "t", answer: "terminator", status: 0, question: "CON LA T:\nPelícula del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U:\nEscritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V:\nNombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W:\nEmparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X:\nToxina bacteriana utilizada en cirujía estética" },

        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y:\nPequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos" },

        { letter: "z", answer: "zen", status: 0, question: "CON LA Z:\nEscuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }],

        [{ letter: "a", answer: "aang", status: 0, question: "CON LA A:\nNombre del último maestro del aire" },

        { letter: "b", answer: "batman", status: 0, question: "CON LA B:\n Superhéroe enemigo del Joker" },

        { letter: "c", answer: "cola", status: 0, question: "CON LA C:\nSe le corta a los saiyans para no convertirse en mono" },

        { letter: "d", answer: "diagonal", status: 0, question: "CON LA D:\nLínea que une dos ángulos que no están en la misma cara." },

        { letter: "e", answer: "egipcia", status: 0, question: "CON LA E:\nAntigua cultura que adoraba a los michis" },

        { letter: "f", answer: "f", status: 0, question: "CON LA F:\nCompleta la frase:\n '...' en el chat" },

        { letter: "g", answer: "goku", status: 0, question: "CON LA G:\nAquél que murió y resucitó para salvarnos" },

        { letter: "h", answer: "homer", status: 0, question: "CON LA H:\nPersonaje amarillo más tonto de la televisión" },

        { letter: "i", answer: "inmovil", status: 0, question: "CON LA I:\nDícese de algo incapaz de moverse" },

        { letter: "j", answer: "jonas", status: 0, question: "CON LA J:\nNombre del protagonista de la serie Dark" },

        { letter: "k", answer: "katana", status: 0, question: "CON LA K:\nArma que usa Beatrix Kiddo para acabar con los 88 maniacos" },

        { letter: "l", answer: "l", status: 0, question: "CON LA L:\nNombre del mejor detective del mundo" },

        { letter: "m", answer: "muero", status: 0, question: "CON LA M:\nCompleta la frase:\nA ver si me '...'" },

        { letter: "n", answer: "netflix", status: 0, question: "CON LA N:\nCompleta la frase:\n'...' and chill" },

        { letter: "ñ", answer: "ñoquis", status: 0, question: "CON LA Ñ:\nTipo de pasta elaborada con patata" },

        { letter: "o", answer: "ostia", status: 0, question: "CON LA O:\nLo que no te dieron tus padres a tiempo" },

        { letter: "p", answer: "pararrayos", status: 0, question: "CON LA P:\nAparato que se usa para protegernos de los rayos" },

        { letter: "q", answer: "quentin", status: 0, question: "CON LA Q:\nNombre del famoso director de Reservoir Dogs" },

        { letter: "r", answer: "rasca", status: 0, question: "CON LA R:\nGato del show 'infantil' que ven los niños en los simpson" },

        { letter: "s", answer: "saiyan", status: 0, question: "CON LA S:\nRaza más poderosa del universo capaz de cambiar el color de su pelo" },

        { letter: "t", answer: "tracer", status: 0, question: "CON LA T:\nPersonaje del videojuego Overwatch capaz de teletransportarse" },

        { letter: "u", answer: "unicornio", status: 0, question: "CON LA U:\nCaballo mitológico con un cuerno" },

        { letter: "v", answer: "viciar", status: 0, question: "CON LA V:\nAcción de jugar a videojuegos durante mucho tiempo sin parar" },

        { letter: "w", answer: "wallie", status: 0, question: "CON LA W:\nRobot espacial recogedor de basura" },

        { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X:\nAnimal mitlógico que resurge de sus cenizas" },

        { letter: "y", answer: "harry", status: 0, question: "CONTIENE LA Y:\nNombre del niño que sobrevivió a quien no debe ser nombrado" },

        { letter: "z", answer: "zafiro", status: 0, question: "CON LA Z:\nPiedra preciosa de color azul de extraordinaria dureza" }],

        [{ letter: "a", answer: "amarillo", status: 0, question: "CON LA A:\nColor del chubasquero de Jonas en la serie Dark" },

        { letter: "b", answer: "buffy", status: 0, question: "CON LA B:\nNombre de la famosa cazavampiros" },

        { letter: "c", answer: "cascada", status: 0, question: "CON LA C:\nCorriente de agua que cae desde cierta altura a causa de un desnivel en su cauce" },

        { letter: "d", answer: "donnie", status: 0, question: "CON LA D:\nNombre del personaje de Jake Gyllenhaal en la película que ve visiones de un conejo" },

        { letter: "e", answer: "erwin", status: 0, question: "CON LA E:\nNombre del comandante de la legión de reconocimiento" },

        { letter: "f", answer: "fahrenheit", status: 0, question: "CON LA F:\nSistema de temperatura en EEUU y videojuego de la compañía Quantic Dreams" },

        { letter: "g", answer: "gandalf", status: 0, question: "CON LA G:\nNombre coloquial de Mithrandir" },

        { letter: "h", answer: "hodor", status: 0, question: "CON LA H:\nAquél que aguanta el portón" },

        { letter: "i", answer: "inanimado", status: 0, question: "CON LA I:\nQue no tiene vida" },

        { letter: "j", answer: "jaskier", status: 0, question: "CON LA J:\nNombre del trobador de Gerald de Rivia" },

        { letter: "k", answer: "koala", status: 0, question: "CON LA K:\nAnimal de movimientos lentos que se cuelga de los árboles, común en Australia" },

        { letter: "l", answer: "ludwig", status: 0, question: "CON LA L:\nNombre del primer jefe del dlc del videojuego Bloodborne" },

        { letter: "m", answer: "matrioska", status: 0, question: "CON LA M:\nJuguetes de madera de origen ruso que se colocan uno dentro de otro" },

        { letter: "n", answer: "nagini", status: 0, question: "CON LA N:\nÚltimo horrocrux de quien no debe ser nombrado" },

        { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ:\nMentira o falsedad grande y complicada que se cuenta o se dice a alguien" },

        { letter: "o", answer: "ornitorrinco", status: 0, question: "CON LA O:\nRaza de Perry el espía" },

        { letter: "p", answer: "primo", status: 0, question: "CON LA P:\nInsulto y/o familiar" },

        { letter: "q", answer: "quisquilloso", status: 0, question: "CON LA Q:\nRevista de magos dirigida por Xenophilius Lovegood, padre de Luna Lovegood" },

        { letter: "r", answer: "robocop", status: 0, question: "CON LA R:\nFamoso robot policía" },

        { letter: "s", answer: "sherezade", status: 0, question: "CON LA S:\nPrincesa de los cuentos de las mil y una noches" },

        { letter: "t", answer: "tarantula", status: 0, question: "CON LA T:\nAnimal super valioso en el animal crossing" },

        { letter: "u", answer: "uroboros", status: 0, question: "CON LA U:\nSimbolo de un animal reptil que se engulle a sí mismo" },

        { letter: "v", answer: "vendetta", status: 0, question: "CON LA V:\nCompleta la frase:\nV de '...'" },

        { letter: "w", answer: "waldo", status: 0, question: "CON LA W:\nNombre del semiorco más fuerte de Gollarion" },

        { letter: "x", answer: "xavier", status: 0, question: "CON LA X:\nApellido del fundador de la academia X-Men" },

        { letter: "y", answer: "yunque", status: 0, question: "CONTIENE LA Y:\nSoporte de metal o piedra usado en herrería" },

        { letter: "z", answer: "zuko", status: 0, question: "CON LA Z:\nNombre del príncipe renegado a encontrar al Avatar" }]
    ];
    var rankingNames = [
        'Robin',
        'Barney',
        'Lilly',
        'Ted',
        'Marshall',
    ];
    var ranking = [];
    var unansweredQuestions = [];
    var questionAnswer;
    var newNum;
    function askName() {
        clear();
        player.name = window.prompt('Insert your name, please.');
        if (player.name === '') {
            alert('Please, enter a name.');
            return askName();
        }
        else if (player.name !== '' && player.name !== undefined && player.name !== null) {
            alert('Welcome ' + player.name + '!');
            alert('Please, remember to not use accent marks or special characters!');
            initRanking();
            return roulette();
        }
        else return alert('Bye!');
    }
    function roulette() {
        for (var i = 0; i < questions[0].length; i++) {
            newNum = Math.floor(Math.random() * (3 - 0)) + 0;       //Math.floor(Math.random() * (max - min) ) + min
            if (questions[newNum][i].status === 0) {          //If the questioin isn't answered
                questionAnswer = window.prompt(questions[newNum][i].question);
                if (questionAnswer !== null) {      //If isn't null
                    if (questionAnswer.toLowerCase() === questions[newNum][i].answer) {      //If the answer is correct
                        questions[newNum][i].status = 1;    //Put answered
                        player.correct.push(questions[newNum][i].letter);   //add to the array of correct answers
                        alert('Correct!');
                    }
                    else if (questionAnswer.toLowerCase() === 'pasapalabra' || questionAnswer.toLowerCase() === '') {   //If pasapalabra, cancel, or empty answer, all is pasapalabra
                        alert('Pasapalabra');
                        unansweredQuestions.push(questions[newNum][i]);
                    }
                    else if (questionAnswer.toLowerCase() === 'end') {
                        alert('Finishing the game...');
                        return endGame();
                    }
                    else if (questionAnswer.toLowerCase() !== questions[newNum][i].answer) {
                        alert('Incorrect...\nThe answer was: ' + questions[newNum][i].answer);
                        questions[newNum][i].status = 1;
                    }
                }
                else {
                    alert('Pasapalabra');
                    unansweredQuestions.push(questions[newNum][i]);
                }
            }
        }
        checkRoulette();
    }
    function checkRoulette() {
        if (unansweredQuestions.length > 0) {
            alert('Starting a new row...');
            return rouletteUnanswered();
        }
        player.completedQuestions = true;
        return endGame();
    }
    function rouletteUnanswered() {
        for (var i = 0; i < unansweredQuestions.length; i++) {
            if (unansweredQuestions[i].status === 0) {          //If the questioin isn't answered
                questionAnswer = window.prompt(unansweredQuestions[i].question);
                if (questionAnswer !== null) {      //If isn't null
                    if (questionAnswer.toLowerCase() === unansweredQuestions[i].answer) {      //If the answer is correct
                        unansweredQuestions[i].status = 1;    //Put answered
                        player.correct.push(unansweredQuestions[i].letter);   //add to the array of correct answers
                        alert('Correct!');
                    }
                    else if (questionAnswer.toLowerCase() === 'pasapalabra' || questionAnswer.toLowerCase() === '') {   //If pasapalabra, cancel, or empty answer, all is pasapalabra
                        alert('Pasapalabra');
                    }
                    else if (questionAnswer.toLowerCase() === 'end') {
                        alert('Finishing the game...');
                        return endGame();
                    }
                    else if (questionAnswer.toLowerCase() !== unansweredQuestions[i].answer) {
                        alert('Incorrect...\nThe answer was: ' + unansweredQuestions[i].answer);
                        unansweredQuestions[i].status = 1;
                    }
                }
                else {
                    alert('Pasapalabra');
                }
            }
        }
        return checkUnansweredRoulette();
    }
    function checkUnansweredRoulette() {
        for (var i = 0; i < unansweredQuestions.length; i++) {
            if (unansweredQuestions[i].status === 0) {
                alert('Starting new row');
                return rouletteUnanswered();
            }
        }
        player.completedQuestions = true;
        return endGame();
    }
    function endGame() {
        if (player.completedQuestions === true) {
            player.points = player.correct.length;
            ranking.push(player);
            ranking.sort(function (a, b) {
                if (a.points < b.points) {
                    return 1;
                }
                if (a.points > b.points) {
                    return -1;
                }
                return 0;
            });
            for (var i in ranking) {
                console.log(ranking[i].name + ':' + ' ' + ranking[i].points + ' right-answered words');
            }
        }
        console.log('Congrats! You answered ' + player.correct.length + ' questions right');
        return alert('Bye!');
    }
    function rankingFactory(name, points,) {
        return {
            name: name,
            points: points,
        }
    }
    function initRanking() {
        for (var i = 0; i < rankingNames.length; i++) {   //Initialize ranking
            ranking.push(rankingFactory(rankingNames[i], Math.floor(Math.random() * (27 - 0)) + 0));
        }
    }
    askName();
}
pasapalabra();