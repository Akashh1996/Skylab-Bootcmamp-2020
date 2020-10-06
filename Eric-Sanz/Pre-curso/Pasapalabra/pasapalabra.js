// Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar la palabra.
// 1 pregunta por letra. Pro: 3 preguntas por letra para que no salgan siempre las mismas, solo se pregunta una.
// Al final del juego,con todas las letras respondidas, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. 
// Si el usuario responde pasapalabra, esa pregunta la dejará para la siguiente ronda.
// Al finalizar, ranking de usuarios ordenados por cantidad de letras acertadas.
// El programa no debe hacer distinciones entre mayusculas y minusculas.
// Input END en cualquier momento, terminará el juego, te dirá cuantas palabras has acertado, pero no enseñará el ranking.


let rightAnswers = 0;
let wrongAnswers = 0;
let questions = [];
let newUser = '';
let answer = '';

let allUsers = [{name: 'Marco', rights: 14, wrongs: 13}, {name: 'Lara', rights: 15, wrongs: 12}, {name: 'Salva', rights: 20, wrongs: 7}, {name: 'Sergio', rights: 22, wrongs: 5}, {name: 'Laura', rights: 26, wrongs: 1}, {name: 'Héctor', rights: 12, wrongs: 15}, {name: 'Ester', rights: 16, wrongs: 11}, {name: 'Pedro', rights: 18, wrongs: 9}, {name: 'Luca', rights: 23, wrongs: 4}];

function rankingUsers (name, rights, wrongs) {
    this.name = name;
    this.rights = rights;
    this.wrongs = wrongs;
}

