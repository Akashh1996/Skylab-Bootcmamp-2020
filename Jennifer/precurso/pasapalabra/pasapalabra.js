'use strict'
//PASAPALABRA

//VARIABLES GLOBALES
var jugadores = [];
var seguir = true;


var preguntas = [
    {
        letra : "A",
        pregunta: ["Un perro, un gato, son...", 
        "uno de los colores primarios junto al rojo y el azul",
        "Conjunto de las letras de un idioma puestas en orden.",
        "Medio de transporte de personas o mercancías que va por el aire"], 
        respuesta: ["animales","amarillo","abecedario","avión"], 
    },
    
    {
        letra : "B",
        pregunta: ["Palabra que tiene dos sílabas", 
        "Contar la vida de una persona por escrito",
        "Tela que se pone a los bebés en el pecho para que no se manchen al comer",
        "Parte superior del cuerpo que está sobre el cuello"], 
        respuesta: ["bisílaba", "bibliografía","babero","cabeza"], 
    },

    {
        letra : "C", 
        pregunta: ["Más es un adverbio de...",
        "Historia contada en viñetas con dibujos y palabras",
        "Dulce de color marrón que se puede comer líquido, en trocitos, en helado, en bollería,...",
        "Fruto seco de color marrón oscuro por fuera y blanco por dentro."], 
        respuesta: ["cantidad","comic","chocolate","castaña"], 
    },

    {
        letra : "D",
        pregunta: ["Libro en el que aparece el significado de las palabras por orden alfabético",
        "Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada",
        "Lugar en el que hace muchísimo calor, en donde apenas llueve, lleno de arena, y donde casi no hay vegetación.",
        "Cada una de las piezas blancas y duras de la boca que sirve para masticar."],
        respuesta: ["diccionario","dormir","desierto","diente"],
    },
   
    {
        letra : "E",
        pregunta: ["Palabra cuya sílaba tónica es la antepenúltima",
        "Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas",
        "Persona que cuida enfermos y ayuda a los doctores",
        "Animal mamífero con el cuerpo cubierto de púas."],
        respuesta: ["esdrújula","elefante","enfermero","erizo"],
    },
    
    {
        letra : "F",
        pregunta: ["Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos",
        "Vehículo más pequeño que un camión que sirve para llevar mercancías",
        "Alguien que no es guapo.",
        "Instrumento musical que consiste en un tubo con agujeros por el que se sopla"],
        respuesta: ["fiebre","furgoneta","feo","flauta"],
    },
   
    {
        letra : "G",
        pregunta: ["Lo que nos indica si es masculino o femenino es el...","Antónimo de leve",
        "Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda.",
        "Que disfruta comiendo muchos dulces"], 
        respuesta: ["género","grave","globo","goloso"],
    },
    {
        letra : "H",
        pregunta: ["Lo que sale cuando se hace un fuego.",
        "Parte en la que algunos animales tienen la boca y la nariz",
        "Sinónimo de apetito","Agua que se ha vuelto sólida cuando ha hecho mucho frío"],
        respuesta: ["humo","hocico","hambre","hielo"],
    },
   
    {
        letra : "I",
        pregunta: ["Forma no personal del verbo",
        "Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,...",
        "Objeto magnético que puede atraer al hierro y a otros metales",
        "Llenar algo de aire."],
        respuesta: ["infinitivo","iglesia","imán","inflar"],
    },
   
    {
        letra : "J",
        pregunta: ["Contiene la J.- Que expresa cualidad o estado de los nombres a los que se refiere",
        "Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles...",
        "Sustancia que huele muy bien y que usamos para lavar con agua.",
        "Nunca, en ningún momento."],
        respuesta: ["adjetivo","jardín","jabón","jamás"],
    },
   
    {
        letra : "K",
        pregunta: ["Contiene la K.- Apellido de una niña que ha pasado a la historia por su diario",
        "Título de una novela y nombre de su protagonista, un sabio que da vida a un monstruo componiendo miembros de cadáveres",
        "Medida de peso que es igual que 1000 gramos.",
        "Deporte de origen japonés que consiste en luchar dando golpes y patadas con las manos y los pies"],
        respuesta: ["ana frank","frankenstein","kilo","kárate"],
    },

    {
        letra : "L",
        pregunta: ["Artículo masculino plural",
        "El rei de la jungla es un animal y es un...",
        "Pequeño objeto de metal que se usa para abrir las cerraduras de las puertas",
        "Camas que están una encima de la otra"],
        respuesta: ["los", "león", "llave","literas"],
    },

    {
        letra : "M",
        pregunta: ["Palabra que contiene una sola sílaba",
        "Tela que se pone en las mesas a la hora de comer.",
        "Persona que trabaja arreglando coches o máquinas",
        "Que ya no está vivo"],
        respuesta: ["monosílaba","mantel","mecánico","muerto"],
    },

    {   
        letra : "N",
        pregunta: ["Así llamamos también al sustantivo",
        "Parte del cuerpo que se utiliza para oler",
        "Tipo de casa que construyen los pájaros para poner sus huevos.",
        "Cielo lleno de nubes y sin sol"],
        respuesta: ["nombre", "nariz","nido","nublado"],
    },

    {
        letra : "Ñ",
        pregunta: ["Contiene la Ñ.- Sinónimo de extrañar,",
        "Contiene la Ñ.- Sinónimo de infancia",
        "Mamífero africano de color marrón parecido a un toro con los cuernos curvos.",
        "Madera de los árboles que se corta en trozos para hacer fuego"],
        respuesta: ["añorar", "niñez", "ñu","leña"],
    },

    {
        letra : "O",
        pregunta: ["Conjunto de normas que regulan la escritura",
        "Órgano del sentido de la vista. Lo que usamos para ver",
        "Pequeño agujero que se encuentra en el centro de la tripa",
        "Lo que se grita para animar y aplaudir a los toreros o a los “bailaores” de flamenco."],
        respuesta: ["ortografía","ojo","ombligo","olé"],
    },

    {
        letra : "P",
        pregunta: ["Palabras con más de un significado",
        "Palabras que tienen más de tres sílabas",
        "Animales que viven en el agua, cubiertos de escamas, con aletas para nadar.",
        "Oso blanco y negro procedente de China."],
        respuesta: ["polisémicas","polisílabas","peces","panda"],
    },

    {
        letra : "Q",
        pregunta: ["Contiene la Q.- Dícese de la persona débil, enfermiza, muy flaca",
        "Apellido real de Don Quijote antes de cambiarse de nombre",
        "Pregunta en inglés",
        "Alimento de color amarillento que se fabrica con leche, y que se come en trozos, lonchas, en la pizza, rallado,..."],
        respuesta: ["enclenque","quijano","question","queso"],
    },

    {
        letra : "R",
        pregunta: ["El que recibe la información",
        "Veloz",
        "Conjunto de cabezas de ganado: vacas, ovejas,...",
        "Sinónimo de factura"],
        respuesta: ["receptor","rápido","rebaño","recibo"],
    },

    {
        letra : "S",
        pregunta: ["Que tiene el mismo significado",
        "Lo que usas para que tus lápices tengan la punta afilada",
        "Lo que eran las casas de los Pitufos",
        "Hombre araña"],
        respuesta: ["sinónimo","sacapuntas","setas","spiderman"],
    },

    {
        letra : "T",
        pregunta: ["Nombre de la sílaba que pronunciamos con más fuerza.",
        "Objeto que se usa para pinchar los alimentos y comérselos.",
        "Lugar donde los actores representan obras",
        "Cuatro personajes, uno morado, otro amarillo, otro rojo y otro verde que tienen una tele en la barriga."],
         respuesta: ["tónica","tenedor","teatro","teletubies"],
    },

    {
        letra : "U",
        pregunta: ["Antónimo de Primero",
        "Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las mujeres se pintan a veces",
        "Sinónimo de emergencia",
        "Frutos que suelen ir en racimo"],
        respuesta: ["último","uña","urgencia","uvas"],
    },

    {
        letra : "V",
        pregunta: ["Palabras que indican acción o estado",
        "Cada uno de los renglones cortos que forman una poesía",
        "Deporte que puedes practicar en la playa y necesitas una bola",
        "Estación del año en la que hace mucho calor."],
        respuesta: ["verbo", "verso","voleibol","verano"],
    },

    {
        letra : "W",
        pregunta: ["Qué in english.",
        "Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular.",
        "Bebida alcohólica",
        "En Internet sigue a la palabra “sitio”"],
        respuesta: ["what","windsurf","wisky","web"],
    },

    {   letra : "X",
        pregunta: ["Contiene la X: Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.",
        "Contiene la X: Lo decimos de una comida que nos parece deliciosa.",
        "Contiene la X: Viaje que se realiza con los compañeros del colegio en autobús para visitar un lugar",
        "Contiene la X: Máquina que sirve para hacer agujeros, hoyos o zanjas en el suelo"],
        respuesta: ["taxi","exquisita", "excursión","excavadora"],
    },

    {   letra : "Y",
        pregunta: ["Pronombre personal, 1ª persona del singular",
        "Barco de lujo",
        "Alimento muy bueno que se hace con leche, es blanco, pero a veces se le añaden sabores de frutas y azúcar.",
        "Juguete redondo que se hace subir y bajar con una cuerda."],
        respuesta: ["yo","yate","yogur","yoyo"],
    },

    {   letra : "Z",
        pregunta: ["Ruido que hacen algunos insectos como las abejas",
        "Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público.",
        "Líquido que sale de las frutas",
        "Lo que nos ponemos en los pies."],
        respuesta: ["zumbido","zoo","zumo","zapatos"],
    },
];

