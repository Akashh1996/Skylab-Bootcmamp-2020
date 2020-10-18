// 'use strict';

// if (state === 0 && neigthbors === 3) {
// 	nextGen[x][y] = 1 // 1
// } else if (state === 1 && (neigthbord < 2 || neigthbord > 3)) {
// 	nextGen[x][y] = 0 // 0
// } else {
// 	nextGen[x][y] = prevGen[x][y]:
// }
// let state = 0;
// const prevGen = [
// 	[10, 20, 30, 40, 50, 60, 70],
// 	[10, 20, 30, 40, 50, 60, 70],
// 	[10, 20, 30, 40, 50, 60, 70],
// 	[10, 20, 31, 41, 51, 60, 70],
// 	[10, 20, 30, 40, 50, 60, 70],
// 	[10, 20, 30, 40, 50, 60, 70],
// 	[10, 20, 30, 40, 50, 60, 70]
// ];

// for (let x = 0; x < prevGen.length; x++) {
// 	for (let y = 0; y < prevGen[x].length; y++) {
// 		state = prevGen[x][y];
// 		console.log(prevGen[x][y]);
// 		console.log('----------->', prevGen[x].length);
// 	}
// }
// function gameOfLife() {}

// let grid;
// let cols;
// let rows;
// let resolution = 15;

// function setup() {
// 	createCanvas(900, 600);
// 	cols = width / resolution;
// 	rows = height / resolution;

// 	grid = create2dArray(cols, rows);
// 	for (let i = 0; i < cols; i++) {
// 		for (let j = 0; j < rows; j++) {
// 			grid[i][j] = Math.floor(random(2));
// 		}
// 	}
// }
// function create2dArray(cols, rows) {
// 	let arr = new Array(cols);
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = new Array(rows);
// 	}
// 	return arr;
// }

// function draw() {
// 	background(0);
// 	textAlign(CENTER, CENTER);

// 	for (let i = 0; i < cols; i++) {
// 		for (let j = 0; j < rows; j++) {
// 			let x = i * resolution;
// 			let y = j * resolution;
// 			if (grid[i][j] == 1) {
// 				fill(255);
// 				stroke(0);
// 				rect(x, y, resolution - 1, resolution - 1);
// 			}
// 		}
// 	}

// 	let next = create2dArray(cols, rows);

// 	// Compute next based on grid
// 	for (let i = 0; i < cols; i++) {
// 		for (let j = 0; j < rows; j++) {
// 			let state = grid[i][j];
// 			// Count live neighbors!
// 			let sum = 0;
// 			let neighbors = countNeighbors(grid, i, j);

// 			if (state == 0 && neighbors == 3) {
// 				next[i][j] = 1;
// 			} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
// 				next[i][j] = 0;
// 			} else {
// 				next[i][j] = state;
// 			}
// 		}
// 	}

// 	grid = next;
// }

// function countNeighbors(grid, x, y) {
// 	let sum = 0;
// 	for (let i = -1; i < 2; i++) {
// 		for (let j = -1; j < 2; j++) {
// 			let col = (x + i + cols) % cols;
// 			let row = (y + j + rows) % rows;
// 			sum += grid[col][row];
// 		}
// 	}
// 	sum -= grid[x][y];
// 	return sum;
// }

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.style.border = '1px solid white';

const resolution = 20;
canvas.width = 1000;
canvas.height = 600;

const rows = canvas.height / resolution;
const cols = canvas.width / resolution;
const grid = create2dArray(rows, cols);

function create2dArray(rows, cols) {
	let arr = new Array(rows);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(cols).fill(0);
	}
	return arr;
}

function startGame() {
	draw(grid);
}
function draw(grid) {
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			// const cell = grid[col][row];
			ctx.beginPath();
			ctx.rect(col * resolution, row * resolution, resolution, resolution);
			ctx.strokeStyle = 'white';
			ctx.stroke();
			ctx.fillStyle = 'gray';
			ctx.fill();
		}
	}
}

startGame();
