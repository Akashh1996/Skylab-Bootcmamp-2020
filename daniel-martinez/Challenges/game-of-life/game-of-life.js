/*
let rows = document.getElementById("input-rows");
let columns = document.getElementById("input-columns");
let initialState = document.getElementById("input-columns");
*/

window.onload = function() {
    var mouse = false;
    var canvas = document.getElementById("canvas1");
    var contenedor = document.getElementById("Contenedor");
    var cuadritos = [];
    var sizeCuadro = { ancho: 25, alto: 25 };
    var color = "";
    var inputColor = document.getElementById("color");
    var inputSizeCuadros = document.getElementById("sizeCuadros");
  
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");
      if (ctx) {
        function dibujaGrid(disX, disY, anchoLinea, color) {
          ctx.strokeStyle = color;
          ctx.lineWidth = anchoLinea;
          var columnas = [];
          var filas = [];
          for (i = disX; i < canvas.width; i += disX) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
            columnas.push(i);
          }
          for (i = disY; i < canvas.height; i += disY) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(ctx.canvas.width, i);
            ctx.stroke();
            filas.push(i);
          }
          columnas.push(0);
          filas.push(0);
          for (x = 0; x < columnas.length; x++) {
            for (y = 0; y < filas.length; y++) {
              cuadritos.push([columnas[x], filas[y], disX, disY]);
            }
          }
        }
  
        function fillCell(x, y) {
          color = inputColor.value;
          ctx.fillStyle = color;
          for (i = 0; i < cuadritos.length; i++) {
            var cuadro = cuadritos[i];
            if (
              x > cuadro[0] &&
              x < cuadro[0] + cuadro[2] &&
              y > cuadro[1] &&
              y < cuadro[1] + cuadro[3]
            ) {
              ctx.fillRect(
                cuadro[0],
                cuadro[1],
                sizeCuadro.ancho,
                sizeCuadro.alto
              );
              break;
            }
          }
          dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 0.4, "#44414B");
        }
  
        canvas.onmousemove = function(e) {
          if (mouse) {
            var canvaspos = canvas.getBoundingClientRect();
            fillCell(e.clientX - canvaspos.left, e.clientY - canvaspos.top);
          }
        };
  
        canvas.onclick = function(e) {
          var canvaspos = canvas.getBoundingClientRect();
          fillCell(e.clientX - canvaspos.left, e.clientY - canvaspos.top);
        };
  
        canvas.onmousedown = function() {
          mouse = true;
        };
  
        canvas.onmouseup = function() {
          mouse = false;
        };
  
        inputSizeCuadros.addEventListener(
          "change",
          function() {
            cuadritos = [];
            sizeCuadro.ancho = parseInt(this.value);
            sizeCuadro.alto = parseInt(this.value);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
          },
          false
        );
  
        canvas.width = contenedor.offsetWidth - 400;
        dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
      } else {
        alert("No se pudo cargar el contexto");
      }
    }
  };

/*My functions: */

function countNeighbors (i, j, rows, columns, initialState){
    let aliveNeigh = 0;
        if (i === 0 && j===0){
            aliveNeigh += 
        initialState[i][j+1] + 
        initialState[i+1][j] + 
        initialState[i+1][j+1];
        } else if (i === 0 && j === columns-1){
            aliveNeigh += 
        initialState[i+1][j-1] + 
        initialState[i][j-1] + 
        initialState[i+1][j];
        } else if (i === rows-1 && j === columns-1){
            aliveNeigh += 
        initialState[i-1][j] + 
        initialState[i][j-1] + 
        initialState[i-1][j-1];
        } else if (i === rows-1 && j === 0){
            aliveNeigh += 
        initialState[i][j+1] + 
        initialState[i-1][j-1]+ 
        initialState[i-1][j];
        } else if (i === 0){
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j] + 
        initialState[i+1][j+1] + 
        initialState[i][j+1];
        } else if (i === rows-1){
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i-1][j-1] + 
        initialState[i-1][j] + 
        initialState[i-1][j+1] + 
        initialState[i][j+1];
        } else if (j === 0){
            aliveNeigh += 
        initialState[i+1][j] + 
        initialState[i+1][j+1] + 
        initialState[i][j+1] + 
        initialState[i-1][j] + 
        initialState[i-1][j+1];
        } else if (j === columns-1){
            aliveNeigh += 
        initialState[i-1][j] + 
        initialState[i-1][j-1] + 
        initialState[i][j-1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j];
        } else {
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i][j+1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j]+
        initialState[i+1][j+1]+
        initialState[i-1][j]+
        initialState[i-1][j-1]+
        initialState[i-1][j+1];
        }
    return aliveNeigh;
}

function newArray (initialState){
    const newState = initialState.map(element => {return element.slice()});
    return newState;
}

function game (initialState, rows, columns){
    let newState = newArray(initialState);
    debugger;
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            let numOfNeig = countNeighbors(i,j,rows,columns, initialState);
            if (newState[i][j]===1){
                if (numOfNeig !== 2 && numOfNeig !== 3){
                    newState[i][j] = 0;
                }
            } else {
                if (numOfNeig === 3){
                    newState[i][j] = 1;
                }
            }
        }
    }
    return newState;
}

module.exports = game;