let allQuestions = [
                  [{letter: 'a', question: 'Con la "A": Período durante el cual desaparece la luz solar y se hace de noche.', answer: 'anochecer', status: 0},
                  {letter: 'a', question: 'Con la "A": Capa gaseosa que envuelve a un astro: especialmente, la que rodea a la Tierra.', answer: 'atmosfera', status: 0},
                  {letter: 'a', question: 'Con la "A": Libro o cuaderno en cuyas hojas se colocan sellos, autógrafos, fotográfias y cosas semejantes que se guardan o coleccionan.', answer: 'album', status: 0}], 

                  [{letter: 'b', question: 'Con la "B": Masa blanda y compacta que resulta de mezclar tierra y agua.', answer: 'barro', status: 0},
                  {letter: 'b', question: 'Con la "B": Del polo o del hemisferio norte o relacionado con ellos.', answer: 'boreal', status: 0},
                  {letter: 'b', question: 'Con la "B": Zona de la Tierra habitada por seres vivos.', answer: 'biosfera', status: 0}],

                  [{letter: 'c', question: 'Con la "C": Espectáculo en el que se interpretan obras musicales.', answer: 'concierto', status: 0},
                  {letter: 'c', question: 'Con la "C": Bollo de hojaldre esponjoso con forma de media luna.', answer: 'croissant', status: 0},
                  {letter: 'c', question: 'Con la "C": Situación grave y difícil que pone en peligro la continuidad o el desarrollo de un proceso.', answer: 'crisis', status: 0}],

                  [{letter: 'd', question: 'Con la "D": Explosión que produce mucho ruido.', answer: 'detonacion', status: 0},
                  {letter: 'd', question: 'Con la "D": Séptimo y último día de la semana dedicado generalmente al descanso.', answer: 'domingo', status: 0},
                  {letter: 'd', question: 'Con la "D": Pequeña colina de arena que forma y empuja el viento.', answer: 'duna', status: 0}],
                  
                  [{letter: 'e', question: 'Con la "E": Partícula que se encuentra alrededor del núcleo del átomo y que tiene carga électronica negativa.', answer: 'electron', status: 0},
                  {letter: 'e', question: 'Con la "E": Arácnido de abdomen alargado y cola terminada en un aguijón venenoso con forma de gancho.', answer: 'escorpion', status: 0},
                  {letter: 'e', question: 'Con la "E": Pueblo que habita, en pequeños grupos dispersos, las tierras próximas del Polo Norte.', answer: 'esquimal', status: 0}],
                  
                  [{letter: 'f', question: 'Con la "F": Soberano del antiguo Egipto.', answer: 'faraon', status: 0},
                  {letter: 'f', question: 'Con la "F": Hueso de la pierna que es el más largo del cuerpo humano.', answer: 'femur', status: 0},
                  {letter: 'f', question: 'Con la "F": preparar un disco dándole una estructura que el ordenador pueda utilizar.', answer: 'formatear', status: 0}],
                  
                  [{letter: 'g', question: 'Con la "G": Conjunto de los cromosomas de una célula.', answer: 'genoma', status: 0},
                  {letter: 'g', question: 'Con la "G": Explicaciones, notas o comentarios en un texto para aclarar el significado de palabras o expresiones difíciles de entender.', answer: 'glosa', status: 0},
                  {letter: 'g', question: 'Con la "G": Tira hecha con flores, hojas, papel u otro material entrejido que se usa como adorno.', answer: 'guirnalda', status: 0}],
                  
                  [{letter: 'h', question: 'Con la "H": Conjunto de elementos físicos o materiales que constituyen un ordenador o un equipo informático.', answer: 'hardware', status: 0},
                  {letter: 'h', question: 'Con la "H": Suceso trágico en el que se produce una gran destrucción y muchas desgracias humanas y materiales.', answer: 'hecatombe', status: 0},
                  {letter: 'h', question: 'Con la "H": Líquido de color amarillo verdoso y de sabor amargo que es segregado por el hígado.', answer: 'hiel', status: 0}],
                  
                  [{letter: 'i', question: 'Con la "I": Bandera oficial del País Vasco.', answer: 'ikurriña', status: 0},
                  {letter: 'i', question: 'Con la "I": Fuerza intensa con la que se hace o sucede una cosa.', answer: 'impetu', status: 0},
                  {letter: 'i', question: 'Con la "I": Que no tiene vida.', answer: 'inerte', status: 0}],
                  
                  [{letter: 'j', question: 'Con la "J": Mineral muy duro, de color blanco o verde y muy usado en joyería.', answer: 'jade', status: 0},
                  {letter: 'j', question: 'Con la "J": Vehículo resistente que se adapta a todo tipo de terreno.', answer: 'jeep', status: 0},
                  {letter: 'j', question: 'Con la "J": Bosque tropical formado por vegetación muy abundante y una fauna muy variada.', answer: 'jungla', status: 0}],
                  
                  [{letter: 'k', question: 'Con la "K": Técnica de lucha de origen japonés, parecida a la esgrima, que se practica con sables de bambú.', answer: 'kendo', status: 0},
                  {letter: 'k', question: 'Con la "K": Pañuelo de papel.', answer: 'kleenex', status: 0},
                  {letter: 'k', question: 'Con la "K": Décima letra del alfabeto griego.', answer: 'kappa', status: 0}],
                  
                  [{letter: 'l', question: 'Con la "L": Actividad, sentimiento, que se puede soportar sin mucho esfuerzo.', answer: 'llevadero', status: 0},
                  {letter: 'l', question: 'Con la "L": Dar un impulso fuerte a una cosa para enviarla o proyectarla en una dirección, generalmente al aire.', answer: 'lanzar', status: 0},
                  {letter: 'l', question: 'Con la "L": Título honorífico que se les da a las señoras de la nobleza inglesa.', answer: 'lady', status: 0}],

                  [{letter: 'm', question: 'Con la "M": Baile de ritmo alegre procedente de Cuba.', answer: 'mambo', status: 0},
                  {letter: 'm', question: 'Con la "M": Trozo de tela o papel que cubre y protege la nariz y la boca por motivos de higiene.', answer: 'mascarilla', status: 0},
                  {letter: 'm', question: 'Con la "M": Estado de un cuerpo mientras cambia de lugar o de posición.', answer: 'movimiento', status: 0}],
                  
                  [{letter: 'n', question: 'Con la "N": Dulce cremoso hecho con yemas de huevo, azúcar y leche.', answer: 'natillas', status: 0},
                  {letter: 'n', question: 'Con la "N": Masa de materia celeste brillante cuyo aspecto recuerda al de una gran nube.', answer: 'nebulosa', status: 0},
                  {letter: 'n', question: 'Con la "N": Estrella que adquiere de manera temporal un brillo muy intenso y superior al suyo habitual.', answer: 'nova', status: 0}],
                  
                  [{letter: 'ñ', question: 'Contiene la "Ñ": Pieza de tela que tiene distintos usos domésticos y que normalmente tiene forma cuadrada o rectangular.', answer: 'paño', status: 0},
                  {letter: 'ñ', question: 'Contiene la "Ñ": Hombre que muestra poca cortesía y educación en su comportamiento.', answer: 'gañan', status: 0},
                  {letter: 'ñ', question: 'Contiene la "Ñ": Golpe fuerte que recibe o da una persona.', answer: 'castañazo', status: 0}],
                  
                  [{letter: 'o', question: 'Con la "O": Última letra del alfabeto griego.', answer: 'omega', status: 0},
                  {letter: 'o', question: 'Con la "O": Principio o causa de una cosa.', answer: 'origen', status: 0},
                  {letter: 'o', question: 'Con la "O": Falta o escasez de luz.', answer: 'oscuridad', status: 0}],
                  
                  [{letter: 'p', question: 'Con la "P": Animal, planta, que vive alimentándose de las sustancias que elabora otro ser de distinta especie y causándole un daño.', answer: 'parasito', status: 0},
                  {letter: 'p', question: 'Con la "P": Acción que consiste en pellizcar a una persona.', answer: 'pellizco', status: 0},
                  {letter: 'p', question: 'Con la "P": Prenda de abrigo acolchada y generalmente con capucha.', answer: 'parka', status: 0}],

                  [{letter: 'q', question: 'Contiene la "Q": Persona excesivamente escrupulosa, que se fija en detalles insignificantes y que ve problemas o defectos en todo.', answer: 'tiquismiquis', status: 0},
                  {letter: 'q', question: 'Con la "Q": Partícula elemental con la que se forman otras más pesadas.', answer: 'quark', status: 0},
                  {letter: 'q', question: 'Con la "Q": Unidad de peso para las perlas y piedras preciosas.', answer: 'quilate', status: 0}],
                  
                  [{letter: 'r', question: 'Con la "R": Echar o esparcir agua sobre una superfície o una planta.', answer: 'regar', status: 0},
                  {letter: 'r', question: 'Con la "R": Desplazarse arrastrandose por el suelo como los reptiles.', answer: 'reptar', status: 0},
                  {letter: 'r', question: 'Con la "R": Lugar en el que hay muchos rosales.', answer: 'rosaleda', status: 0}],
                  
                  [{letter: 's', question: 'Con la "S": Nota musical que equivale a la mitad de una corchea o a la cuarta parte de una negra.', answer: 'semicorchea', status: 0},
                  {letter: 's', question: 'Con la "S": Bebida alcoholica que se obtiene a partir de la fermentación del arroz.', answer: 'sake', status: 0},
                  {letter: 's', question: 'Con la "S": Cada uno de los momentos del año en que se da la máxima diferencia de duración entre el día y la noche', answer: 'solsticio', status: 0}],

                  [{letter: 't', question: 'Con la "T": Ventana pequeña abierta en el techo o en la parte alta de una pared.', answer: 'tragaluz', status: 0},
                  {letter: 't', question: 'Con la "T": Hacha de guerra usada por los indios norteamericanos.', answer: 'tomahawk', status: 0},
                  {letter: 't', question: 'Con la "T": Tormenta en la que hay vientos extremadamente fuertes que avanzan girando sobre sí mismos de forma muy rápida.', answer: 'tornado', status: 0}],
                  
                  [{letter: 'u', question: 'Con la "U": Forma de tratamiento de segunda persona que indica respeto y cortesía.', answer: 'usted', status: 0},
                  {letter: 'u', question: 'Con la "U": Proyecto, idea o plan ideal y muy bueno, pero imposible de realizar.', answer: 'utopia', status: 0},
                  {letter: 'u', question: 'Con la "U": Instrumento musical de cuatro cuerdas que es más pequeño que la guitarra.', answer: 'ukelele', status: 0}],
                  
                  [{letter: 'v', question: 'Con la "V": Sustancia que se introduce en el organismo para evitar que se desarrollen diferentes enfermedades.', answer: 'vacuna', status: 0},
                  {letter: 'v', question: 'Con la "V": Estado natural de la persona que ha llegado a una edad avanzada.', answer: 'vejez', status: 0},
                  {letter: 'v', question: 'Con la "V": Sonido que se produce cuando el aire expulsado de los pulmones pasa por la garganta y hace que vibren las cuerdas vocales.', answer: 'voz', status: 0}],
                  
                  [{letter: 'w', question: 'Contiene la "W": Modalidad de baile que se caracteriza por el balanceo de hombros y caderas y torsiones de tobillo.', answer: 'twist', status: 0},
                  {letter: 'w', question: 'Con la "W": Aguardiente muy fuerte y aromático de color marronáceo que se obtiene destilando cebada o malta.', answer: 'whisky', status: 0},
                  {letter: 'w', question: 'Con la "W": Deporte acuático de vela que se practica sobre una tabla, y en equilibrio has de ir dirigiendo una vela unida a la misma tabla.', answer: 'windsurf', status: 0}],
                  
                  [{letter: 'x', question: 'Contiene la "X": Elemento químico que forma parte del aire, del agua y de la mayor parte de los compuestos.', answer: 'oxigeno', status: 0},
                  {letter: 'x', question: 'Continene la "X": Capa de color rojizo que se forma en la superfície del hierro y otros metales a causa de la humedad o del agua.', answer: 'oxido', status: 0},
                  {letter: 'x', question: 'Contiene la "X": Salida o viaje colectivo que se realiza con un fin determinado, especialmente científico, militar o deportivo.', answer: 'expedicion', status: 0}],
                  
                  [{letter: 'y', question: 'Contiene la "Y": Mil millones de bytes o unidades que almacenan información.', answer: 'gigabyte', status: 0},
                  {letter: 'y', question: 'Contiene la "Y": Actividad u ocupación que se realiza meramente por placer durante el tiempo libre.', answer: 'hobby', status: 0},
                  {letter: 'y', question: 'Con la "Y": Conjunto de técnicas de concentración que se práctica para conseguir un mayor control físico y mental.', answer: 'yoga', status: 0}],
                  
                  [{letter: 'z', question: 'Con la "Z": Piedra preciosa de color azul muy usada en joyería.', answer: 'zafiro', status: 0},
                  {letter: 'z', question: 'Con la "Z": Cambio rápido y continuo del canal del televisor por medio del mando a distancia.', answer: 'zapping', status: 0},
                  {letter: 'z', question: 'Con la "Z": Que es torpe o poco inteligente.', answer: 'zopenco', status: 0}]
]


