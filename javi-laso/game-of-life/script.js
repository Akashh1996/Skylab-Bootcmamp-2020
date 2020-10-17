const container = document.getElementById('grid-container');
const startBtn = document.getElementById('start-button');
const pauseBtn = document.getElementById('pause-button');
const gridWidthInput = document.getElementById('set-grid-width');
const gridHeightInput = document.getElementById('set-grid-height');
const setBtn = document.getElementById('set-button');
const resetBtn = document.getElementById('reset-button');
const generationCounter = document.getElementById('generations');
const borderCheckerBtn = document.getElementById('border-checker');
let rows = 30;
let cols = 40;
let game;
let matrix;

function aliveOrDie (x, y, matrix) {
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
        return true;
    // Any dead cell with three live neighbours becomes a live cell.
    } else if (aliveNeightbours === 3 && matrix[x][y] === 0) {
        return true;
    // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    } 
    
    return false;
}

function newCycle(matrix) {
    const matrixFinalState = matrix.map(element => element.slice());

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let cell = document.getElementById(`${row}-${col}`);
            if (aliveOrDie(row, col, matrix, matrixFinalState)) {
                matrixFinalState[row][col] = 1;
                cell.style.backgroundColor = 'rgb(0, 0, 0)';
            } else {
                matrixFinalState[row][col] = 0;
                cell.style.backgroundColor = 'rgb(173, 173, 173)';
            }
        }
    }

    generationCounter.innerHTML++;
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
            cell.setAttribute('id', `${row}-${col}`);
            cell.style.backgroundColor = cell.getAttribute('value')*1 === 0 ? 'rgb(173, 173, 173)' : 'rgb(0, 0, 0)';
        }
    }
};

function changeCellColor() {
    const id = this.id.split('-');
    const rowValue = id[0];
    const colValue = id[1];
    
    if (this.style.backgroundColor === 'rgb(173, 173, 173)') {
        this.style.backgroundColor = 'rgb(0, 0, 0)';
        matrix[rowValue][colValue] = 1;
    } else if (this.style.backgroundColor === 'rgb(0, 0, 0)') {
        this.style.backgroundColor = 'rgb(173, 173, 173)';
        matrix[rowValue][colValue] = 0;
    }
}

function stopGame () {
    window.clearInterval(game);
}

function playing() {
    matrix = newCycle(matrix);
}

function startGame() {
    game = window.setInterval(playing, 100);
}

function resetGame() {
    stopGame();
    container.innerHTML = '';
    rows = document.getElementById('set-grid-height').value;    
    cols = document.getElementById('set-grid-width').value;
    matrix = createEmptyMatrix(rows, cols);
    makeHTMLmatrix(matrix);
    document.querySelectorAll('.cell').forEach(element => {element.addEventListener('click', changeCellColor, false);});
    gridWidthInput.value = cols;
    gridHeightInput.value = rows;
    generationCounter.innerHTML = 0;
}

function borderChecker() {
    if (borderCheckerBtn.checked === true) {
        document.querySelectorAll('.cell').forEach(element => {element.style.border = ' rgb(0, 0, 0) solid 1px';});
    } else {
        document.querySelectorAll('.cell').forEach(element => {element.style.border = 'none';});
    }
}

gridWidthInput.value = cols;
gridHeightInput.value = rows;
resetGame();

startBtn.addEventListener('click', startGame, false);
pauseBtn.addEventListener('click', stopGame, false);
resetBtn.addEventListener('click', resetGame, false);
borderCheckerBtn.addEventListener('click', borderChecker, false);

// module.exports = newCycle;