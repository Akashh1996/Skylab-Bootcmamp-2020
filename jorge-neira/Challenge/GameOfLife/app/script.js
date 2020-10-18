////////////////////////////////////////////////
const gridContainer = document.querySelector('.game__grid');

const resolution = 20;
const cols = 600 / resolution;
const rows = 600 / resolution;

// const tr = document.createElement(tr);
// const td = document.createElement(td);
const grid = create2dArray(cols, rows);

function create2dArray(cols, rows) {
	let arr = new Array(cols);
	for (let x = 0; x < arr.length; x++) {
		arr[x] = new Array(rows).fill(0);
	}
	return arr;
}

