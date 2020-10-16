// crear y rellenar array actual y crear array futuro
// array actual
var grid = [];
var rows = 10;
var columns = 10;
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
    fGrid[i].length = columns;
}

for(i = 0; i < grid.length; i++){
    for(let j = 0; j < fGrid[i].length; j++){
        fGrid[i][j] = alive;
    }
}
// funciones que interactuan con array

function vivo(grid, fGrid){
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            // fila superior
            let contamos = 0;
            if((i - 1) >= 0){
                if((j - 1) <= 0){
                    if(grid[(i - 1)][(j - 1)] === 1){
                        contamos++;
                    }
                }
                if(grid[(i - 1)][j] === 1){
                    contamos++;
                }
                if((j + 1) <= grid[i].length){
                    if(grid[(i - 1)][(j + 1)] === 1){
                        contamos++;
                    }
                }
            }
            if((j - 1) <= 0){
                if(grid[i][(j - 1)] === 1){
                    contamos++;
                }
            }
            //fila actual
            if((j + 1) <= grid[i].length){
                if(grid[i][(j + 1)] === 1){
                    contamos++;
                }
            }
            if((i + 1) >= grid.length){
                // fila inferior
                if((j - 1) <= 0){
                    if(grid[(i + 1)][(j - 1)] === 1){
                        contamos++;
                    }
                }
                if(grid[(i + 1)][j] === 1){
                    contamos++;
                }
                if((j + 1) <= grid[i].length){
                    if(grid[(i + 1)][(j + 1)] === 1){
                        contamos++;
                    }
                }
            }
            if(grid[i][j] === 0){
                if(contamos === 3){
                    fGrid[i][j] === 0
                } 
            }else{
                if(contamos < 2){
                    fGrid[i][j] === 0;
                }
                if(contamos === 2 || contamos === 3){
                    fGrid[i][j] === 1;
                }
                if(contamos > 3){
                    fGrid[i][j] === 0;
                }   
            }
        }
    }
    return fGrid;
}
vivo(grid, fGrid);
console.log(fGrid);