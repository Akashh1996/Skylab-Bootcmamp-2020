/*Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo: '>>>'With the letter "M", Capital of Spain, located in the center of the country. '>>>' "Madrid" '>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.


PRO
● El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...

● El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.

● Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.

Ejemplo de preguntas y respuestas: made by => www.github.com/misan7
*/

var QUESTIONS = [

    [
        {letter: "a", answer:"aurora", status: 0, question: "CON LA A. Princesa a la que le encanta dormir."},
        {letter: "a", answer:"anakin", status: 0, question: "CON LA A. Niño acompañado por la fuerza que acabará siendo uno de los mayores villanos del cine."},
        {letter: "a", answer:"alicia", status: 0, question: "CON LA A. Niña con amigos tan extraños como un conejo blanco y un sombrerero loco."}
    ],
    [
      {letter: "b", answer:"basil", status: 0, question: "CON LA B. Ratón superdetective, un poco más listo que Ratigan."},
      {letter: "b", answer:"bambi", status: 0, question: "CON LA B. La pérdida de su mamá fue uno de los momentos más tristes de la historia del cine infantil."},
      {letter: "b", answer:"bella", status: 0, question: "CON LA B. Gran lectora que al nacer una ilusión, tiembla de emoción."}
    ],
    [    
      {letter: "c", answer:"china", status: 0, question: "CON LA C. País donde sucede la lucha de Mulán contra los Hunos."},
      {letter: "c", answer:"cenicienta", status: 0, question: "CON LA C. Su madrina hizo horas nocturnas para que ella se fuese a bailar."},
      {letter: "c", answer:"cruella", status: 0, question: "CON LA C. Villana a la que le encantaban las manchas de perro."}
    ],
    [
      {letter: "d", answer:"dumbo", status: 0, question: "CON LA D. Adorable animal recordado por su grandes orejas."},
      {letter: "d", answer:"danvers", status: 0, question: "CON LA D. Apellido de la Vengadora más poderosa."},
      {letter: "d", answer:"espada", status: 0, question: "CONTIENE LA D. Tras sacarla de la piedra, Arturo se ganó un reino."}
    ],
    [
      {letter: "e", answer:"eric", status: 0, question: "CON LA E. Principe que se enamoró de una princesa sin voz."},
      {letter: "e", answer:"elsa", status: 0, question: "CON LA E. Princesa friolera a la que le gustaba soltarlo todo."},
      {letter: "e", answer:"arendel", status: 0, question: "CONTIENE LA E. Reino gobernado por las hermanas Elsa y Ana."}
    ],
    [
      {letter: "f", answer:"flanders", status: 0, question: "CON LA F. Mejor amigo de Ariel."},
      {letter: "f", answer:"mufasa", status: 0, question: "CONTIENE LA F. Famoso padre que se sacrificó para que pudiese continuar el ciclo de la vida."},
      {letter: "f", answer:"flu", status: 0, question: "CON LA F. Polvos mágicos que te permiten teletransportarte a cualquier chimenea."}
    ],
    [
      {letter: "g", answer:"gamora", status: 0, question: "CON LA G. Famosa guerrera verde que lucha contra su tirano padre."},
      {letter: "g", answer:"gru", status: 0, question: "CON LA G. Tronco vengador que con 3 palabras daba grandes discursos."},
      {letter: "g", answer:"genio", status: 0, question: "CON LA G. Ser mágico amigo de los monos y las alfombras."}
    ],
    [
      {letter: "h", answer:"hermion", status: 0, question: "CON LA H. Bruja superinteligente a la que le encantan los gatos."},
      {letter: "h", answer:"hercules", status: 0, question: "CON LA H. Semidios capaz de superar 12 pruebas para ser aceptado en casa de sus padres."},
      {letter: "h", answer:"harry", status: 0, question: "CON LA H. Nombre del mago más famoso de Howarts."}
    ],
    [
      {letter: "i", answer:"inevitable", status: 0, question: "CON LA I. Según Thanos, él era..."},
      {letter: "i", answer:"iron man", status: 0, question: "CON LA I. --2 PALABRAS--; Con su chasquido de dedos salvó a la mitad del universo."},
      {letter: "i", answer:"gabriela", status: 0, question: "CONTIENE LA I. Nombre de la protagonista super inteligente que canta un musical junto a su amigo jugador de básquet."}
    ],
    [
      {letter: "j", answer:"jack", status: 0, question: "CON LA J. Nombre del pirata más famoso de los mares caribeños."},
      {letter: "j", answer:"james", status: 0, question: "CON LA J. Nombre del padre del niño que derrotó al señor tenebroso."},
      {letter: "j", answer:"jabali", status: 0, question: "CON LA J. Raza animal famosa por vivir la vida junto a un león y un suricato cantando Hakuna Matata."}
    ],
    [
      {letter: "k", answer:"hulk", status: 0, question: "CON LA K. Superhéroe verde que siempre está enfadado."},
      {letter: "k", answer:"kovu", status: 0, question: "CON LA K. Nombre del hijo del león Skar."},
      {letter: "k", answer:"luke", status: 0, question: "CONTIENE LA K. Nombre del más famoso Skywalker de la galaxia."}
    ],
    [
      {letter: "l", answer:"lilo", status: 0, question: "CON LA L. Nombre de la niña hawaiana que consideraba a un extraterrestre su familia, ohana."},
      {letter: "l", answer:"albus", status: 0, question: "CONTIENE LA L. Primer nombre del mejor director de Howarts de todos los tiempos."},
      {letter: "l", answer:"leia", status: 0, question: "CON LA L. Famosa princesa de la galaxia, hermana de un maestro jedi."}
    ],
    [
      {letter: "m", answer:"merida", status: 0, question: "CON LA M. Princesa escocesa con gran habilidad con el arco y en convertir en oso a su madre."},
      {letter: "m", answer:"morgan", status: 0, question: "CON LA M. Miembro de la familia Stark que quiere 3.000 a su padre."},
      {letter: "m", answer:"marlin", status: 0, question: "CON LA M. Padre sufridor que recorre los mares buscando a su hijo Nemo."}
    ],
    [
      {letter: "n", answer:"nemo", status: 0, question: "CON LA N. Nombre del pez más buscado de todos los mares."},
      {letter: "n", answer:"nebula", status: 0, question: "CONTIENE LA N. Hija de Thanos cuyo color favorito es el azul."},
      {letter: "n", answer:"rapunsel", status: 0, question: "CONTIENE LA N. Princesa cuyo pelo era tan largo que nunca llegó a aparecer completo en toda la película."}
    ],
    [
      {letter: "ñ", answer:"niño", status: 0, question: "CONTIENE LA Ñ. Lo único con lo que Pinocho soñaba en ser de verdad."},
      {letter: "ñ", answer:"ñu", status: 0, question: "CON LA Ñ. Raza animal cuya estampida significó la muerte de un gran rey león."},
      {letter: "ñ", answer:"araña", status: 0, question: "CONTIENE LA Ñ. Insecto preferido de Peter Parker"}
    ],
    [
      {letter: "o", answer:"odin", status: 0, question: "CON LA O. Rey de Asgard y padre de todos."},
      {letter: "o", answer:"olimpo", status: 0, question: "CON LA O. Reino del padre de Hércules y los dioses griegos."},
      {letter: "o", answer:"ron", status: 0, question: "CONTIENE LA O. Nombre del mejor amigo de Harry y Hermión."}
    ],
    [
      {letter: "p", answer:"peter", status: 0, question: "CON LA P. Nombre del niño volador famoso por no querer crecer."},
      {letter: "p", answer:"pascal", status: 0, question: "CON LA P. Nombre de la mascota amiga de Rapunsel."},
      {letter: "p", answer:"ralph", status: 0, question: "CONTIENE LA P. Nombre del rompedor de ladrillos más querido de los videojuegos."}
    ],
    [
      {letter: "q", answer:"queso", status: 0, question: "CON LA Q. Alimento preferido del chef Remy."},
      {letter: "q", answer:"vaquero", status: 0, question: "CONTIENE LA Q. Profesión del juguete favorito de Andy."},
      {letter: "q", answer:"quemado", status: 0, question: "CON LA Q. Como quedas después de sufrir la maldición ¡INCENDIO!."}
    ],
    [
      {letter: "r", answer:"robin", status: 0, question: "CON LA R. Nombre del famoso ladrón que robaba para dárselo a los pobres."},
      {letter: "r", answer:"rogers", status: 0, question: "CON LA R. Apellido del famoso capitán líder de Los Vengadores."},
      {letter: "r", answer:"rayo", status: 0, question: "CONTIENE LA R. Nombre del coche de carreras más rápido y conocido de Radiador Springs."}
    ],
    [
      {letter: "s", answer:"spiderman", status: 0, question: "CON LA S. Superhéroe constantemente enganchado a las paredes."},
      {letter: "s", answer:"simba", status: 0, question: "CON LA S. Nombre de un famoso león que soñaba con ser rey."},
      {letter: "s", answer:"stark", status: 0, question: "CON LA S. Apellido del Vengador más molón y sacrificado."}
    ],
    [
      {letter: "t", answer:"tony", status: 0, question: "CON LA T. Nombre de un famoso empresario de armas que acabaría salvando el mundo."},
      {letter: "t", answer:"thor", status: 0, question: "CON LA T. Diós vikingo al que le encantan los rayos y los mapaches."},
      {letter: "t", answer:"tarzan", status: 0, question: "CONTIENE LA T. Nombre del famoso hombre mono que se pierde en la selva de pequeño y vive junto a una manada de gorilas."}
    ],
    [
      {letter: "u", answer:"mulan", status: 0, question: "CONTIENE LA U. Famosa guerrera que se hace pasar por chico para poder salvar a su pueblo."},
      {letter: "u", answer:"severus", status: 0, question: "CONTIENE LA U. Nombre del profesor de Howarts más Severo y querido de la saga Harry Potter."},
      {letter: "u", answer:"oculus reparo", status: 0, question: "CONTIENE LA U. --2 PALABRAS--; hechizo muy útil si se te rompen las gafas."}
    ],
    [
      {letter: "v", answer:"vader", status: 0, question: "CON LA V. Nombre del Lord Sith más temido del universo."},
      {letter: "v", answer:"voldemort", status: 0, question: "CON LA V. Señor tenebroso al que no te atreverás a mencionar."},
      {letter: "v", answer:"vaiana", status: 0, question: "CON LA V. Princesa mahorí protegida por el mar y por el semidiós Mahui."}
    ],
    [
      {letter: "w", answer:"woody", status: 0, question: "CON LA W. Nombre del juguete más famoso de la historia de Disney."},
      {letter: "w", answer:"sparrow", status: 0, question: 'CONTIENE LA W. Apellido del capitán pirata que siempre buscaba su perla negra.'},
      {letter: "w", answer:"wendy", status: 0, question: "CON LA W. Nombre de la niña que se pasaria la vida contando cuentos sobre Nunca Jamás."}  
    ],
    [
      {letter: "x", answer:"bellatrix", status: 0, question: "CONTIENE LA X. Famosa mortífaga a la que le gustaba recordar que mató a Sirius Black."},
      {letter: "x", answer:"expecto patronum", status: 0, question: "CONTIENE LA X. --2 PALABRAS--; Hechizo que desearás conocer si se te presenta un dementor"},
      {letter: "x", answer:"expeliarmus", status: 0, question: "CONTIENE LA X. Hechizo ideal para desarmar a tu oponente."}
    ],
    [
      {letter: "y", answer:"troy", status: 0, question: "CONTIENE LA Y. Nombre del jugador de basquet y cantante más famoso del colegio East High School."},
      {letter: "y", answer:"malfoy", status: 0, question: "CONTIENE LA Y. Apellido del mago más repelente de la casa Slytherin."},
      {letter: "y", answer:"ginny", status: 0, question: "CONTIENE LA Y. Nombre de la bruja más poderosa de la historia de la familia Weasly."}
    ],
    [
      {letter: "z", answer:"zeus", status: 0, question: "CON LA Z. Nombre del Diós de los dioses olímpicos y padre de Hércules."},
      {letter: "z", answer:"zapato", status: 0, question: "CON LA Z. Pieza de cristal si te encaja en el pie te puede hacer ganar un reino."},
      {letter: "z", answer:"zootropolis", status: 0, question: 'CON LA Z. Ciudad idílica para animales donde un zorro y una coneja pueden ser los mejores amigos y detectives.'}
    ]
];

