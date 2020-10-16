// crear y rellenar array actual y crear array futuro
// array actual
var grid = [];
var rows = 2;
var columns = 2;
var alive = 0;
grid.length = rows;
for (let i = 0; i < grid.length; i++){
    grid[i] = [];
}

for(i = 0; i < grid.length; i++){
    grid[i].length = columns;
}

for(i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        grid[i][j] = alive;
    }
}
console.log(grid);
var fGrid = [];
for (let i = 0; i < grid.length; i++){
    fGrid[i] = [];
}

for(i = 0; i < grid.length; i++){
    grid[i].length = columns;
}

for(i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        grid[i][j] = alive;
    }
}
// funciones que interactuan con array

function sobrevivo(array, futureArray){
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            // fila superior
            let contamos = 0;
            if(grid[i - 1][j - 1] === 1){
                contamos++;
            }
            if(grid[i - 1][j] === 1){
                contamos++;
            }
            if(grid[i - 1][j + 1] === 1){
                contamos++;
            }
            //fila actual
            if(grid[i][j - 1] === 1){
                contamos++;
            }
            if(grid[i][j + 1] === 1){
                contamos++;
            }
            // fila inferior
            if(grid[i + 1][j - 1] === 1){
                contamos++;
            }
            if(grid[i + 1][j] === 1){
                contamos++;
            }
            if(grid[i + 1][j + 1] === 1){
                contamos++;
            }
            if(grid[i][j] === 0){
                if(contamos === 3){
                    grid[i][j] === 0
                } 
            }else{
                if(contamos < 2){
                    grid[i][j] === 0;
                }
                if(contamos === 2 || contamos === 3){
                    grid[i][j] === 1;
                }
                if(contamos > 3){
                    grid[i][j] === 0;
                }   
            }
        }
    }
}