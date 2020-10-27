// Funció 1

function gameOfLife(initialMatrix, rows, columns) {
	let newMatrix = copyArray(initialMatrix);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let numNeighbors = countNeighbors(i, j, rows, columns, initialMatrix);
			if (newMatrix[i][j] === 1) {
				if (numNeighbors !== 2 && numNeighbors !== 3) {
					newMatrix[i][j] = 0;
				}
			} else {
				if (numNeighbors === 3) {
					newMatrix[i][j] = 1;
				}
			}
		}
	}
	return newMatrix;
}

function countNeighbors(i, j, rows, columns, newMatrix) {
	let sumAliveNeighbors = 0;
	if (i === 0 && j === 0) {
		sumAliveNeighbors +=
		 newMatrix[i][j + 1] +
		 newMatrix[i + 1][j] +
		 newMatrix[i + 1][j + 1];
	} else if (i === 0 && j === columns - 1) {
		sumAliveNeighbors +=
		 newMatrix[i + 1][j - 1] +
		 newMatrix[i][j - 1] +
		 newMatrix[i + 1][j];
	} else if (i === rows - 1 && j === columns - 1) {
		sumAliveNeighbors +=
		 newMatrix[i - 1][j] +
		 newMatrix[i][j - 1] +
		 newMatrix[i - 1][j - 1];
	} else if (i === rows - 1 && j === 0) {
		sumAliveNeighbors +=
		 newMatrix[i][j + 1] +
		 newMatrix[i - 1][j - 1] +
		 newMatrix[i - 1][j];
	} else if (i === 0) {
		sumAliveNeighbors +=
		 newMatrix[i][j - 1] +
		 newMatrix[i + 1][j - 1] +
		 newMatrix[i + 1][j] +
		 newMatrix[i + 1][j + 1] +
		 newMatrix[i][j + 1];
	} else if (i === rows - 1) {
		sumAliveNeighbors +=
		 newMatrix[i][j - 1] +
		 newMatrix[i - 1][j - 1] +
		 newMatrix[i - 1][j] +
		 newMatrix[i - 1][j + 1] +
		 newMatrix[i][j + 1];
	} else if (j === 0) {
		sumAliveNeighbors +=
		 newMatrix[i + 1][j] +
		 newMatrix[i + 1][j + 1] +
		 newMatrix[i][j + 1] +
		 newMatrix[i - 1][j] +
		 newMatrix[i - 1][j + 1];
	} else if (j === columns - 1) {
		sumAliveNeighbors +=
		 newMatrix[i - 1][j] +
		 newMatrix[i - 1][j - 1] +
		 newMatrix[i][j - 1] +
		 newMatrix[i + 1][j - 1] +
		 newMatrix[i + 1][j];
	} else {
		sumAliveNeighbors +=
		 newMatrix[i][j - 1] +
		 newMatrix[i][j + 1] +
		 newMatrix[i + 1][j - 1] +
		 newMatrix[i + 1][j] +
		 newMatrix[i + 1][j + 1] +
		 newMatrix[i - 1][j] +
		 newMatrix[i - 1][j - 1] +
		 newMatrix[i - 1][j + 1];
	}
	return sumAliveNeighbors;
}

function copyArray(initialMatrix) {
	const newMatrix = initialMatrix.map((array) => {
		return array.slice();
	});

	return newMatrix;
}

// Funció 2

function nextGen(grid, cols, rows) {
    const nextGen = grid.map((arr) => [...arr]);

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid.length; row++) {
            const cell = grid[col][row];
            let numNeighbours = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    const x_cell = col + i;
                    const y_cell = row + j;

                    if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
                        const currentNeighbour = grid[col + i][row + j];
                        numNeighbours += currentNeighbour;
                    }
                }
            }

            if (cell === 1 && numNeighbours < 2) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && numNeighbours > 3) {
                nextGen[col][row] = 0;
            } else if (cell === 0 && numNeighbours === 3) {
                nextGen[col][row] = 1;
            }
        }
    }
    return nextGen;
}

module.exports = nextGen;