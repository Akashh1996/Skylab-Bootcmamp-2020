//////////////////////////////////////////////
const gridContainer = document.querySelector('.game__grid');

// const full_w = window.innerWidth;
// const full_h = window.innerHeight;

const resolution = 20;
const cols = 600 / resolution;
const rows = 600 / resolution;
const createTable = document.createElement('table');
createTable.className = 'grid__table';

const gridTable = createTableGrid(cols, rows);

function createTableGrid(col, row) {
	for (let x = 0; x < col; x++) {
		const create_tr = document.createElement('tr');
		create_tr.className = 'grid__rows';
		createTable.appendChild(create_tr);
		for (let z = 0; z < row; z++) {
			const create_td = document.createElement('td');
			create_td.className = 'grid__cols';
			create_td.setAttribute('data-status', '0');
			create_tr.appendChild(create_td);
		}
	}
	gridContainer.appendChild(createTable);
}

const gridCol = document.querySelectorAll('.grid__cols');
const gridRow = document.querySelectorAll('.grid__rows');

gridCol.forEach((element) => {
	element.addEventListener('click', function () {
		if (element.dataset.status === '0') {
			element.style.backgroundColor = 'black';
			element.setAttribute('data-status', '1');
		} else {
			element.style.backgroundColor = 'white';
			element.setAttribute('data-status', '0');
		}
	});
});

function newGame() {
	for (let x = 0; x < gridRow.length; x++) {
		for (let y = 0; y < gridRow[x].cells.length; y++) {
			console.log(gridRow[x].cells[y].dataset.status);
			
		}
	}
}

function countNeighbours() {}

// gridRow[0].cells[0].dataset.status;
