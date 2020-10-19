// FUNCIÓN PARA DEFINIR GRID INICIAL (RANDOM)
function gameOfLife() {
	function newGameGrid() {
		let firstGenGrid = [
			// matriz de 10x10
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,],
			[, , , , , , , , , ,]
		];

		for (let i = 0; i < firstGenGrid.length; i++) {
			for (j = 0; j < firstGenGrid[i].length; j++) {
				firstGenGrid[i][j] = Math.round(Math.random());
			}
		}
		return firstGenGrid;
	}

	// FUNCION PARA RECORRER TODO EL ARRAY Y COMPROBAR SI LA CELDA ESTÁ VIVA O MUERTA

	function nextGen(grid) {
		let nextGenGrid = grid.map((arr) => [...arr]); // crea un duplicado del array
		let nodeCell = document.querySelectorAll('td');
		let pos = 0;

		for (let row = 0; row < grid.length; row++) {
			for (let col = 0; col < grid[row].length; col++) {
				let cell = grid[row][col];
				let neighbourCounter = 0;
				// check a los vecinos
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						if (i === 0 && j === 0) {
							continue;
						}

						let xNeighbour = row + i;
						let yNeighbour = col + j;
						// gestión de los bordes
						if (
							xNeighbour >= 0 &&
							yNeighbour >= 0 &&
							xNeighbour < grid[row].length &&
							yNeighbour < grid.length
						) {
							let currentNeighbour = grid[row + i][col + j];
							if (currentNeighbour === 1) {
								neighbourCounter += 1;
							}
						}
					}
				}
				// underpopulation
				if (neighbourCounter < 2 && cell === 1) {
					nextGenGrid[row][col] = 0;
					// overpopulation
				} else if (neighbourCounter > 3 && cell === 1) {
					nextGenGrid[row][col] = 0;
					// reproduction
				} else if (neighbourCounter === 3 && cell === 0) {
					nextGenGrid[row][col] = 1;
				}
				// representación en nuevo grid
				if (nextGenGrid[row][col] === 1) {
					let tableCell = nodeCell[pos];
					tableCell.style.backgroundColor = 'black';
					pos++;
				} else if (nextGenGrid[row][col] === 0) {
					let tableCell = nodeCell[pos];
					tableCell.style.backgroundColor = 'white';
					pos++;
				}
			}
		}
		return nextGenGrid;
	}

	const newGameButton = document.getElementById('new-game-button');
	const startButton = document.getElementById('start-button');
	const stopButton = document.getElementById('stop-button');

	function gameGeneration() {
		initialGrid = nextGen(initialGrid);
	}

	newGameButton.addEventListener('click', () => {
		initialGrid = newGameGrid();
		nextGen(initialGrid);
	});

	startButton.addEventListener('click', () => {
		setInterval(gameGeneration, 500);
	});

	/* stopButton.addEventListener('click', () => {
		}) */

	let initialGrid;

	return newGameGrid, nextGen, gameGeneration;
}
module.exports = gameOfLife;
