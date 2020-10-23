const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const speedBtn = document.querySelector('#speed');
const randomBtn = document.querySelector('.random-btn');
let curSpeed = parseFloat(speedBtn.value);
speedBtn.addEventListener('change', function () {
	curSpeed = parseFloat(speedBtn.value);
});

let gameStatus = false;

let grid;
let cols;
let rows;
let resolution = 20;

function draw() {
	frameRate(curSpeed);
	if (gameStatus) drawGame();
}

function setup() {
	let cnv = createCanvas(1000, 600);
	cnv.style('display', 'block');
	cols = width / resolution;
	rows = height / resolution;

	grid = create2dArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = floor(random(2));
		}
	}
}
function create2dArray(cols, rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function drawGame() {
	background(0);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * resolution;
			let y = j * resolution;
			if (grid[i][j] == 1) {
				fill(0);
				stroke(255, 204, 0);
				strokeWeight(1);
				rect(x, y, resolution - 1, resolution - 1);
			}
		}
	}

	let next = create2dArray(cols, rows);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let state = grid[i][j];
			let neighbors = countNeighbors(grid, i, j);

			if (state == 0 && neighbors == 3) {
				next[i][j] = 1;
			} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
				next[i][j] = 0;
			} else {
				next[i][j] = state;
			}
		}
	}
	grid = next;
}

function countNeighbors(grid, x, y) {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[x][y];
	return sum;
}

startBtn.addEventListener('click', function () {
	gameStatus = true;
});
pauseBtn.addEventListener('click', function () {
	gameStatus = false;
});
randomBtn.addEventListener('click', function () {
	gameStatus = false;
	setup();
});
