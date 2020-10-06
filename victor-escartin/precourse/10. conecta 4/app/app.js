/*El programa arrancará con un panel de 6x7 (7 columnas y 6 filas) vacío, informando que es el turno de las piezas rojas. 
Cuando tire el primer jugador (clicando con el ratón en la columna que quiera) se colocará la ficha de su color en la columna correspondiente y dará el turno al segundo jugador (piezas azules). 
En cualquier momento se podrá reiniciar la partida (clicando al botón "Reiniciar partida") o salir (clicando al botón "Salir"). 

El programa controlará que no se tira sobre una columna llena y también comprobará tras cada jugada si ha ganado alguno de los jugadores o han quedado empates. 

Cuando algún jugador gane o queden en tablas se informará al usuario y se le pedirá si quiere volver a jugar, en ese caso la partida se reiniciará (borraremos el tablero y será el turno de las rojas de nuevo). 

En esta versión el usuario tendrá que hacer las tiradas del jugador 1 y del 2 (como si fueran dos personas jugando desde el mismo ordenador). 


Pro
Se tiene que añadir la opción de jugar contra la máquina. Antes de iniciar la partida se le pedirá al jugador si tiene un compañero con quien jugar o quiere jugar contra la máquina*/

//TODO: Crear Jugador vs CPU;

// Muestra panel principal
document.getElementById("container_menu").style.visibility = "visible";
document.getElementById("container_multiplayer").style.visibility = "hidden";
document.getElementById("container_singleplayer").style.visibility = "hidden";
document.getElementById("container_game").style.visibility = "hidden";

// Muestra panel JUGADOR vs CPU
function singlePlayerMenu() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_multiplayer").style.visibility = "hidden";
  document.getElementById("container_singleplayer").style.visibility = "visible";
  document.getElementById("alert_user2").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "hidden";
}

// Muestra paner 2 JUGADORES
function multiPlayerMenu() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_multiplayer").style.visibility = "visible";
  document.getElementById("container_singleplayer").style.visibility = "hidden";
  document.getElementById("alert_user1").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "hidden";
}

// Juego Jugador 1 vs CPU
function singleGame() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_multiplayer").style.visibility = "hidden";
  document.getElementById("container_singleplayer").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "visible";

  player1 = document.getElementById("player1").value;

  player1 = player1.toUpperCase();
  document.getElementById("p1").innerHTML = player1;

  if (player1 === "") {
    document.getElementById("alert_user2").style.visibility = "visible";
    document.getElementById("container_game").style.visibility = "hidden";
    document.getElementById("container_menu").style.visibility = "hidden";
    document.getElementById("container_multiplayer").style.visibility = "hidden";
    document.getElementById("container_singleplayer").style.visibility = "visible";
  } else {
    document.getElementById("container_game").style.visibility = "visible";
    document.getElementById("container_menu").style.visibility = "hidden";
    document.getElementById("container_multiplayer").style.visibility = "hidden";
    document.getElementById("container_singleplayer").style.visibility = "hidden";
    document.getElementById("alert_user2").style.visibility = "hidden";
  }
}

// Juego Jugador 1 vs Jugador 2
function multiGame() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_multiplayer").style.visibility = "hidden";
  document.getElementById("container_singleplayer").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "visible";

  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  player1 = player1.toUpperCase();
  document.getElementById("p1").innerHTML = player1;

  player2 = player2.toUpperCase();
  document.getElementById("p2").innerHTML = player2;

  if (player1 === "" || player2 === "") {
    document.getElementById("alert_user1").style.visibility = "visible";
    document.getElementById("container_game").style.visibility = "hidden";
    document.getElementById("container_menu").style.visibility = "hidden";
    document.getElementById("container_multiplayer").style.visibility = "visible";
    document.getElementById("container_singleplayer").style.visibility = "hidden";
  } else {
    document.getElementById("container_game").style.visibility = "visible";
    document.getElementById("container_menu").style.visibility = "hidden";
    document.getElementById("container_multiplayer").style.visibility = "hidden";
    document.getElementById("container_singleplayer").style.visibility = "hidden";
    document.getElementById("alert_user1").style.visibility = "hidden";
  }
}

