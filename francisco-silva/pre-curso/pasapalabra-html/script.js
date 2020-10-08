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

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ];

    let preguntas = document.getElementById("questions");
    let respuesta = document.getElementById("respuesta");
    let buttonSubmitAnswer = document.getElementById("submition");
    let buttonSubmitName = document.getElementById("submition-nombre");
    let userSubmit = document.getElementById("nombre-usuario");
    let invalido = document.getElementById("invalido");
    let letra = 0;
    let correct = 0;
    let incorrect = 0;
    let points = 0;
    let buttonMenuPrincipal = document.getElementById("Back");
    let players = [
        {
            Name: "John",
            Points: 23 
        },
        {
            Name: "Bob",
            Points: 12
        }
    ];
    
    function registrar() {
        if(userSubmit.value === "" || isFinite(userSubmit.value)) {
            alert("Introduz un nombre valido")
        } else {
            document.getElementById("juego-principal").style.display = "block"
            document.getElementById("main-page").style.display = "none"
            displayQuestion();
        }
    }

    buttonSubmitName.addEventListener("click", function() {  
        registrar();
    })
    userSubmit.addEventListener("keyup",function(e){
        if(e.keyCode === 13){
            registrar()
        }
    })

    function displayQuestion() {
        preguntas.innerHTML = questions[letra].question
    };
    displayQuestion();

    buttonSubmitAnswer.addEventListener("click", function() {  
        next();
    })

    respuesta.addEventListener("keyup",function(e){
        if(e.keyCode === 13){
            next()
        }
    })
    
    function next() {
        if(respuesta.value === questions[letra].answer) {
            document.getElementsByClassName("letter")[letra].style.backgroundColor = "green";
            questions[letra].status = 1;
            points++;
            correct++;
            proximaPregunta();
        } else if(respuesta.value === "Pasapalabra" && letra<questions.length-1) {
            document.getElementsByClassName("letter")[letra].style.backgroundColor = "grey";
            questions[letra].status = 0;
            letra++;
            proximaPregunta();
        } else if(respuesta.value === "" || respuesta.value !== questions[letra].answer) {
            document.getElementsByClassName("letter")[letra].style.backgroundColor = "red";
            questions[letra].status = 2;
            points--;
            incorrect++;
            proximaPregunta();
        }
        respuesta.value = "";
    }

    function proximaPregunta(){
        if(questions[letra].status === 0){
            displayQuestion()
        }else if(letra === questions.length-1 && correct + incorrect === 26 ){
            addPointsToPlayer(userSubmit.value, points);
            setTimeout( function() {
                document.getElementById("juego-principal").style.display = "none"
                document.getElementById("scores-wrapper").style.display = "block"
                displayScores();
            }, 800); 
        }else if(letra === questions.length - 1){
            letra = 0
            proximaPregunta()
        }else{
            letra++
            proximaPregunta()
        }
    };

    function displayScores(){
        for (let index = 0; index < players.length; index++) {
            let p = document.createElement("p")
            p.innerText = `${players[index].Name} -> Points: ${players[index].Points}`
            document.getElementById("scores").appendChild(p)
            }
    }
    function addPointsToPlayer(nombre, punto) {
        let newPlayer = {
            Name: nombre,
            Points: punto
        }
        players.push(newPlayer)
    }

    buttonMenuPrincipal.addEventListener("click", function() { 
        letra = 0
        correct = 0;
        incorrect = 0;
        points = 0;
        userSubmit.value = "";
        document.getElementById("main-page").style.display = "block"
        document.getElementById("scores-wrapper").style.display = "none"
        players = []
        for (let index = 0; index < questions.length; index++) {
            document.getElementsByClassName("letter")[index].style.backgroundColor = "white"
            questions[index].status = 0
            
        }
        proximaPregunta()
    })