let blinker = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0]
]

let blinkerFinalState = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

function life (array) {
    let neigbours = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            //Calculo vecinos de esa celda
            neigbours = countNeigbours(i, j);
            console.log(neigbours)
           // Aplico reglas segun los vecinos
           if (array[i][j] === 0 && neigbours === 3) {
                blinkerFinalState[i][j] = 1;
           } else if (array[i][j] === 1 && neigbours > 3) {
                blinkerFinalState[i][j] = 0;
           } else if (array[i][j] === 1 && neigbours < 2) {
                 blinkerFinalState[i][j] = 0;
           } else if (array[i][j] === 1 && neigbours === 2 || array[i][j] === 1 && neigbours === 3) {
                blinkerFinalState[i][j] = 1;
           } else {
                blinkerFinalState[i][j] = 0;
           }
           

           // Si reglas es true hago algo sino otra cosa

        }
    }
    
    blinker = blinkerFinalState
    reInitializeFinal ();
    console.log(blinker);
    console.log(blinkerFinalState);
}

function countNeigbours (i, j) {
    let neigbours = 0;
    if (i === 0 && j === 0) {
        if (blinker [i][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j] === 1) {
            neigbours ++;
        }if (blinker [i +1][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === 0 && j === blinker.length -1) {
        if (blinker [i][j -1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j -1] === 1) {
            neigbours ++;
        }if (blinker [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === 0) {
        if (blinker [i][j -1] === 1) {
            neigbours ++;
        }if (blinker [i][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j -1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === blinker.length -1 && j === 0) {
        if (blinker [i-1][j] === 1) {
            neigbours ++;
        }
        if (blinker [i -1][j+1] === 1) {
            neigbours ++;
        }if (blinker [i][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }

    if (i === blinker.length -1 && j === blinker.length -1) {
        if (blinker [i][j-1] === 1) {
            neigbours ++;
        }
        if (blinker [i -1][j-1] === 1) {
            neigbours ++;
        }if (blinker [i-1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (j === 0) {
        if (blinker [i-1][j] === 1) {
            neigbours ++;
        }if (blinker [i -1][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (i === blinker.length -1) {
        if (blinker [i][j -1] === 1) {
            neigbours ++;
        }if (blinker [i -1][j -1] === 1) {
            neigbours ++;
        }
        if (blinker [i -1][j] === 1) {
            neigbours ++;
        }
        if (blinker [i -1][j +1] === 1) {
            neigbours ++;
        }
        if (blinker [i][j +1] === 1) {
            neigbours ++;
        }
        return neigbours;
    }
    if (j === blinker.length -1) {
        if (blinker [i -1][j] === 1) {
            neigbours ++;
        }if (blinker [i -1][j -1] === 1) {
            neigbours ++;
        }
        if (blinker [i][j-1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j -1] === 1) {
            neigbours ++;
        }
        if (blinker [i +1][j] === 1) {
            neigbours ++;
        }
        return neigbours;
    }


    if (blinker [i -1][j -1] === 1) {
        neigbours ++;
    }
    if (blinker [i -1][j] === 1) {
        neigbours ++;
    }
    if (blinker [i -1][j +1] === 1) {
        neigbours ++;
    }
    if (blinker [i][j -1] === 1) {
        neigbours ++;
    }
    if (blinker [i][j +1] === 1) {
        neigbours ++;
    }
    if (blinker [i +1][j -1] === 1) {
        neigbours ++;
    }
    if (blinker [i +1][j] === 1) {
        neigbours ++;
    }
    if (blinker [i +1][j +1] === 1) {
        neigbours ++;
    }
    return neigbours;
}

function reInitializeFinal () {
    blinkerFinalState = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
}

// function lifeRules(neigbours) {
//     if (neigbours >= 2) {
//         return true;
//     }else {
//         return false;
//     }
    
// }

life(blinker);

module.exports = life;
module.exports = countNeigbours;

// 1- itero array
// 2- funcion calcular vecinos de celdas
// 3- aplico reglas
// 4- pintar