var ASIGNANOMBRE = true;
var ACIERTOS = 0;
var FALLOS = 0;
var QUESTIONSORTED = [];
var RANKING = [];
var NOMBRE = "";
var RESPUESTA = "";


console.log('%c¡Bienvenido a Pasapalabra de Skylab!','color:blue'); 
console.log('El juego estará basado en las películas Disney, saga Marvel, y saga Harry Potter, ¿ Vemos cuanto eres capaz de recordar sobre estas películas que seguro has visto? Empezamos!');
console.log('Escribe las respuestas sin acentos, sin signos, y puedes responder "END" si prefieres finalizar el juego.');
console.log('________________________________________________');

console.log('Escribe pasapalabra() debajo para empezar el juego');




//Función selección de 27 preguntas random
var sortQuestions = () => {
  for (var j = 0; j < 27; j++){
    let b = Math.floor(Math.random() * 3);
    QUESTIONSORTED.push(QUESTIONS[j][b]);
    QUESTIONSORTED[j]["status"] = 0;
  }
  return;
}

//Función vuelve a preguntar nuevo juego
var preguntaNuevoJuego = () => {
  if (confirm("Quieres volver a jugar?")) {
    ASIGNANOMBRE = true;
    QUESTIONSORTED = [];
    ACIERTOS = 0;
    FALLOS = 0;
    return pasapalabra();
  }
  else return console.log("Hasta la próxima.");
}

