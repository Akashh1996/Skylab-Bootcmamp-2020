const container = document.getElementById('grid-container');
const startBtn = document.getElementById('start-button');
const pauseBtn = document.getElementById('pause-button');
const setBtn = document.getElementById('set-button');
const resetBtn = document.getElementById('reset-button');
const generationCounter = document.getElementById('generations');
const borderCheckerBtn = document.getElementById('border-checker');
const speedInput = document.getElementById('speed-input');
const sizeRange = document.getElementById('size-range');
let rows = 30;
let cols = 40;
let generationSpeed = 100;
let game;
let matrix;
let gridWidth;
let gridHeight;

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
    } 
    // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    return false;
}

function newCycle(matrix) {
    const matrixFinalState = matrix.map(element => element.slice());

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let cell = document.getElementById(`${row}-${col}`);
            if (aliveOrDie(row, col, matrix)) {
                matrixFinalState[row][col] = 1;
                cell.style.backgroundColor = `rgb(0, 0, ${Math.floor(Math.random() * (255 - 120 + 1) + 120)})`;
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
    let cellSize = 25;   
    container.style.setProperty('--cell-width', `${cellSize}px`);
    container.style.setProperty('--cell-height', `${cellSize}px`);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let cell = document.createElement('div');
            container.appendChild(cell).className = 'cell';
            cell.setAttribute('id', `${row}-${col}`);
            cell.style.backgroundColor = 'rgb(173, 173, 173)';
        }
    }

    gridWidth = container.clientWidth;

    if (gridWidth > window.innerWidth * 0.8) {
        cellSize = Math.floor(window.innerWidth * 0.9 / cols);
        container.style.setProperty('--cell-width', `${cellSize}px`);    
        container.style.setProperty('--cell-height', `${cellSize}px`);
    }
    
    if (cellSize < 12) {
        borderCheckerBtn.checked = false;
        document.querySelectorAll('.cell').forEach(element => {element.style.border = 'none';});
    }
};

function changeCellColor() {
    const id = this.id.split('-');
    const rowValue = id[0];
    const colValue = id[1];
    
    if (this.style.backgroundColor === 'rgb(173, 173, 173)') {
        this.style.backgroundColor = `rgb(0, 0, ${Math.floor(Math.random() * (255 - 120 + 1) + 120)})`;
        matrix[rowValue][colValue] = 1;
    } else {
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
    game = window.setInterval(playing, generationSpeed);
}

function resetGame() {
    stopGame();
    setSpeed();
    container.innerHTML = '';
    cols = sizeRange.value;    
    rows = cols < 30 ? cols : Math.floor(sizeRange.value * 0.7);
    matrix = createEmptyMatrix(rows, cols);
    makeHTMLmatrix(matrix);
    document.querySelectorAll('.cell').forEach(element => {element.addEventListener('click', changeCellColor, false);});
    generationCounter.innerHTML = 0;
    speedInput.value = Math.floor(1000 / generationSpeed);
}

function borderChecker() {
    if (borderCheckerBtn.checked === true) {
        document.querySelectorAll('.cell').forEach(element => {element.style.border = ' rgb(0, 0, 0) solid 1px';});
    } else {
        document.querySelectorAll('.cell').forEach(element => {element.style.border = 'none';});
    }
}

function setSpeed() {
    generationSpeed = Math.floor(1000 / speedInput.value);
}

speedInput.value = Math.floor(1000 / generationSpeed);
resetGame();

startBtn.addEventListener('click', startGame, false);
pauseBtn.addEventListener('click', stopGame, false);
resetBtn.addEventListener('click', resetGame, false);
borderCheckerBtn.addEventListener('click', borderChecker, false);
speedInput.addEventListener('input', setSpeed);
sizeRange.addEventListener('input', resetGame);


// module.exports = newCycle;