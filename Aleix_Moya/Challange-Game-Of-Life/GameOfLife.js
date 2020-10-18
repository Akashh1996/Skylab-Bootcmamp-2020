function drawGrid(grid){
    var Eden = getElementById(tabla);

    Eden = "<table >";
        for(let i = 0; i < grid.length; i++){
            Eden +="<tr>";
            for(let j = 0; j < grid[i].length; j++){
                Eden +="<td>";
                Eden += grid[i][j];
                Eden+="</td>";
            }
            Eden+="</tr>";
        }
        Eden += "</table>";
}
function getRows() {
    var x = document.getElementById("rows");
    var row = 0;
    row = x.elements[0].value;
    return row;
}
function getColumn() {
    var x = document.getElementById("columns");
    var column = 0;
    column = x.elements[1].value;
    return column;
}
function lazarus(walk){
    walk = 1;
}
function itLives(grid, fGrid){
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
                if((j + 1) < grid[i].length){
                    if(grid[(i - 1)][(j + 1)] === 1){
                        contamos++;
                    }
                }
            }
            if((j - 1) >= 0){
                if(grid[i][(j - 1)] === 1){
                    contamos++;
                }
            }
            //fila actual
            if((j + 1) < grid[i].length){
                if(grid[i][(j + 1)] === 1){
                    contamos++;
                }
            }
            if((i + 1) < grid.length){
                // fila inferior
                if((j - 1) >= 0){
                    if(grid[(i + 1)][(j - 1)] === 1){
                        contamos++;
                    }
                }
                if(grid[(i + 1)][j] === 1){
                    contamos++;
                }
                if((j + 1) < grid[i].length){
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
// crear y rellenar array actual y crear array futuro
// array actual
var grid = [];
var alive = 0;
grid.length = 10 /*getRows()*/;
for (let i = 0; i < grid.length; i++){
    grid[i] = [];
}
    
for(i = 0; i < grid.length; i++){
    grid[i].length = 10/*getColumns()*/;
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
    fGrid[i].length = 10/*getColumns()*/;
}
    
for(i = 0; i < grid.length; i++){
    for(let j = 0; j < fGrid[i].length; j++){
        fGrid[i][j] = alive;
    }
}

// funciones que interactuan con array

itLives(grid, fGrid);
lazarus(grid[1][2]);