var pasapalabra = () => {
  if (ASIGNANOMBRE) {
    NOMBRE = prompt("Indica tu nombre:", "Nombre");
    ASIGNANOMBRE = false;
    sortQuestions();
  };

  for (var i = 0; i < QUESTIONSORTED.length; i++) {
    if (QUESTIONSORTED[i]["status"] === 0) {
      var a = (prompt(QUESTIONSORTED[i]["question"])).toLowerCase();

      if (a == null || a === "end") return console.log("Hasta la próxima");
      else if (a === "pasapalabra") console.log("Siguiente pregunta:");
      else if (a === QUESTIONSORTED[i]["answer"]) {
        QUESTIONSORTED[i]["status"] = 1;
        console.log("Correcto");
        ACIERTOS += 1;        
      } else {
        QUESTIONSORTED[i]["status"] = 2;
        FALLOS += 1;
        console.log("Incorrecto");
      }
    }
  }

  if ((ACIERTOS + FALLOS) != 27) return pasapalabra();
  else {
    console.log("¡¡Fin del juego!!")
    RANKING.push({NOMBRE:NOMBRE, ACIERTOS:ACIERTOS, FALLOS:FALLOS});

    var porAciertos = RANKING.slice(0);
    porAciertos.sort(function(a,b) {
      return b.ACIERTOS - a.ACIERTOS;
    });

    console.log("%cEste es el ranking de resultados: ","color: blue");

    for (let z=0; z<RANKING.length; z++){
        console.log(RANKING[z].NOMBRE+": "+ RANKING[z].ACIERTOS+" ACIERTOS, "+RANKING[z].FALLOS+" FALLOS");
    }
    
    return preguntaNuevoJuego();
  }
}


    //Función lanza pregunta y debe responder la respuesta adecuada

    //Función pregunta por cada letra del abecedario

    //Función resultado aciertos y fallos

    //Función salto de pregunta sin acumular error

    //Función ranking ordenado por aciertos