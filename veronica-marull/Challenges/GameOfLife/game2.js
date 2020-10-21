var initialState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//var grid;
var generation;
var timer;

function startNewGame(valueInitial){
    
    let grid = valueInitial;
    generation = 1;
    draw(grid); //
    startTimer(grid);
}

function startTimer(stateInicial){
    if (timer !== undefined) {
        clearInterval(timer);
    }
    timer = setInterval(function(){
        nextGen(stateInicial)
    }, 1000, "JavaScript");
}

function nextGen(stateInicial){
    let newState = getNewState(stateInicial);
    let grid = newState;
    draw(grid);
}
    
function getNewState(valueInitial) {    
    let newState = [];
    let grid = valueInitial;
    for (let indexY = 0; indexY < grid.length; indexY++){
        // FILA ACTUAL----->   grid[indexY];
        let newRow = [];
        for (let indexX= 0; indexX < grid[indexY].length; indexX++) {    
            //CELDA ACTUAL  ------>   grid[indexY][indexX];
            let currentCell = grid[indexY][indexX];
            let aliveNeighs = getAliveNeighbors(grid,indexY, indexX);
            let newCellState = getNewStatus(currentCell, aliveNeighs); // retorna 0 o 1
            newRow.push(newCellState);
        }
        newState.push(newRow);
    }
    return newState;
}

function isAlive(cell) { //cell.isAlive(), si la cell es 0= false; si 1=true
    if(cell === 1) {
        return true;
    }else {
        return false;
    }
}

function getNewStatus(stateCurrentCell, numAliveNeighbors) {
    let newStatus = stateCurrentCell;
    if (isAlive(stateCurrentCell)) {
        if (numAliveNeighbors === 2 || numAliveNeighbors === 3){
            newStatus = 1;
        }
        else if(numAliveNeighbors < 2) {
            newStatus = 0;
        }

        else if(numAliveNeighbors > 3) {
            newStatus = 0;
        }
    } 
    else {
        if(numAliveNeighbors === 3) {
            newStatus = 1;
        }
    }
    return newStatus;
}

function getAliveNeighbors(state,y, x) { //devuelve la cantidad de vecinos vivos
    let acumStatus = 0;
    let newX;
    let newY;
    let grid = state;
    for (modificadorY of [-1, 0, 1]) {
        for (modificadorX of [-1, 0, 1]) {
            newY = y + modificadorY;
            newX = x + modificadorX;
            if(cellExists(newY, newX) && (newY, newX) !== (y, x)) {
                acumStatus += grid[newY][newX];
            }

        }
    }
    return acumStatus;
}

function cellExists(y, x){ //chequea que exista la ubicacion
    if(y >= 0 && y < grid.length && x >= 0 && x < grid[0].length){
        return true;
    }
    return false;
}

function draw(state) {
    let grid= state;
    var tableContent = "";

    for (let indexY = 0; indexY < grid.length; indexY++){
        tableContent += "<tr>";
        for (let indexX= 0; indexX < grid[indexY].length; indexX++) {    
            let currentCell = grid[indexY][indexX];
            if(isAlive(currentCell)) {
                tableContent += "<td class='live'>" + currentCell.toString() + "</td>"; 
            } else {
                tableContent += "<td class='dead'>" + currentCell.toString() + "</td>";
            }
            
        }
        tableContent += "</tr>";
    }
    let htmlGrid = document.getElementById("grid");
    htmlGrid.innerHTML = "<table align='center'>" + tableContent + "</table>";
  
}

startNewGame(initialState);

//module.exports = startGame, nextGen