player1 = document.getElementById("player1").value;
("JUGADOR 1");
player2 = document.getElementById("player2").value;
("JUGADOR 2");

player1 = player1.toUpperCase();
document.getElementById("p1").innerHTML = player1;

player2 = player2.toUpperCase();
document.getElementById("p2").innerHTML = player2;

// Elementos DOM
const allCells = document.querySelectorAll(".cell:not(.row-top)");
const chosenColumn = document.querySelectorAll(".cell.row-top");
const playerTurn = document.querySelector(".player-turn");

// Columnas=> se colocan invertidas para que la ficha caiga al final de la columna, siendo el final de la columna la primera fila
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], chosenColumn[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], chosenColumn[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], chosenColumn[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], chosenColumn[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], chosenColumn[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], chosenColumn[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], chosenColumn[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];

// Filas=> La primera fila es de elección, no forma parte del tablero
const topRow = [chosenColumn[0], chosenColumn[1], chosenColumn[2], chosenColumn[3], chosenColumn[4], chosenColumn[5], chosenColumn[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];

// Variables
let gameIsLive = true;
let yellowIsNext = true;

playerTurn.style.backgroundColor = "yellow";

// Detecta tipo de celda
const getClassListArray = (cell) => {
  const classList = cell.classList;

  return [...classList];
};

//Detecta la ubicación de la celda donde se situa el mouse para seleccionar topRow
const getCellLocation = (cell) => {
  const classList = getClassListArray(cell);

  const rowClass = classList.find((className) => className.includes("row"));
  const colClass = classList.find((className) => className.includes("col"));
  const rowIndex = rowClass[4]; //rowCLass[4] detecta el 4º caracter de rowClass: "row=0"=> rowClass[4]=0
  const colIndex = colClass[4];
  const rowNumber = parseInt(rowIndex, 10); //Convierte a type=Number para evitar conflictos por string
  const colNumber = parseInt(colIndex, 10);

  return [rowNumber, colNumber];
};

//Detecta la primera celda no utilizada donde colocar la siguiente ficha
const getFirstOpenCellForColumn = (colIndex) => {
  const column = columns[colIndex];
  const columnWithoutTop = column.slice(0, 6); //excluimos el sexto elemento por ser topRow

  for (const cell of columnWithoutTop) {
    const classList = getClassListArray(cell);
    if (!classList.includes("yellow") && !classList.includes("red")) {
      return cell;
    }
  }

  return null; //Si todas las celdas la columna están llenas, devolvemos null para avidar que esta columna no es elegible y se debe escoger otra
};

//Borra las celdas de topRow que no están seleccionadas
const clearColorFromTop = (colIndex) => {
  const topCell = chosenColumn[colIndex];
  topCell.classList.remove("yellow");
  topCell.classList.remove("red");
};

//Detecta el color de la pieza colocada anteriormente a la que se está jugando
const getColorOfCell = (cell) => {
  const classList = getClassListArray(cell);
  if (classList.includes("yellow")) return "yellow";
  if (classList.includes("red")) return "red";
  return null;
};

// Detecta GANADOR
const checkWinningCells = (cells) => {
  if (cells.length < 4) return false;

  gameIsLive = false;
  for (const cell of cells) {
    cell.classList.add("win");
  }
  document.getElementById("playing").innerHTML = `${yellowIsNext ? player1 : player2} HA GANADO!`;
  playerTurn.style.backgroundColor = yellowIsNext ? "yellow" : "red";
  return true;
};

// Analiza si con la última jugada se ha ganado la partida
const checkStatusOfGame = (cell) => {
  const color = getColorOfCell(cell);
  if (!color) return; //si la pieza anterior está en blanco, seguro que no se finaliza la partida
  const [rowIndex, colIndex] = getCellLocation(cell);

  // Análisis Horizontal
  let winningCells = [cell];
  let rowToCheck = rowIndex;
  let colToCheck = colIndex - 1; //Análisis hacia la izquierda
  while (colToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      colToCheck--;
    } else {
      break;
    }
  }
  colToCheck = colIndex + 1; //Análisis hacia la derecha
  while (colToCheck <= 6) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      colToCheck++;
    } else {
      break;
    }
  }
  let isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  // Análisis vertical
  winningCells = [cell];
  rowToCheck = rowIndex - 1; //analiza hacia arriba
  colToCheck = colIndex;
  while (rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
    } else {
      break;
    }
  }
  rowToCheck = rowIndex + 1; //analiza hacia abajo
  while (rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  // Análisis diagonal /
  winningCells = [cell];
  rowToCheck = rowIndex + 1;
  colToCheck = colIndex - 1; //analiza descendiendo hacia la izquierda
  while (colToCheck >= 0 && rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
      colToCheck--;
    } else {
      break;
    }
  }
  rowToCheck = rowIndex - 1;
  colToCheck = colIndex + 1; //analiza ascendiendo hacia la derecha
  while (colToCheck <= 6 && rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
      colToCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  // Análisis diagonal \
  winningCells = [cell];
  rowToCheck = rowIndex - 1;
  colToCheck = colIndex - 1; //analiza ascendiendo hacia la izquierda
  while (colToCheck >= 0 && rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
      colToCheck--;
    } else {
      break;
    }
  }
  rowToCheck = rowIndex + 1;
  colToCheck = colIndex + 1; //analiza descendiendo hacia la derecha
  while (colToCheck <= 6 && rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
      colToCheck++;
    } else {
      break;
    }
  }
  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  // Detecta EMPATE
  const rowsWithoutTop = rows.slice(0, 6);
  for (const row of rowsWithoutTop) {
    for (const cell of row) {
      const classList = getClassListArray(cell);
      if (!classList.includes("yellow") && !classList.includes("red")) {
        //Si no hay ninguna celda libre de color
        return;
      }
    }
  }

  gameIsLive = false;
  document.getElementById("playing").innerHTML = "JUEGO EMPATADO";
  playerTurn.style.backgroundColor = "orange";
};

