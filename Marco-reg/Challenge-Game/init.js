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
  
    
  
    for (let i = 0; i < 1000; i++) {
      const cell = cells[randomInt(0, cells.length - 1)];
      cell.set("isAlive", true);
      ctx.fillStyle = colors.get("alive")[randomInt(0, 1)];
      ctx.fillRect(cell.get("x"), cell.get("y"), cellSize, cellSize);
    }
    anim();
}

  module.exports=init();