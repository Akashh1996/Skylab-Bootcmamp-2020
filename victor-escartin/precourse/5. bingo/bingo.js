/*Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre).

Para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número. Si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0.

El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X" (solamente se puede cantar línea 1 vez).

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.

Por último, deberá preguntar si desea volver a jugar. Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

Versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que: function()=> Generar Numero Random Bombo function()=> Nuevo turno (Match carton[i] === randomNum) function() => Preguntar Nuevo Turno
*/

var result = 0;
var showCard;

function user() {
  let name = prompt("Por favor, introduce tu nombre:");
  if (name === null || name === "") {
    alert("Debes introducir un nombre de JUGADOR para iniciar el BINGO");
    user();
  } else {
    alert("¡Bienvenido " + name + ", iniciamos el juego!");
    createCard();
    console.log("Tu resultado ha sido: " + result + " intentos");
    menu();
  }
}

function menu() {
  let option = prompt("Indica si quieres JUGAR o SALIR");

  if (option === null) {
    return;
  } else {
    option = option.toString();
    option = option.toLowerCase();
    switch (option) {
      case "jugar":
        createCard();
      case "salir":
        break;
      default:
        alert("Por favor, vuelva a indicar tu elección");
        menu();
    }
  }
}

function createCard() {
  console.log("%c ¡Bienvenido al Bingo Skylab!", "color:blue");
  var card = [];
  for (let i = 0; i < 5; i++) {
    let randNum = Math.ceil(Math.random() * 10);
    if (card.includes(randNum)) {
      i--;
      continue;
    } else {
      card.push(randNum);
    }
  }
  card.sort((a, b) => a - b);
  console.log("%cEsta es tu tarjeta de juego:", "color: blue");
  showCard = card.join();
  console.log(showCard);
  console.log("%c¡Mucha Suerte!", "color: blue");
  bingo(card);
}

function bingo(card) {
  if (confirm("¿Sacamos un número nuevo?")) {
    number = Math.ceil(Math.random() * 10);
    console.log("El número es el " + number);
    result += 1;
  } else {
    return;
  }

  if (card.includes(number)) {
    card[card.indexOf(number)] = "X";
    showCard = card.join();
    console.log(showCard);
    if (card[0] != "X" || card[1] != "X" || card[2] != "X" || card[3] != "X" || card[4] != "X") {
      bingo(card);
    } else {
      console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡LINEA!!!!!!!!!!!!!!!!!!!!");
      console.log("%cHas completado la tarjeta, ¡ENHORABUENA!", "color:blue");
    }
  } else {
    console.log(showCard);
    bingo(card);
  }
}

user();
