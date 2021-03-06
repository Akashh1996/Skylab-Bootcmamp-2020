let canvas;
let ctx;
let dimension;
let cellSize = 15;
let cellMargin = 2;
let cellsPerLine;
let cellsPerRow;
let cells = [];
let colors = new Map();
colors.set("alive", ["#1bbd06", "#b7ff1c"]);
colors.set("dead", "#011627");
colors.set("haveBeenAlive", ["#AEE4FA"]);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];

  cellSize = 15;
  cellMargin = 2;
  canvas.width = dimension[0];
  canvas.height = dimension[1];
  cellsPerLine = Math.floor(canvas.width / (cellSize + cellMargin));
  cellsPerRow = Math.floor(canvas.height / (cellSize + cellMargin));
  cells = [];



  for ( let i = 0; i < cellsPerRow; i++) {
    for ( let n = 0; n < cellsPerLine; n++) {
      let cell = new Map();
      cell.set("isAlive", false);
      cell.set("willLive", false);
      cell.set("haveBeenAlive", false);
      ctx.fillStyle = colors.get("dead");
      cells.push(cell);
      cell.set("x", (cellSize + cellMargin) * n);
      cell.set("y", (cellSize + cellMargin) * i);
      ctx.fillRect(cell.get("x"), cell.get("y"), cellSize, cellSize);
    }
  }

  setNeighbors();

  

  for (let i = 0; i < 650; i++) {
    const cell = cells[randomInt(0, cells.length - 1)];
    cell.set("isAlive", true);
    ctx.fillStyle = colors.get("alive")[randomInt(0, 1)];
    ctx.fillRect(cell.get("x"), cell.get("y"), cellSize, cellSize);
  }
  anim();
}

function setNeighbors() {
  cells.forEach((cell, i) => {
    let neighbors = [];
    if (i != 0) {
      neighbors.push(cells[i - 1]);
    }
    if (i != cells.length - 1) { neighbors.push(cells[i + 1]) };


    if ((i - cellsPerLine) > 0) {
      neighbors.push(cells[i - cellsPerLine]);
      neighbors.push(cells[i - cellsPerLine + 1]);
      if ((i - cellsPerLine - 1) > 0) { neighbors.push(cells[i - cellsPerLine - 1]) };
    }
    if ((i + cellsPerLine) < cells.length) {
      neighbors.push(cells[i + cellsPerLine]);
      neighbors.push(cells[i + cellsPerLine - 1]);
      if ((i + cellsPerLine + 1) < cells.length) { neighbors.push(cells[i + cellsPerLine + 1]) };
    }
    cell.set("neighbors", neighbors);
  });
}

function anim() {
  cells.forEach((cell, i) => {
    const livingNeighbors = cell.get("neighbors").filter(el =>
      el.get("isAlive"));
    cell.set("willLive", (conwayRules(cell, livingNeighbors.length)));
  });

  cells.forEach((cell, i) => {
    if (cell.get("isAlive") === cell.get("willLive")) { return };

    cell.set("isAlive", cell.get("willLive"));

    if (cell.get("isAlive")) {
      ctx.fillStyle = colors.get("alive")[randomInt(0, 1)];
      cell.set("haveBeenAlive", true);
    } else {
      if (cell.get("haveBeenAlive")) {
        ctx.fillStyle = colors.get("haveBeenAlive")[randomInt(0, 2)];
      } else {
        ctx.fillStyle = colors.get("dead");
      }
    }
    ctx.fillRect(cell.get("x"), cell.get("y"), cellSize, cellSize);
  })
  setTimeout(() => requestAnimationFrame(anim), 100);
}

function conwayRules(cell, livingNeighborsNumber) {
  if (cell.get("isAlive")) {
    if (livingNeighborsNumber < 2 || livingNeighborsNumber > 3) {
      return false;
    }
    return true;
  } else {
    if (livingNeighborsNumber === 3) {
      return true;
    }
    return false;
  }
}