function preguntaAleatoria(){
    let numRandom = Math.round(Math.random()*3);
    return numRandom;
}


function crearJugadores(){
    let colores = ["#FFB399","#FF99B2","#FF99E5","#FFE699"];
    let numJugadores = parseInt(prompt("Por favor, introduce el número de jugadores para empezar (Máximo 4)",1));
    
    while(numJugadores <= 0 || numJugadores > 4){
        numJugadores = parseInt(prompt("Por favor, introduce el número de jugadores para empezar (Máximo 4)",1));
    }
    for(var i = 0; i<numJugadores; i++){
        let nombre = prompt("Por favor, introduce el nombre del jugador "+(i+1));
        while(nombre === "" || nombre === undefined || nombre === null){
            nombre = prompt("Por favor, introduce el nombre del jugador "+(i+1));
        }
        jugadores.push({

            nombre: nombre,
            segundaRonda : false,
            preguntasAcertadas : 0,
            preguntasFalladas : 0,
            letraPregunta : [],
            preguntasSegundoTurno : [],
            respuestasSegundoTurno : [],
            color : colores[i]
        })
    }
}

function primerTurno(jugador){
    let respuesta;
    if(seguir){
        alert("Primera ronda, es turno de: "+ jugador.nombre);
        console.log('%c'+ "Primera ronda, turno de: " + jugador.nombre, "background:" + jugador.color);
        for(var i = 0; i<preguntas.length; i++){
            let numeroPregunta = preguntaAleatoria();
            let letra = preguntas[i].letra;
            alert("Con la letra: "+ letra);
            respuesta = prompt(preguntas[i].pregunta[numeroPregunta]);
            while(respuesta === "" || respuesta === undefined || respuesta === null){
                alert("Debes introducir una respuesta, si desea salir escribe END");
                respuesta = prompt(preguntas[i].pregunta[numeroPregunta]);
            }
            respuesta = comprobarRespuesta(respuesta);
            
            if(respuesta === preguntas[i].respuesta[numeroPregunta] || 
                
                respuesta === preguntas[i].respuesta[numeroPregunta].toUpperCase()){
                console.log("Has acertado!");
                jugador.preguntasAcertadas++;
            
            }else if(respuesta === "PASAPALABRA" || respuesta === "pasapalabra"){
                
                jugador.letraPregunta.push(letra);
                jugador.preguntasSegundoTurno.push(preguntas[i].pregunta[numeroPregunta]);
                jugador.respuestasSegundoTurno.push(preguntas[i].respuesta[numeroPregunta]);
                jugadores[j].segundaRonda = true;
                continue;

            }else if(respuesta === "END" || respuesta === "end"){
                
                console.log('%c' + "Jugador: " + jugador.nombre.toLowerCase(), "background:" + jugador.color)
                console.log("ACIERTOS: " + jugador.preguntasAcertadas +"\n" +
                "FALLOS: " + jugador.preguntasFalladas);
                alert("Has salido del juego, hasta pronto!");
                seguir = false;
                break;

            }else if(respuesta !== preguntas[i].respuesta[numeroPregunta]){
            
                console.log("Has fallado!");
            jugador.preguntasFalladas++;
            }
        }
    }
    if(seguir){
        alert("Fin de la primera ronda, has acertado : "+ jugadores[j].preguntasAcertadas + " preguntas");  
    }
     
}         


