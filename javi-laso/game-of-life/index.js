function aliveOrDie (x, y, matrix, matrixFinalState) {
    let aliveNeightbours = 0;
    let neighbours = [];

    for (let i = x - 1; i < x + 2; i++) {
        if (i < 0 || i >= matrix.length) {
            continue;
        }
        for (let j = y - 1; j < y + 2; j++) {
            if (j < 0 || j >= matrix[0].length|| (i === x && j === y)) {
                continue;
            }
            neighbours.push(matrix[i][j]);
        }
    }

    aliveNeightbours = neighbours.reduce((acc, curr) => acc + curr);

    // Any live cell with two or three live neighbours survives.
    if ((aliveNeightbours === 2 || aliveNeightbours === 3) && matrix[x][y] === 1) {
        matrixFinalState[x][y] = 1;
    } else if (aliveNeightbours === 3 && matrix[x][y] === 0) {
        matrixFinalState[x][y] = 1;
    } else {        
        matrixFinalState[x][y] = 0;
    }    
}

function newCycle(matrix) {
    const matrixFinalState = matrix.map(element => {
        return element.slice();
    });

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            aliveOrDie(i, j, matrix, matrixFinalState);
        }
    }

    return matrixFinalState;
}

const matrix = [
    [0, 1, 0, 0, 0],1
    [1, 1, 1, 1, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1], 
    [0, 0, 0, 1, 0]
];

// console.log(newCycle(matrix));
// console.log(matrix);

module.exports = newCycle;