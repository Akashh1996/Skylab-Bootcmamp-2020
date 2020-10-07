'use strict'

//VARIABLES GLOBALES
var jugador = [];
var preguntasPendientes = 0;
var contLetters = 0;
var contletrasPendientes = 27;
var playerName = "";
var letraActual;
var primeraronda = true;
var numPreguntaAleatoria;
var timer = 200;
var interval;

const contTitle = document.getElementById("title");
const timing = document.getElementById("timer");
const containerletter = document.getElementById("current-letter");
const containerremainingletters = document.getElementById("remaining-letters");
const containerNuevaPartida = document.getElementById('container-nueva-partida');
const containerJuego = document.getElementById('contenedor-juego');
const inputRespuesta = document.getElementById("input-respuesta");
const inputPlayerName = document.getElementById("input-player-name");
const buttonStartGame = document.getElementById("play");
const buttonInstructions = document.getElementById("instrucciones");
const buttonExit = document.getElementById("exit-button");
const display = document.getElementById("display");

inputRespuesta.addEventListener("keyup", function(event){
    let respuestaRonda = inputRespuesta.value;
        if(event.code == 'Enter') {
            if(primeraronda === true){
                checkAnswer(respuestaRonda);
                if(letraActual === "Z" && contLetters === 27){
                    alert(jugador[0].preguntasSegundoTurno.length);
                    if(jugador[0].preguntasSegundoTurno.length > 0){
                        primeraronda = false;
                    }else{
                        clearInterval(interval);
                        display.innerHTML = "FIN DEL JUEGO";
                        inputRespuesta.style.display = "none";
                        ranking(jugador);
                        exitGame();
            
                    }
                    contLetters = 0;
                    preguntasPendientes = jugador[0].respuestasSegundoTurno.length;        
                }
            newQuestion();
            actualLetter();
            }else{
                if(contLetters <= preguntasPendientes && preguntasPendientes > 0){
                    checkAnswer(respuestaRonda);
                    if(contLetters < preguntasPendientes){
                        actualLetter();
                        newQuestion();
                    }else{
                        clearInterval(interval);
                        display.innerHTML = "FIN DEL JUEGO";
                        inputRespuesta.style.display = "none";
                        ranking(jugador);
                        resetValues();
                    }
                }else{
                    clearInterval(interval);
                    display.innerHTML = "FIN DEL JUEGO";
                    inputRespuesta.style.display = "none";
                    ranking(jugador);
                }
            }
            inputRespuesta.value = "";
        }
});


//EVENTOS
buttonStartGame.addEventListener("click",function(event){
    playerName = inputPlayerName.value;
    startGame();
});

buttonInstructions.addEventListener("click", function(){
    gameRules();
})

buttonExit.addEventListener("click", function(){
    exitGame();
});

inputPlayerName.addEventListener("keyup", function(event){
    if(event.code == 'Enter') {
        playerName = inputPlayerName.value;
    }
});

function preguntaAleatoria(){
    let numRandom = Math.round(Math.random()*3);
    return numRandom;
}


function crearJugador(){
    jugador.push({

    name: playerName,
    points: 0,
    preguntasAcertadas : 0,
    preguntasFalladas : 0,
    letraPregunta : [],
    preguntasSegundoTurno : [],
    respuestasSegundoTurno : [],
    })

    jugador.push({name: "Arnau", points: 100}, {name: "Juan", points: 150},{name: "Laura", points: 200});
}

function startGame(){
    if(playerName !== " " && playerName.length >0){
        fullScreen();
        interval =  setInterval(function(){
            timing.innerHTML = timer-- + " seconds";
            if(timer < 16 && timing.style.color != 'red'){
                timing.style.color = 'red';
            }
            if(timer < 0){
                clearInterval(interval);
                ranking(jugador);
                display.innerHTML = "FIN DEL JUEGO";
                inputRespuesta.style.display = "none";
                resetValues();
            }
        },1000);
        actualLetter();
        crearJugador();
        newQuestion();
    }
    

}

function resetStyle(){
    containerNuevaPartida.style.display = "flex";
    containerJuego.style.width = "80%";
}

function fullScreen(){
    containerNuevaPartida.style.display = 'none';
    containerJuego.style.width = '100%';
}

function newQuestion(){
    if(primeraronda === true){
        numPreguntaAleatoria = preguntaAleatoria();
        inputRespuesta.style.display = "block";
        display.innerHTML = preguntas[contLetters].pregunta[numPreguntaAleatoria];    
    }else{
        if(jugador[0].preguntasSegundoTurno.length >0){
            inputRespuesta.style.display = "block";
            display.innerHTML = jugador[0].preguntasSegundoTurno[contLetters];
        }else{
            inputRespuesta.style.display = "block";
            display.innerHTML = "";
        }

        
    }
}

