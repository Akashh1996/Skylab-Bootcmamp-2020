// Variables

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 20;
let inputNewGrid = document.getElementById('sizeGrid');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
canvas.width = document.getElementById('sizeGrid').value;
canvas.height = document.getElementById('sizeGrid').value;

let cols = canvas.width / resolution;
let rows = canvas.height / resolution;

// Grid size

// new Grid

let grid = buildGrid();
render(grid);

function buildGrid() {
	return new Array(rows)
		.fill(null)
		.map(() =>
			new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
		);
}

function render(grid) {
	for (let col = 0; col < grid.length; col++) {
		for (let row = 0; row < grid.length; row++) {
			const cell = grid[col][row];

			ctx.beginPath();
			ctx.rect(col * resolution, row * resolution, resolution, resolution);
			ctx.fillStyle = cell ? 'black' : 'white';
			ctx.stroke();
			ctx.fill();
		}
	}
}

inputNewGrid.addEventListener('change', function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = this.value;
	canvas.height = this.value;
	cols = canvas.width / resolution;
	rows = canvas.height / resolution;
	grid = buildGrid();
	render(grid);
});

// GAME

start.addEventListener('click', () => {

    requestAnimationFrame(update);

    function update() {
		grid = nextGen(grid);
        render(grid);
        requestAnimationFrame(update);
	}

	function nextGen(grid) {
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

});