function segundoTurno(jugador){
    let respuesta;
    if(seguir){
        alert("Segunda y última ronda, es turno de: " + jugadores[i].nombre.toUpperCase());
        for(var j = 0; j<jugador.preguntasSegundoTurno.length; j++){
            alert("Con la letra: "+ jugador.letraPregunta[j]);
            respuesta = prompt(jugador.preguntasSegundoTurno[j]);
            
            if(respuesta === jugador.respuestasSegundoTurno[j]){
                
                console.log("Has acertado!");
                jugador.preguntasAcertadas++;
                //BORRAR DEL ARRAY LAS PREGUNTAS ACERTADAS
                //BUSCAR UN METODO PARA HACERLO CON EL ACIERTO DE CADA LETRA PARA CADA JUGADOR

            }else if(respuesta === "PASAPALABRA" || respuesta === "pasapalabra"){
                
                alert("En el último turno no se puede cantar pasapalabra");
                j--;

            }else if(respuesta === "END" || respuesta === "end"){
                
                console.log('%c' + "Jugador: " + jugador.nombre +"\n"+ "ACIERTOS: " + jugador.preguntasAcertadas +"\n"
                +"FALLOS: " + jugador.preguntasFalladas, "background" + jugador.color);
                alert("Hasta pronto!");
                seguir = false;
                segundaRonda = false;
                break;

            }else if(respuesta === null || respuesta === undefined || respuesta === ""){
                alert("Introduce una respuesta");
                j--;;
            }else{
                console.log("Has fallado!");
                jugador.preguntasFalladas++;
            }
        }
    } 
}

