const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let startButton = document.getElementById('pause-button');
let playButton = document.getElementById('play-button');
let cicles = document.getElementById('cicles-count');
let simulationRunning = false;
const width = 1300;
const height = 600;
const size = width + height;
const scale = 6;
const resolution = Math.round(size / scale);
cicles.innerText = 0;

function playGame() {
    startButton.innerText = 'Pause';
    if (simulationRunning === false) {
        simulationRunning = true;
        cicles.innerText = -1;
        setup();
        randomCells();
        drawCells();
        
        setInterval(function() {
            if (simulationRunning) {
                nextStep();
                drawCells();
            }
        }, 150);
    };
};

function setup() {
    canvas.width = width;
    canvas.height = height;
    context.scale(scale, scale);
    context.fillStyle = 'black';
    cells = createCells();
};

function createCells() {
    let rows = new Array(resolution);
    for (let x = 0; x < resolution; x++) {
        let cols = new Array(resolution);
        for (let y = 0; y < resolution; y++) {
            cols[y] = false;
        };
        rows[x] = cols;
    };
    cicles.innerText++;
    return rows;
};

function randomCells() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (Math.random() > 0.5) cells[x][y] = true;
        };
    };
};

function drawCells() {
    context.fillStyle = "white";
    context.fillRect(0, 0, resolution, resolution);
    context.fillStyle = "black";

    for( let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (cells[x][y]) {
                context.fillRect(x, y, 0.7, 0.7);
            };
        };
    };
};

function nextStep() {
    let newCells = createCells();
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            let neighbours = getNeighbourCount(x, y);
            if (cells[x][y] && (neighbours === 2 || neighbours === 3)) {
                newCells[x][y] = true;
            } else if (!cells[x][y] && neighbours === 3) {
                newCells[x][y] = true;
            };
        };
    };
    cells = newCells;
};

function getNeighbourCount(x, y) {
    let aliveNeighbours = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (j === 0 && i === 0) continue;
            if (x + i < 0 || x + i > resolution - 1) continue;
            if (y + j < 0 || y + j > resolution - 1) continue;
            if (cells[x + i][y + j]) aliveNeighbours++;
        };
    };
    return aliveNeighbours;
};

function clearButton() {
    if (simulationRunning) {
        simulationRunning = !simulationRunning;
    };
    cicles.innerText = 0;
    context.fillStyle = "white";
    context.fillRect(0, 0, resolution, resolution);
};

function pauseResume() {
    simulationRunning = !simulationRunning;
    if (simulationRunning) {
       startButton.innerText = 'Pause';
    } else {
        startButton.innerText = 'Resume';
    };
    drawCells();
};

function stepByStep() {
    if (simulationRunning) {
        simulationRunning = !simulationRunning;
    }
    startButton.innerText = 'Resume';
    nextStep();
    drawCells();
};

function randomize() {
    if (simulationRunning) {
        simulationRunning = !simulationRunning
    };
    startButton.innerText = 'Pause';
    cicles.innerText = -1;
    cells = createCells();
    randomCells();
    drawCells();
}