// function gridArray(cols, rows) {
// 	let arr = new Array(cols);
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = new Array(rows);
// 	}
// 	return arr;
// }

// let grid;
// let cols = 20;
// let rows = 20;

// function setGrid() {
// 	grid = gridArray(cols, rows);
// 	for (let i = 0; i < grid.length; i++) {
// 		for (let x = 0; x < grid.length; x++) {
// 			grid[i][x] = 0;
// 		}
// 	}
// }

// setGrid();

function gameOfLife() {
	const prevGen = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	];
	const nextGen = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	];
}

module.exports = gameOfLife;

function test1() {
	const test = [
		[1, 2, 0, 0, 0, 0, 0],
		[4, 3, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	];
	let neigthbors = 0;

	for (let x = 0; x < test.length; x++) {
		console.log(test.length);
		for (let y = 0; y < test[x].length; y++) {
			console.log(test[x][y]);
			console.log(test[x - 1][y]);
			// console.log(test[x - 1][y + 1]);
			// console.log(test[x][y + 1]);
			// console.log(test[x + 1][y + 1]);
			// console.log(test[x + 1][y]);
			// console.log(test[x + 1][y - 1]);
			// console.log(test[x][y - 1]);
			// console.log(test[x - 1][y - 1]);
		}
	}
}

test1();
