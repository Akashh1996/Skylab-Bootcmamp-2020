let running = false; 
let celula = 20
let columns; 
let rows;
let board; 
let next; 

const body = document.body; 
const bodyWidth = body.offsetWidth; 
const bodyHeight = body.offsetHeight;

function setup() {
  columns = floor(bodyWidth / celula);
  rows = floor((bodyHeight - 200) / celula);

  let canvas = createCanvas(columns*celula, rows*celula);
  canvas.parent("canvas");

  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }

  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }

  init();
  frameRate(10);

}

function draw() {
  if (running) generate();
  drawGame();
}

function drawGame(){ 
  for ( let i = 0; i < columns; i++) { 

    for ( let j = 0; j < rows; j++) { 

      if ((board[i][j] == 1)) fill(0); 
      else fill(255); 
      stroke(0);
      rect(i * celula, j * celula, celula - 1, celula - 1);
    }
  }
}

function pauseGame(){
    running = !running;
}

function randomInit() {
    for (let i = 0; i < columns; i++) { 
        for (let j = 0; j < rows; j++) {
    
        if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) board[i][j] = 0;
        else board[i][j] = floor(random(2));;
        next[i][j] = 0; 

        }
    }
}

function init(){
  for (let i = 0; i < columns; i++) { 
    for (let j = 0; j < rows; j++) { 
      board[i][j] = 0; 
      next[i][j] = 0; 
    }
  }
}

function mouseClicked() {
    let column = floor(mouseX/celula);
    let row = floor(mouseY/celula);

    if(row < 0 || column < 0 || row >= rows || column >= columns) return;
  
    if(running){
      alert("You must pause the game before modifying its state!");
      return;
    }
  
    if(board[column][row] === 1){
      board[column][row] = 0;
    }else{
      board[column][row] = 1
    }
  
    drawGame();
  }

function generate() {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) { 
        for (let j = -1; j <= 1; j++) { 
          neighbors += board[x+i][y+j]; 
        }
      }
      neighbors -= board[x][y];

      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;        
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;          
      else                                             next[x][y] = board[x][y]; 

    }
  }
  board = next;
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
}

module.exports = generate;