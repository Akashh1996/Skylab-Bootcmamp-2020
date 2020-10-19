/*
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const resolution = 20;
const inputNewGrid = document.getElementById('sizeGrid');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
canvas.width = document.getElementById('sizeGrid').value;
canvas.height = document.getElementById('sizeGrid').value;
const cols = canvas.width / resolution;
const rows = canvas.height / resolution;
var input = document.querySelector('#sizeGrid');
if (input) {
  var etiqueta = document.querySelector('#etiqueta');
  if (etiqueta) {
    etiqueta.innerHTML = input.value;
    input.addEventListener('input', function() {
      etiqueta.innerHTML = input.value;
    }, false);
  }
}
// Grid size
// new Grid
inputNewGrid.addEventListener('change', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = this.value;
  canvas.height = this.value;
  let grid = buildGrid();
  render(grid);
});
let grid = buildGrid();
render(grid);
function buildGrid() {
    return new Array(canvas.width / resolution)
        .fill(null)
        .map(() =>
            new Array(canvas.width / resolution)
                .fill(null)
                .map(() => Math.floor(Math.random() * 2))
        );
}
function render(grid) {
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid.length; row++) {
            const cell = grid[col][row];
            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution);
            ctx.fillStyle = cell ? 'black' : 'white';
            ctx.stroke();
            ctx.fill();
        }
    }
}
// GAME
start.addEventListener('click', () => {
    requestAnimationFrame(update);
    function update() {
        grid = nextGen(grid);
        render(grid);
        requestAnimationFrame(update);
    }
    function nextGen(grid) {
        const nextGen = grid.map((arr) => [...arr]);
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid.length; row++) {
                const cell = grid[col][row];
                let numNeighbours = 0;
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if (i === 0 && j === 0) {
                            continue;
                        }
                        const x_cell = col + i;
                        const y_cell = row + j;
                        if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
                            const currentNeighbour = grid[col + i][row + j];
                            numNeighbours += currentNeighbour;
                        }
                    }
                }
                if (cell === 1 && numNeighbours < 2) {
                    nextGen[col][row] = 0;
                } else if (cell === 1 && numNeighbours > 3) {
                    nextGen[col][row] = 0;
                } else if (cell === 0 && numNeighbours === 3) {
                    nextGen[col][row] = 1;
                }
            }
        }
        return nextGen;
    }
});
*/

//My functions:

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