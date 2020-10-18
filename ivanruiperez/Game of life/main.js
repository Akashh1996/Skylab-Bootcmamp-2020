let playing = false;
let sizeCell = 20;
let columns;
let rows;
let grid;
let nextState;
const body = document.body;
const bodyWidth = body.offsetWidth;
const bodyHeight = body.offsetHeight;

function setup() {
  columns = floor((bodyWidth - 100) / sizeCell);
  rows = floor((bodyHeight - 250) / sizeCell);

  let canvas = createCanvas(columns * sizeCell, rows * sizeCell);
  canvas.parent("canvas");

  grid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    grid[i] = new Array(rows);
  }

  nextState = new Array(columns);
  for (i = 0; i < columns; i++) {
    nextState[i] = new Array(rows);
  }

  reset();
  frameRate(5);
}

function draw() {
  if (playing) newGeneration();
  drawGame();
}

function drawGame() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 1) fill(6, 249, 48);
      else fill(255, 255, 255);

      stroke(63, 99, 50);

      rect(i * sizeCell, j * sizeCell, sizeCell - 1, sizeCell - 1);
    }
  }
}

function mouseClicked() {
  let column = floor(mouseX / sizeCell);
  let row = floor(mouseY / sizeCell);

  if (row < 0 || column < 0 || row >= rows || column >= columns) return;

  if (grid[column][row] === 1) {
    grid[column][row] = 0;
  } else {
    grid[column][row] = 1;
  }

  drawGame();
}

function reset() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
      nextState[i][j] = 0;
    }
  }
}
function start() {
  playing = !playing;
}

function newGeneration() {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += grid[x + i][y + j];
        }
      }

      neighbors -= grid[x][y];

      if (grid[x][y] === 1 && neighbors < 2) nextState[x][y] = 0;
      else if (grid[x][y] === 1 && neighbors > 3) nextState[x][y] = 0;
      else if (grid[x][y] === 0 && neighbors === 3) nextState[x][y] = 1;
      else nextState[x][y] = grid[x][y];
    }
  }

  grid = nextState;

  nextState = new Array(columns);
  for (i = 0; i < columns; i++) {
    nextState[i] = new Array(rows);
  }
}
