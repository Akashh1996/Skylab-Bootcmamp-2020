
function countNeighbors (i, j, rows, columns, initialState){
    let aliveNeigh = 0;
        if (i === 0 && j===0){
            aliveNeigh += 
        initialState[i][j+1] + 
        initialState[i+1][j] + 
        initialState[i+1][j+1];
        } else if (i === 0 && j === columns-1){
            aliveNeigh += 
        initialState[i+1][j-1] + 
        initialState[i][j-1] + 
        initialState[i+1][j];
        } else if (i === rows-1 && j === columns-1){
            aliveNeigh += 
        initialState[i-1][j] + 
        initialState[i][j-1] + 
        initialState[i-1][j-1];
        } else if (i === rows-1 && j === 0){
            aliveNeigh += 
        initialState[i][j+1] + 
        initialState[i-1][j-1]+ 
        initialState[i-1][j];
        } else if (i === 0){
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j] + 
        initialState[i+1][j+1] + 
        initialState[i][j+1];
        } else if (i === rows-1){
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i-1][j-1] + 
        initialState[i-1][j] + 
        initialState[i-1][j+1] + 
        initialState[i][j+1];
        } else if (j === 0){
            aliveNeigh += 
        initialState[i+1][j] + 
        initialState[i+1][j+1] + 
        initialState[i][j+1] + 
        initialState[i-1][j] + 
        initialState[i-1][j+1];
        } else if (j === columns-1){
            aliveNeigh += 
        initialState[i-1][j] + 
        initialState[i-1][j-1] + 
        initialState[i][j-1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j];
        } else {
            aliveNeigh += 
        initialState[i][j-1] + 
        initialState[i][j+1] + 
        initialState[i+1][j-1] + 
        initialState[i+1][j]+
        initialState[i+1][j+1]+
        initialState[i-1][j]+
        initialState[i-1][j-1]+
        initialState[i-1][j+1];
        }
    return aliveNeigh;
}

function newArray (initialState){
    const newState = initialState.map(element => {return element.slice()});
    return newState;
}

function game (initialState, rows, columns){
    let newState = newArray(initialState);
    debugger;
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            let numOfNeig = countNeighbors(i,j,rows,columns, initialState);
            if (newState[i][j]===1){
                if (numOfNeig !== 2 && numOfNeig !== 3){
                    newState[i][j] = 0;
                }
            } else {
                if (numOfNeig === 3){
                    newState[i][j] = 1;
                }
            }
        }
    }
    return newState;
}