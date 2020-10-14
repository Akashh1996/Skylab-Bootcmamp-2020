function largestRectangleInGrid(matrix) {
    let max = 0;
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] === 1) {
                total++;
                if (matrix[i - 1][k] === 1) total++;
                if (matrix[i + 1][k] === 1) total++;
                if (matrix[i][k] === 1) total++;
                if (matrix[i][k] === 1) total++;
            }
        }
    }
}

matrix = [
    [1, 0, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
]


largestRectangleInGrid(matrix);