// Acción si Mouse se coloca encima de las celdas de elección
const handleCellMouseOver = (e) => {
  if (!gameIsLive) return; //No permite acciones cuando hay un ganador
  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);

  const topCell = chosenColumn[colIndex];
  topCell.classList.add(yellowIsNext ? "yellow" : "red"); //add ubica en el topRow el color indicado
};

// Acción si MOUSE sale de las celdas de elección
const handleCellMouseOut = (e) => {
  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);
  clearColorFromTop(colIndex);
};

// Acción si MOUSE selecciona las celdas de elección
const handleCellClick = (e) => {
  if (!gameIsLive) return;

  document.getElementById("playing").innerHTML = `TURNO PARA ${yellowIsNext ? player2 : player1}`;
  playerTurn.style.backgroundColor = yellowIsNext ? "red" : "yellow";

  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);

  const openCell = getFirstOpenCellForColumn(colIndex);

  if (!openCell) return; //Si openCell es null(no hay celdas libres en esa columna) no permite hacer jugada y cambiar de jugador, por lo que deberemos seleccionar otra opción

  openCell.classList.add(yellowIsNext ? "yellow" : "red");
  checkStatusOfGame(openCell);

  yellowIsNext = !yellowIsNext; //cambio de turno
  clearColorFromTop(colIndex);
  if (gameIsLive) {
    const topCell = chosenColumn[colIndex];
    topCell.classList.add(yellowIsNext ? "yellow" : "red");
  }
};

// Detecta la columna sobre la que se coloca MOUSE para poder mostrar la jugada a realizar
for (const row of rows) {
  for (const cell of row) {
    cell.addEventListener("mouseover", handleCellMouseOver);
    cell.addEventListener("mouseout", handleCellMouseOut);
    cell.addEventListener("click", handleCellClick);
  }
}

function reset() {
  for (const row of rows) {
    for (const cell of row) {
      cell.classList.remove("red");
      cell.classList.remove("yellow");
      cell.classList.remove("win");
    }
  }
  gameIsLive = true;
  yellowIsNext = true;
  document.getElementById("playing").innerHTML = `TURNO PARA ${player1} `;
  playerTurn.style.backgroundColor = "yellow";
}
