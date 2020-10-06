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
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},];


let player = "";
let right = 0;
let failure = 0;
let ranking = [];

function pushName(){
    player = prompt("Indique el nombre");
    if (player === "" || player === null || !isNaN(player)){
        alert("Indique un nombre");
        pushName();
    } else{
    console.log("Bienvenido al pasapalabra " + player);
    game();
    }
}
pushName();

function game(){
    for (let a=0; a<questions.length; a++){
        if (questions[a].status != 0){
            break;
        } else{
        console.log(questions[a].question);
        let quest = prompt("");
        if (quest === questions[a].answer){
            right += 1;
            questions[a].status += 1;
            alert("Acierto!");
        }else if (quest === "pasapalabra" || quest === "" || quest === null){
            console.log("PASAPALABRA!");
            break;
        } else{
            failure += 1;
            questions[a].status += 1;
            alert("Has fallado :(");
        }
    }
    }
    if (right + failure === questions.length){
        final();
    } else {
        game();
    }
}

function final(){
  console.log("Terminado!");
  console.log(`Has acertado ${right} preguntas`);
  console.log(`Has fallado ${failure} preguntas`);
  console.log(`${right} puntos conseguidos`);

ranking.push({name: player, points: right});
ranking.sort(function(a,b){
    if (a.points < b.points){
        return 1;
    }else if (a.points > b.points){
        return -1;
    } return 0;
});
menu();
}

function menu(){
const amenu = prompt("Bienvenido, que desea hacer?\n"+
"1. Ver Ranking de puntos\n"+
"2. Volver a jugar\n"+
"3. Salir");

switch(amenu){
    case "1":
        console.log("Este es el ranking actual:\n");
        for (r=0; r<ranking.length; r++){
        console.log(`Player: ${ranking[r].name} Points: ${ranking[r].points}\n`);
        }
        menu();    
    break;
    case "2":
        right = 0;
        failure = 0;
        player = prompt("Indique el nombre");
        if (player === "" || player === null || !isNaN(player)){
        alert("Indique un nombre");
        menu();
        } else{
        console.log("Bienvenido al pasapalabra " + player);
        for (s=0; s<questions.length; s++){
        questions[s].status = 0;
        }
        }
        game();
    break;
    case "3":
        let exit = true;
        exit = confirm("Seguro que quieres salir?");
        if (exit === false){
            menu();
        } else {console.log("Hasta pronto "+ name);}
        break;
    default:
        console.log("Introduce una opción correcta");
        menu();
        break;
}
}