function pasapalabra() {

    
  userName = prompt('Bienvenido al Pasapalabra de Skylab! Cúal es su nombre?');
  if (userName == null) {
      return;
  } else if (!isNaN(userName) || userName == '') {
      alert('Introduzca un nombre de usuario válido por favor.');
      pasapalabra();
  } else {
      newUser = userName;
      let rules = confirm(`Bienvenido ${newUser}! A continuación le explicamos las reglas del juego: \n
      · Se le hará una pregunta por cada letra del alfabeto y deberá responder o decir "pasapalabra" para pasar la pregunta e ir a la siguiente, dejando esa, para más adelante.
      · En cualquier momento puede finalizar el juego poniendo "End".
      · Responda sin acentos. Asímismo puede responder en mayúscula o en minúscula.
      · Se van contabilizando los aciertos y errores que vaya teniendo.\n
      Mucha suerte ${newUser}!`);
      console.clear();
      if (rules) {
        gameQuestions();
        pasapalabraGame();
      } else {
          return;
      }
  }

  function gameQuestions() {
    for ( let i = 0; i < 27; i++){
        let j = Math.floor(Math.random() * 3);
        questions.push(allQuestions[i][j]);
        questions[i]['status'] = 0;
  }
  return;
}

  function pasapalabraGame() {

    for (let i = 0; i < questions.length; i++) {
      if (questions[i]['status'] === 0) {
        answer = prompt(questions[i]['question']);
        if (answer === null) {
          alert(`Gracias por jugar a Skylab Pasapalabra. Espero que se haya divertido ${newUser}!`);
          return;
        } else {
          answer = answer.toLowerCase();
        }

        if (answer === '') {
          alert('Debe introducir una respuesta!');
          pasapalabra();
        } else if (answer === 'end') {
          alert(`Gracias por jugar a Skylab Pasapalabra. Espero que se haya divertido ${newUser}!`);
          return;
        } else if (answer === 'pasapalabra') {
          questions[i]['status'] = 0;
          console.clear();
          console.log(`De acuerdo! Pasemos a la siguiente pregunta ${newUser}!\n
          Aciertos: ${rightAnswers}\n
          Fallos: ${wrongAnswers}`);
        } else if (answer === questions[i]['answer']) {
          questions[i]['status'] = 1;
          console.clear();
          rightAnswers += 1;
          console.log(`Correcto ${newUser}!\n
          Aciertos: ${rightAnswers}\n
          Fallos: ${wrongAnswers}`);
        } else {
          questions[i]['status'] = 2;
          console.clear();
          wrongAnswers += 1;
          console.log(`Oh... es incorrecto ${newUser}
La respuesta correcta es: ${questions[i]['answer']}\n
          Aciertos: ${rightAnswers}\n
          Fallos: ${wrongAnswers}`);
        }
      }
    }

    if ((rightAnswers + wrongAnswers) != 27) {
      return pasapalabraGame();
    } else {
      console.clear();
      console.log(`Fin del Juego ${newUser}!`)
      let actualUser = new rankingUsers(newUser, rightAnswers, wrongAnswers);
            allUsers.push(actualUser);
        
            allUsers.sort(function(a,b) {
                return b.rights - a.rights;
            });

      alert(`Has quedado en ${allUsers.indexOf(actualUser) + 1} posición ${newUser}!
      
      Ranking de usuarios:

      - ${allUsers[0].name}: ${allUsers[0].rights} aciertos y ${allUsers[0].wrongs} fallos.
      - ${allUsers[1].name}: ${allUsers[1].rights} aciertos y ${allUsers[1].wrongs} fallos.
      - ${allUsers[2].name}: ${allUsers[2].rights} aciertos y ${allUsers[2].wrongs} fallos.
      - ${allUsers[3].name}: ${allUsers[3].rights} aciertos y ${allUsers[3].wrongs} fallos.
      - ${allUsers[4].name}: ${allUsers[4].rights} aciertos y ${allUsers[4].wrongs} fallos.
      - ${allUsers[5].name}: ${allUsers[5].rights} aciertos y ${allUsers[5].wrongs} fallos.
      - ${allUsers[6].name}: ${allUsers[6].rights} aciertos y ${allUsers[6].wrongs} fallos.
      - ${allUsers[7].name}: ${allUsers[7].rights} aciertos y ${allUsers[7].wrongs} fallos.
      - ${allUsers[8].name}: ${allUsers[8].rights} aciertos y ${allUsers[8].wrongs} fallos.
      - ${allUsers[9].name}: ${allUsers[9].rights} aciertos y ${allUsers[9].wrongs} fallos.`);

      newGame();
    }
  }

  function newGame() {
    let playAgain = confirm(`Quiere volver a jugar ${newUser}?`);
    if (playAgain) {
      rightAnswers = 0;
      wrongAnswers = 0;
      questions = [];
      gameQuestions();
      pasapalabraGame();
    } else {
        return;
    }
}
}

pasapalabra();