function changeLetterColor(cambioColor){
    document.getElementById(letraActual).style.background = cambioColor;
}

function actualLetter(){
    if(primeraronda === true){
        letraActual = preguntas[contLetters].letra;
    }else{
        if(jugador[0].letraPregunta.length >0){
            letraActual = jugador[0].letraPregunta[contLetters];
        }else{
            letraActual = "";
        }
    }
    
    containerletter.innerHTML = letraActual;
}

function checkAnswer(respuestaActual){
if(primeraronda === true){
    if(respuestaActual === preguntas[contLetters].respuesta[numPreguntaAleatoria]){
        jugador[0].preguntasAcertadas++;
        jugador[0].points+= 10;
        changeLetterColor("green");
    }else if(respuestaActual === "pasapalabra"){
        jugador[0].letraPregunta.push(letraActual);
        jugador[0].preguntasSegundoTurno.push(preguntas[contLetters].pregunta[numPreguntaAleatoria]);
        jugador[0].respuestasSegundoTurno.push(preguntas[contLetters].respuesta[numPreguntaAleatoria]);      
    }else{
        jugador[0].preguntasFalladas++;
        changeLetterColor("red");
    }
}else{
    if(respuestaActual === jugador[0].respuestasSegundoTurno[contLetters]){
        changeLetterColor("green");
        jugador[0].preguntasAcertadas++;
        jugador[0].points+= 10;
    }else{
        changeLetterColor("red");
    }

}
contLetters++;
if(respuestaActual !== "pasapalabra"){
    contletrasPendientes--;
    containerremainingletters.innerHTML = contletrasPendientes;
}
}


function resetValues(){
    jugador = [];
    preguntasPendientes = 0;
    contLetters = 0;
    playerName = "";
    letraActual = "A";
    containerletter.innerHTML = letraActual;
    contletrasPendientes = 27;
    primeraronda = true;
    numPreguntaAleatoria;
}

function exitGame(){
    //PARAR EL CONTADOR Y REINCIAR A VALOR INICIAL
    //VOLVER A LAS MEDIDAS ANTERIORES DE PARÁMETRO;
    resetValues();
    resetStyle();
    clearInterval(interval);
    timer = 200;
    display.innerHTML = "HASTA PRONTO";
    const contenedorLetras = document.getElementsByClassName('contenedor-letras'); 
    const listaLetras = contenedorLetras[0].childNodes;
    for(let i = 0; i < listaLetras.length; i++){
        if(listaLetras[i].nodeName == 'DIV'){
            listaLetras[i].style.background = 'grey';
        }
    }

    inputRespuesta.style.display = "none";
}


function ranking(players){

    let resultRaking = "";

        players.sort((a,b) => {
            if(a.points < b.points){
                return 1
            }else{
                return -1
            }
        });

   for(var i = 0; i<jugador.length; i++){
        resultRaking += "Jugador " + jugador[i].name + ": " + jugador[i].points + " puntos\n";
   }

   alert(resultRaking);    
}

