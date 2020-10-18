
let playing = false;
let sizeCell = 20;
let columns;
let rows;
let grid;
let nextState;
const body = document.body;
const bodyWidth = body.offsetWidth;
const bodyHeight = body.offsetHeight;

// Slider
const sliderValue = document.querySelector("#sliderValue");
const slidertext = document.querySelector("#sliderText");

sliderValue.oninput=()=>{
  slidertext.innerHTML=sliderValue.value;
  sizeCell=parseInt(sliderValue.value)
  return setup();
}


function setup() {
  columns = floor((bodyWidth -100) / sizeCell);
  rows = floor((bodyHeight - 250) / sizeCell);

  let canvas = createCanvas(columns*sizeCell, rows*sizeCell);
  canvas.parent("canvas");

  grid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    grid[i] = new Array(rows);
  }

  nextState = new Array(columns);
  for (i = 0; i < columns; i++) {
    nextState[i] = new Array(rows);
  }

  newGame();
  frameRate(10);
}

function draw() {
  if (playing) newGeneration();
  drawGame();
}

function drawGame(){
  for ( let i = 0; i < columns; i++) {
    for ( let j = 0; j < rows; j++) {
      if ((grid[i][j] === 1)) fill(120, 252, 175); // Alive Cell color
      else fill(0); //Dead Cell color

      stroke(2, 109, 11); //Border color

      rect(i * sizeCell, j * sizeCell, sizeCell - 1, sizeCell - 1); // draw Grid
    }
  }
}


function mouseClicked() {
  let column = floor(mouseX/sizeCell)
  let row = floor(mouseY/sizeCell)

  if(row < 0 || column < 0 || row >= rows || column >= columns) return;

  if(playing){
    alert("Debes pausar el juego antes de modificar su estado");
    return;
  }

  if(grid[column][row] === 1){
    grid[column][row] = 0;
  }else{
    grid[column][row] = 1
  }

  drawGame();
}

function newGame(){
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0; // Current state as Dead Cell
      nextState[i][j] = 0; // NextState as Dead Cell
    }
  }
}

function play(){
  playing = !playing;
}

function randomGame() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
 
      if (i === 0 || j === 0 || i === columns - 1 || j === rows - 1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = floor(random(2));
      }

      nextState[i][j] = 0;
    }
  }
}

function keyPressed(e) {
  if(e.keyCode === 80) play();
  if(e.keyCode === 67) newGame();
  if(e.keyCode === 82) randomGame();
}


function newGeneration() {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {

      let neighbors = 0;
      for (let i = -1; i <= 1; i++) { 
        for (let j = -1; j <= 1; j++) { 
          neighbors += grid[x+i][y+j]; 
        }
      }

      neighbors -= grid[x][y];

      if ((grid[x][y] === 1) && (neighbors <  2)) nextState[x][y] = 0;              // Current cell dies by loneliness
      else if ((grid[x][y] === 1) && (neighbors >  3)) nextState[x][y] = 0;         // Current cell dies by overpopulation
      else if ((grid[x][y] === 0) && (neighbors === 3)) nextState[x][y] = 1;        // New cell born by its neighbors
      else nextState[x][y] = grid[x][y];                                            // Cell in the same state
    }
  }

  grid = nextState;

  nextState = new Array(columns);
  for (i = 0; i < columns; i++) {
    nextState[i] = new Array(rows);
  }
}





