const container = document.getElementById('grid-container');
const startBtn = document.getElementById('start-button');
const pauseBtn = document.getElementById('pause-button');
const gridWidthInput = document.getElementById('set-grid-width');
const gridHeightInput = document.getElementById('set-grid-height');
const setBtn = document.getElementById('set-button');
const resetBtn = document.getElementById('reset-button');
let rows = 20;
let cols = 30;
let game;

function aliveOrDie (x, y, matrix, matrixFinalState) {
    let aliveNeightbours = 0;
    let neighbours = [];

    for (let i = x - 1; i < x + 2; i++) {
        if (i >= 0 && i < matrix.length) {
            for (let j = y - 1; j < y + 2; j++) {
                if ((j >= 0 && j < matrix[0].length) && (i !== x || j !== y)) {
                    neighbours.push(matrix[i][j]);
                }
            }
        }
    }

    aliveNeightbours = neighbours.reduce((acc, curr) => acc + curr);

    // Any live cell with two or three live neighbours survives.
    if ((aliveNeightbours === 2 || aliveNeightbours === 3) && matrix[x][y] === 1) {
        matrixFinalState[x][y] = 1;
    // Any dead cell with three live neighbours becomes a live cell.
    } else if (aliveNeightbours === 3 && matrix[x][y] === 0) {
        matrixFinalState[x][y] = 1;
    // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    } else {        
        matrixFinalState[x][y] = 0;
    }    
}

function newCycle(matrix) {
    const matrixFinalState = matrix.map(element => element.slice());

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            aliveOrDie(i, j, matrix, matrixFinalState);
        }
    }

    return matrixFinalState;
}

function createEmptyMatrix(rows, cols) {
    const matrix = [];

    for (let rowValue = 0; rowValue < rows; rowValue++) {
        matrix.push([]);
        for (let colValue = 0; colValue < cols; colValue++) {
            matrix[rowValue].push(0);
        }
    }

    return matrix;
}

function makeHTMLmatrix(matrix) {
    container.style.setProperty('--grid-rows', matrix.length);
    container.style.setProperty('--grid-cols', matrix[0].length);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "cell";
            cell.setAttribute('row-value', `${row}`);
            cell.setAttribute('col-value', `${col}`);
            cell.setAttribute('value', `${matrix[row][col]}`);
            cell.style.backgroundColor = cell.getAttribute('value')*1 === 0 ? 'rgb(173, 173, 173)' : 'rgb(0, 0, 0)';
        }
    }
};

function changeCellColor() {
    const rowValue = this.getAttribute('row-value');
    const colValue = this.getAttribute('col-value');
    
    if (this.style.backgroundColor === 'rgb(173, 173, 173)') {
        this.style.backgroundColor = 'rgb(0, 0, 0)';
        matrix[rowValue][colValue] = 1;
        this.setAttribute('value', 1);
    } else if (this.style.backgroundColor === 'rgb(0, 0, 0)') {
        this.style.backgroundColor = 'rgb(173, 173, 173)';
        matrix[rowValue][colValue] = 0;
        this.setAttribute('value', 0);
    }
}

function stopGame () {
    window.clearInterval(game);
}

function playing() {
    matrix = newCycle(matrix);
    container.innerHTML = '';
    makeHTMLmatrix(matrix);
}

function startGame() {
    game = window.setInterval(playing, 200);
}

let matrix = createEmptyMatrix(rows, cols);
makeHTMLmatrix(matrix);
gridWidthInput.value = cols;
gridHeightInput.value = rows;

let cells = document.querySelectorAll('.cell');
cells.forEach(element => {element.addEventListener('click', changeCellColor, false);});

startBtn.addEventListener('click', startGame, false);
pauseBtn.addEventListener('click', stopGame, false);
resetBtn.addEventListener('click', resetGame, false);

// module.exports = newCycle;