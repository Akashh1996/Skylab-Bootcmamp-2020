let gameOfLife = Object.create(null);
let deadNeighbours , aliveNeighbours;
let time = 1;
let interval;


gameOfLife.setState = function() {
    for(let y= 0; y < gameOfLife.board.length; y++) {
        for(let x= 0; x < gameOfLife.board[y].length; x++) {
            let currentPosY = y;
            let currentPosX = x;
            let currentNeighbours = gameOfLife.getNeighbours(currentPosY,currentPosX);
            if(gameOfLife.board[y][x] === 1 && (aliveNeighbours.length > 3 || aliveNeighbours.length < 2)){
                 gameOfLife.board[y][x] = 0
            }
            if(gameOfLife.board[y][x] === 0 && (aliveNeighbours.length === 3)) {
                gameOfLife.board[y][x] = 1
            }            
        };
    }
    gameOfLife.printBoard()
}

gameOfLife.incrementSpeed = function() {
    time -= 100;
}

gameOfLife.decreaseSpeed = function() {
    time += 100;
}

gameOfLife.startTimer = function() {
	interval = setTimeout(function tick() {
        gameOfLife.setState()
		interval = setTimeout(tick, time);
	}, time);
}


gameOfLife.startGame = function() {

    let lessSpeed = document.getElementById("lessSpeedBtn") 
    let moreSpeed = document.getElementById("moreSpeedBtn") 
   
    gameOfLife.startTimer();
}


gameOfLife.stop = function() {
    clearTimeout(interval)
}

gameOfLife.setTime = function() {
    
}


gameOfLife.setUp = function(event){
    let value = event.currentTarget.getAttribute("value")
    let pos_x = parseInt(event.currentTarget.getAttribute("position-x"))
    let pos_y = parseInt(event.currentTarget.getAttribute("position-y"))
    
    const newArray = gameOfLife.board.map((value, index_y) => value.map((value,index_x) =>{
        if(index_x === pos_x && index_y ===pos_y){
            return value = +!value
        }else{
            return value
        }
    }));  
    gameOfLife.board = newArray;
    gameOfLife.printBoard();
}

gameOfLife.printBoard = function() {
    let myTable = document.getElementById("mytable");
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    if (myTable) myTable.remove();
    tbl.style.width = '70px';
    tbl.setAttribute('border', '0');
    tbl.setAttribute("id", "mytable");
    let tbdy = document.createElement('tbody');
    gameOfLife.board.forEach((y, index_y) => {
        let row = document.createElement('tr');
        y.forEach((x, index_x)=>{            
            let textNum = x;
            let cell = document.createElement('td')
            let celltoClick = document.createElement('button')
            let cellText = document.createTextNode(textNum);
            celltoClick.setAttribute("value", x );
            celltoClick.setAttribute("position-x", index_x );
            celltoClick.setAttribute("position-y", index_y );
            celltoClick.setAttribute('onclick', 'gameOfLife.setUp(event)' );
            let ClassName = x == 1 ? "liveColor" : "deadColor";
            celltoClick.setAttribute("class", ClassName );
            cell.appendChild(celltoClick)
            celltoClick.appendChild(cellText)
            row.appendChild(cell)        
        })
        tbdy.appendChild(row);
    })
    tbl.appendChild(tbdy);
    body.appendChild(tbl) 
    tbl.setAttribute("border", "0");
}




gameOfLife.getNeighbours = function(y, x) {   
    let neighbours = [
        {position: "TOP_LEFT", x: x-1, y: y-1},
        {position: "TOP", x: x, y: y-1},
        {position: "TOP_RIGHT", x: x+1, y: y-1},
        {position: "LEFT", x: x-1, y: y},
        {position: "RIGHT", x: x+1, y: y},
        {position: "BOTTOM_LEFT", x: x-1, y: y+1},
        {position: "BOTTOM", x: x, y: y+1},
        {position: "BOTTOM_RIGHT", x: x+1, y: y+1}
    ]
    .filter(item => item.x > -1 && item.y > -1 && item.y < gameOfLife.board.length)
    .map(item => {
        item.value = gameOfLife.board[item.y][item.x];
        return item
    });

     deadNeighbours = neighbours.filter(item => item.value === 0);
     aliveNeighbours = neighbours.filter(item => item.value === 1);
    return neighbours;
}

gameOfLife.generate = function() {
    let ySize = Math.floor((window.innerHeight / 20 )- 4);
    let xSize = Math.floor((window.innerWidth / 20) -4);
    console.log({xSize,ySize})
    gameOfLife.board = new Array(ySize).fill().map(() => new Array(xSize).fill(Math.floor((Math.random() * 1) +0.5)));
    gameOfLife.printBoard();
}

window.addEventListener('resize', gameOfLife.generate );


gameOfLife.generate();
gameOfLife.printBoard();