var preguntas = [
    {
        letra : document.getElementById("A").innerHTML,
        pregunta: ["Un perro, un gato, son...", 
        "uno de los colores primarios junto al rojo y el azul",
        "Conjunto de las letras de un idioma puestas en orden.",
        "Medio de transporte de personas o mercancías que va por el aire"], 
        respuesta: ["animales","amarillo","abecedario","avión"], 
    },
    
    {
        letra : document.getElementById("B").innerHTML,
        pregunta: ["Palabra que tiene dos sílabas", 
        "Contar la vida de una persona por escrito",
        "Tela que se pone a los bebés en el pecho para que no se manchen al comer",
        "Instrumento para medir masas o pesos"], 
        respuesta: ["bisílaba", "bibliografía","babero","balanza"], 
    },

    {
        letra : document.getElementById("C").innerHTML, 
        pregunta: ["Más es un adverbio de...",
        "Historia contada en viñetas con dibujos y palabras",
        "Dulce de color marrón que se puede comer líquido, en trocitos, en helado, en bollería,...",
        "Fruto seco de color marrón oscuro por fuera y blanco por dentro."], 
        respuesta: ["cantidad","comic","chocolate","castaña"], 
    },

    {
        letra : document.getElementById("D").innerHTML,
        pregunta: ["Libro en el que aparece el significado de las palabras por orden alfabético",
        "Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada",
        "Lugar en el que hace muchísimo calor, en donde apenas llueve, lleno de arena, y donde casi no hay vegetación.",
        "Cada una de las piezas blancas y duras de la boca que sirve para masticar."],
        respuesta: ["diccionario","dormir","desierto","diente"],
    },
   
    {
        letra : document.getElementById("E").innerHTML,
        pregunta: ["Palabra cuya sílaba tónica es la antepenúltima",
        "Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas",
        "Persona que cuida enfermos y ayuda a los doctores",
        "Animal mamífero con el cuerpo cubierto de púas."],
        respuesta: ["esdrújula","elefante","enfermero","erizo"],
    },
    
    {
        letra : document.getElementById("F").innerHTML,
        pregunta: ["Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos",
        "Vehículo más pequeño que un camión que sirve para llevar mercancías",
        "Alguien que no es guapo.",
        "Instrumento musical que consiste en un tubo con agujeros por el que se sopla"],
        respuesta: ["fiebre","furgoneta","feo","flauta"],
    },
   
    {
        letra : document.getElementById("G").innerHTML,
        pregunta: ["Lo que nos indica si es masculino o femenino es el...","Antónimo de leve",
        "Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda.",
        "Que disfruta comiendo muchos dulces"], 
        respuesta: ["género","grave","globo","goloso"],
    },
    {
        letra : document.getElementById("H").innerHTML,
        pregunta: ["Lo que sale cuando se hace un fuego.",
        "Parte en la que algunos animales tienen la boca y la nariz",
        "Sinónimo de apetito","Agua que se ha vuelto sólida cuando ha hecho mucho frío"],
        respuesta: ["humo","hocico","hambre","hielo"],
    },
   
    {
        letra : document.getElementById("I").innerHTML,
        pregunta: ["Forma no personal del verbo",
        "Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,...",
        "Objeto magnético que puede atraer al hierro y a otros metales",
        "Llenar algo de aire."],
        respuesta: ["infinitivo","iglesia","imán","inflar"],
    },
   
    {
        letra : document.getElementById("J").innerHTML,
        pregunta: ["Contiene la J.- Que expresa cualidad o estado de los nombres a los que se refiere",
        "Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles...",
        "Sustancia que huele muy bien y que usamos para lavar con agua.",
        "Nunca, en ningún momento."],
        respuesta: ["adjetivo","jardín","jabón","jamás"],
    },
   
    {
        letra : document.getElementById("K").innerHTML,
        pregunta: ["Contiene la K.- Apellido de una niña que ha pasado a la historia por su diario",
        "Contiene la K. -Título de una novela y nombre de su protagonista, un sabio que da vida a un monstruo componiendo miembros de cadáveres",
        "Medida de peso que es igual que 1000 gramos.",
        "Deporte de origen japonés que consiste en luchar dando golpes y patadas con las manos y los pies"],
        respuesta: ["ana frank","frankenstein","kilo","kárate"],
    },

    {
        letra :document.getElementById("L").innerHTML,
        pregunta: ["Artículo masculino plural",
        "El rei de la jungla es un animal y es un...",
        "Pequeño objeto de metal que se usa para abrir las cerraduras de las puertas",
        "Camas que están una encima de la otra"],
        respuesta: ["los", "león", "llave","literas"],
    },

    {
        letra : document.getElementById("M").innerHTML,
        pregunta: ["Palabra que contiene una sola sílaba",
        "Tela que se pone en las mesas a la hora de comer.",
        "Persona que trabaja arreglando coches o máquinas",
        "Que ya no está vivo"],
        respuesta: ["monosílaba","mantel","mecánico","muerto"],
    },

    {   
        letra : document.getElementById("N").innerHTML,
        pregunta: ["Así llamamos también al sustantivo",
        "Parte del cuerpo que se utiliza para oler",
        "Tipo de casa que construyen los pájaros para poner sus huevos.",
        "Cielo lleno de nubes y sin sol"],
        respuesta: ["nombre", "nariz","nido","nublado"],
    },

    {
        letra : document.getElementById("Ñ").innerHTML,
        pregunta: ["Contiene la Ñ.- Sinónimo de extrañar,",
        "Contiene la Ñ.- Sinónimo de infancia",
        "Mamífero africano de color marrón parecido a un toro con los cuernos curvos.",
        "Madera de los árboles que se corta en trozos para hacer fuego"],
        respuesta: ["añorar", "niñez", "ñu","leña"],
    },

    {
        letra : document.getElementById("O").innerHTML,
        pregunta: ["Conjunto de normas que regulan la escritura",
        "Órgano del sentido de la vista. Lo que usamos para ver",
        "Pequeño agujero que se encuentra en el centro de la tripa",
        "Lo que se grita para animar y aplaudir a los toreros o a los “bailaores” de flamenco."],
        respuesta: ["ortografía","ojo","ombligo","olé"],
    },

    {
        letra : document.getElementById("P").innerHTML,
        pregunta: ["Palabras con más de un significado",
        "Palabras que tienen más de tres sílabas",
        "Animales que viven en el agua, cubiertos de escamas, con aletas para nadar.",
        "Oso blanco y negro procedente de China."],
        respuesta: ["polisémicas","polisílabas","peces","panda"],
    },

    {
        letra : document.getElementById("Q").innerHTML,
        pregunta: ["Contiene la Q.- Dícese de la persona débil, enfermiza, muy flaca",
        "Apellido real de Don Quijote antes de cambiarse de nombre",
        "Pregunta en inglés",
        "Alimento de color amarillento que se fabrica con leche, y que se come en trozos, lonchas, en la pizza, rallado,..."],
        respuesta: ["enclenque","quijano","question","queso"],
    },

    {
        letra : document.getElementById("R").innerHTML,
        pregunta: ["El que recibe la información",
        "Veloz",
        "Conjunto de cabezas de ganado: vacas, ovejas,...",
        "Sinónimo de factura"],
        respuesta: ["receptor","rápido","rebaño","recibo"],
    },

    {
        letra : document.getElementById("S").innerHTML,
        pregunta: ["Que tiene el mismo significado",
        "Lo que usas para que tus lápices tengan la punta afilada",
        "Lo que eran las casas de los Pitufos",
        "Hombre araña"],
        respuesta: ["sinónimo","sacapuntas","setas","spiderman"],
    },

    {
        letra : document.getElementById("T").innerHTML,
        pregunta: ["Nombre de la sílaba que pronunciamos con más fuerza.",
        "Objeto que se usa para pinchar los alimentos y comérselos.",
        "Lugar donde los actores representan obras",
        "Cuatro personajes, uno morado, otro amarillo, otro rojo y otro verde que tienen una tele en la barriga."],
         respuesta: ["tónica","tenedor","teatro","teletubies"],
    },

    {
        letra : document.getElementById("U").innerHTML,
        pregunta: ["Antónimo de Primero",
        "Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las mujeres se pintan a veces",
        "Sinónimo de emergencia",
        "Frutos que suelen ir en racimo"],
        respuesta: ["último","uña","urgencia","uvas"],
    },

    {
        letra : document.getElementById("V").innerHTML,
        pregunta: ["Palabras que indican acción o estado",
        "Cada uno de los renglones cortos que forman una poesía",
        "Deporte que puedes practicar en la playa y necesitas una bola",
        "Estación del año en la que hace mucho calor."],
        respuesta: ["verbo", "verso","voleibol","verano"],
    },

    {
        letra : document.getElementById("W").innerHTML,
        pregunta: ["Qué in english.",
        "Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular.",
        "Bebida alcohólica",
        "En Internet sigue a la palabra “sitio”"],
        respuesta: ["what","windsurf","wisky","web"],
    },

    {   letra : document.getElementById("X").innerHTML,
        pregunta: ["Contiene la X: Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.",
        "Contiene la X: Lo decimos de una comida que nos parece deliciosa.",
        "Contiene la X: Viaje que se realiza con los compañeros del colegio en autobús para visitar un lugar",
        "Contiene la X: Máquina que sirve para hacer agujeros, hoyos o zanjas en el suelo"],
        respuesta: ["taxi","exquisita", "excursión","excavadora"],
    },

    {   letra : document.getElementById("Y").innerHTML,
        pregunta: ["Pronombre personal, 1ª persona del singular",
        "Barco de lujo",
        "Alimento muy bueno que se hace con leche, es blanco, pero a veces se le añaden sabores de frutas y azúcar.",
        "Juguete redondo que se hace subir y bajar con una cuerda."],
        respuesta: ["yo","yate","yogur","yoyo"],
    },

    {   letra : document.getElementById("Z").innerHTML,
        pregunta: ["Ruido que hacen algunos insectos como las abejas",
        "Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público.",
        "Líquido que sale de las frutas",
        "Lo que nos ponemos en los pies."],
        respuesta: ["zumbido","zoo","zumo","zapatos"],
    },
];


function gameRules(){
    alert("¡Bienvenido a PASAPALABRA!\n"+
    "\n\n"+

    "El objetivo es adivinar todas las preguntas antes de que termine el tiempo(200 segundos). Las preguntas están ordenadas "+
    "por orden alfabético."+
    "El juego contiene 27 preguntas, una para cada letra del abecedario.\n\n"+
    "Si pulsas enter sin introducir respuesta se marcará como incorrecta y pasarás a la siguiente pregunta.\n"+
    "La ortografía debe ser la correcta con sus respectivos accentos(si los tiene), de lo contrario será fallida.\n\n"+
    "Cada vez que debas responder una pregunta tienes varias opciones:\n"+
    "1.Responder la pregunta en el primer turno.\n"+
    "2.Escribir la palabra pasapalabra(La pregunta se reservará para tu segunda y última ronda)"+
    "y se pasará a la siguiente pregunta.\n"+
    "3.Salir del juego en cualquier momento.\n"+
    "\n"+
    "El jugador que tenga más aciertos gana la partida.\n"+
    "Si terminas el juego se mostrará un ranking de puntos con todos los jugadores.\n"+
    "¡Mucha suerte!\n");
}

