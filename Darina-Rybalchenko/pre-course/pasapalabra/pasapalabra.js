let questions = [
    { letter: "a", answer: ["abducir", "ahorrar", "aceite"], status: 0, question: ["CON LA A. Apoderarse de alguien", "CON LA A. Guardar dinero como previsión para necesidades futuras", "CON LA A. Liquido graso de color verde amarillento que se obtiene prensando las aceitunas."] },
    { letter: "b", answer: ["bingo", "beca", "brillante"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Subvención para realizar estudios o investigaciones", "CON LA B. Admirable o sobresaliente en su línea."] },
    { letter: "c", answer: ["churumbel", "chorizo", "culpar"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Coloquialmente, ratero, ladronzuelo.", "CON LA C. Atribuir o echar la culpa a alguien"] },
    { letter: "d", answer: ["diarrea", "deportar", "devoto"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D: Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí por razones políticas o como castigo.", "CON LA D. Dedicación con fervor a obras de piedad y religión"] },
    { letter: "e", answer: ["ectoplasma", "envoltorio", "entera"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Capa exterior que cubre natural o artificialmente una cosa", "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas"] },
    { letter: "f", answer: ["facil", "forestal", "frenar"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos", "CON LA F.Moderar o parar el movimiento de algo"] },
    { letter: "g", answer: ["galaxia", "grupo", "guitarra"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Pluralidad de seres o cosas que forman un conjunto", "CON LA G. Instrumento musical de cuerda"] },
    { letter: "h", answer: ["harakiri", "hombrera", "huelga"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros", "CON LA H. Interrupción colectiva de la actividad laboral por parte de los trabajadores con el fin de reivindicar ciertas condiciones o manifestar una protesta"] },
    { letter: "i", answer: ["iglesia", "indignar", "intuir"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Irritar, enfadar vehementemente a alguien", "CON LA I.Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista"] },
    { letter: "j", answer: ["jabali", "jornada", "jubilado"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Tiempo de duración del trabajo diario", "CON LA J. Persona que ha dejado de trabajar y percibe una pensión"] },
    { letter: "k", answer: ["kamikaze", "koala", "karma"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos", "CON LA K. En algunas religiones de la India, energía derivada de los actos de un individuo durante su vida, que condiciona cada una de sus sucesivas reencarnaciones, hasta que alcanza la perfección."] },
    { letter: "l", answer: ["licantropo", "liberar", "laberinto"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. Hacer que alguien o algo quede libre, eximir a alguien de una obligación", "CON LA L. Lugar formado artificiosamente por calles y encrucijadas, para confundir a quien se adentre en él, de modo que no pueda acertar con la salida"] },
    { letter: "m", answer: ["misantropo", "menor", "museo"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Se dice de una persona que aún no ha cumplido la mayoría de edad", "CON LA M. Lugar en que se conservan y exponen colecciones de objetos artísticos, científicos, etc."] },
    { letter: "n", answer: ["necedad", "nacionalidad", "nota"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Estado propio de la persona nacida o naturalizada en una nación", "CON LA N. Marca o señal que se pone en algo para reconocerlo o para darlo a conocer."] },
    { letter: "ñ", answer: ["señal", "soñar", "patraña"], status: 0, question: ["CONTIENE LA \361. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE Ñ. Representarse en la fantasía imágenes o sucesos mientras se duerme", "CONTIENE Ñ. Mentira o noticia fabulosa de pura invención"] },
    { letter: "o", answer: ["orco", "ostra", "okupa"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Concha de la madreperla", "CON LA O. Dicho de un movimiento radical: Que propugna la ocupación de viviendas o locales deshabitados."] },
    { letter: "p", answer: ["protoss", "promover", "prioridad"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P.  Iniciar o impulsar una idea o proyecto procurando su logro", "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden"] },
    { letter: "q", answer: ["queso", "quorum", "quiste"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Proporción de votos favorables para que haya acuerdo", "CON LA Q. Vejiga membranosa que se desarrolla anormalmente en diferentes regiones del cuerpo y que contiene líquido o materias alteradas."] },
    { letter: "r", answer: ["raton", "reciclar", "reikiavik"], status: 0, question: ["CON LA R. Roedor", " CON LA R. Someter material usado a un proceso para que se pueda volver a utilizar", "CON LA R. Es la capital y ciudad más poblada de Islandia."] },
    { letter: "s", answer: ["stackoverflow", "samba", "suprimir"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario", "CON LA S. Hacer cesar, hacer desaparecer, anular"] },
    { letter: "t", answer: ["terminator", "tragaperras", "test"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas", "CON LA T. Prueba destinada a evaluar conocimientos o aptitudes, en la cual hay que elegir la respuesta correcta entre varias opciones previamente fijadas."] },
    { letter: "u", answer: ["unamuno", "urgencia", "usurpar"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U.  Necesidad o falta apremiante, inmediata obligación de hacer algo", "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios"] },
    { letter: "v", answer: ["vikingos", "vivienda", "vector"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas", "CON LA V.  Agente que transporta algo de un lugar a otro"] },
    { letter: "w", answer: ["sandwich", "whisky", "windows"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Licor alcóholico que se obtiene del destilado del grano de algunas plantas", "CON LA W. Un sistema operativo para computadoras"] },
    { letter: "x", answer: ["botox", "exaltar", "anexionar"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE X. Avivar o aumentar un sentimiento o pasión, realzar el mérito o las cualidades de alguien", "CONTIENE X. Unir o incorporar algo, especialmente un país o una parte de su territorio, a otro"] },
    { letter: "y", answer: ["peyote", "cayuco", "ahuyentar"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos", "CONTIENE Y. Embarcación india de una pieza, más pequeña que la canoa, con el fondo plano, que se gobierna con el canalete", "CONTIENE Y. Alejarse huyendo"] },
    { letter: "z", answer: ["zen", "zar", "zafiro"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Emperador de Rusia", "CON LA Z. Mineral compuesto de óxido de aluminio, de color azul y extraordinaria dureza, que se usa para tallar diamantes; es una variedad del corindón."] },
]

let randomQuestion;
let rightAnswer = 0;
let wrongAnswer = 0;
let playerName;
let players = [
    { name: "Jan", correctAnswers: 13, wrongAnswers: 14 },
    { name: "Ana", correctAnswers: 20, wrongAnswers: 7 },
    { name: "Maria", correctAnswers: 10, wrongAnswers: 17 }
]

askName()
instructions()

function pasapalabra() {
    getRandomQuestion()
    playGame()
    checkResults()

}

function playersScores() {
    addPLayersScores()
    sortPLayersScore()
    showPlayersScores()
}

function askName() {
    playerName = prompt(`Como te llamas?`)
    if (playerName === "" || playerName === null) {
        alert(`Por favor introduce informacion correcta`)
        askName()
    }
    return alert(`Hola ${playerName}\nBienvenido al juego Pasapalabra`)
}

function instructions() {
    alert(`Instrucciones:\n1. Introduzca "pasapalabra" si quiere pasar a otra pregunta\n2. Introduzca "end" si quiere finalizar el juego`)
}

function getRandomQuestion() {
    randomQuestion = Math.floor(Math.random() * 3)
    return randomQuestion
}

function playGame() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].status === 0) {
            let randomNumberQuestion = getRandomQuestion()
            console.log(`La siguente pregunta es: ${questions[i].question[randomNumberQuestion]}`)
            answer = prompt(`Por favor, escribe la respuesta`)
            if (answer === questions[i].answer[randomNumberQuestion]) {
                console.log("Correcto!")
                rightAnswer += 1
                questions[i].status = 1
            }
            if (answer === "pasapalabra") {
                console.log(`Pasamos a la siguente pregunta`)
            }
            if (answer === "end" || answer === null || answer === "") {
                endOfGame()
                return
            }
            if (answer !== questions[i].answer[randomNumberQuestion] && answer !== "pasapalabra") {
                console.log(`Incorrecto`)
                wrongAnswer += 1
                questions[i].status = 0
            }
        }
    }
    return playGame
}

function checkResults() {
    if (rightAnswer === 27) console.log(`Felicidades! Has acertado todas las palabras!`)
}

function askNewGame() {
    let nextGame = confirm(`Quieres jugar de nuevo?`)
    if (nextGame) {
        rightAnswer = 0;
        wrongAnswer = 0;
        instructions()
        askName()
        pasapalabra()
    }
    return
}

function endOfGame() {
    console.log(`Gracias por jugar Pasapalabra`)
    console.log(`Respuestas correctas: ${rightAnswer}\nReespuestas incorrectas: ${wrongAnswer}`)
}

function addPLayersScores() {
    players.push({ name: playerName, correctAnswers: rightAnswer, wrongAnswers: wrongAnswer })
}

function sortPLayersScore() {
    players.sort(function (a, b) {
        return b.correctAnswers - a.correctAnswers
    })
}

function showPlayersScores() {
    console.log(' La puntuacion:')
    for (let i = 0; i < players.length; i++) {
        console.log(`El jugador ${players[i].name} tiene ${players[i].correctAnswers} respuestas correctas y ${players[i].wrongAnswers} respuestas incorrectas`)
    }
}

pasapalabra()
playersScores()
askNewGame()