function comprobarRespuesta(respuesta){
    let respuestaMinusculas = "";
    for(var i = 0; i<respuesta.length; i++){
        if(respuesta[i] !== respuesta[i].toLowerCase()){
            respuestaMinusculas += respuesta[i].toLowerCase();
        }else{
            respuestaMinusculas += respuesta[i];
        }
    }
    respuesta = respuestaMinusculas;
    return respuesta;
}


function mostrarPuntos(){

    console.log("------------RANKING PUNTOS/JUGADORES------------\n");
    
    //   ORDENAR RANKING!
    jugadores.sort((a,b) => {
        if(a.preguntasAcertadas < b.preguntasAcertadas){
            return 1
        }else{
            return -1
        }
    })



      for(var i = 0; i<jugadores.length; i++){
          console.log('%c' + "Jugador: " + jugadores[i].nombre.toUpperCase() + "    " + "ACIERTOS : " + 
          jugadores[i].preguntasAcertadas + "/" + "FALLOS: "+ jugadores[i].preguntasFalladas, 'background:'+ jugadores[i].color);
      }
}


function reglasJuego(){
    alert("¡Bienvenido a PASAPALABRA!\n"+
    "\n"+
    "El juego contiene 27 preguntas, una para cada letra del abecedario\n"+
    "El objetivo es adivinar todas las preguntas. Las preguntas están ordenadas por abecedario, es decir,"+
    "comenzará preguntando la pregunta que su respuesta comience por la letra A, seguirá con la B...\n"+
    "\n"+
    "La ortografía debe ser la correcta con sus respectivos accentos(si los tiene), de lo contrario será fallida.\n"+
    "Cada vez que debas responder una pregunta tienes varias opciones:\n"+
    "1.Responder la pregunta en el primer turno.\n"+
    "2.Escribir la palabra pasapalabra(La pregunta se reservará para tu segunda y última ronda)"+
    "y se pasará a la siguiente pregunta.\n"+
    "3.Salir del juego en cualquier momento escribiendo end.\n"+
    "\n"+
    "El jugador que tenga más aciertos gana la partida.\n"+
    "Si terminas el juego se mostrará un ranking de puntos con todos los jugadores."+
    "Si por el contrario decides salir antes de terminar solo se te mostrarán"+
    "las preguntas que has acertado y las que has fallado.\n"+
    "\n"+
    "¡Mucha suerte!\n");
}

//PROGRAMA*****************************
reglasJuego();
crearJugadores();
for(var j = 0; j<jugadores.length; j++){
    primerTurno(jugadores[j]);  
}

for(var i = 0; i<jugadores.length; i++){
    if(jugadores[i].segundaRonda === true){
        segundoTurno(jugadores[i]); 
    }     
}
if(seguir){
    mostrarPuntos();   
}




