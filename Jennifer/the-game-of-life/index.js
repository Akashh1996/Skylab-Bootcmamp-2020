let contadorid = 0;
let repeatGame;
let matrizTablero = [];
let longitudTablero = 50;
const divContainer = document.getElementById('grid-container');
const buttonStart = document.getElementById('button-start');
const buttonEnd = document.getElementById('button-end');

buttonStart.addEventListener('click', function () {
	// alert('Has clicado en el botón');
	buttonStart.style.display = 'none';
	buttonEnd.style.display = 'block';
	repeatGame = setInterval(function () {
		newGame();
	}, 100);
});

buttonEnd.addEventListener('click', function () {
	buttonStart.style.display = 'block';
	buttonEnd.style.display = 'none';
	clearInterval(repeatGame);
});

for (let i = 0; i < longitudTablero; i++) {
	matrizTablero.push([]);
	for (let j = 0; j < longitudTablero; j++) {
		let position = positionCell(i, j);

		matrizTablero[i][j] = {
			id: contadorid,
			viva: false,
			positionGrid: position,
			nextTurn: undefined
		};

		let celula = document.createElement('div');
		celula.classList.add('celula');
		celula.id = contadorid;

		celula.addEventListener('click', function () {
			if (matrizTablero[i][j].viva === true) {
				matrizTablero[i][j].viva = false;
				celula.classList.remove('celula-viva');
			} else {
				matrizTablero[i][j].viva = true;
				celula.classList.add('celula-viva');
			}
		});

		divContainer.appendChild(celula);
		contadorid++;
	}
}

function positionCell(i, j) {
	if (i === 0 && j === 0) {
		propiedadEspecial = 'esquinaSupIzquierda';
		return propiedadEspecial;
	} else if (i === 0 && j === longitudTablero - 1) {
		propiedadEspecial = 'esquinaSupDerecha';
		return propiedadEspecial;
	} else if (i === longitudTablero - 1 && j === 0) {
		propiedadEspecial = 'esquinaInfIzquierda';
		return propiedadEspecial;
	} else if (i === longitudTablero - 1 && j === longitudTablero - 1) {
		propiedadEspecial = 'esquinaInfDerecha';
		return propiedadEspecial;
	} else if (i === 0 && j >= 1 && j <= longitudTablero - 2) {
		propiedadEspecial = 'bordeSuperior';
		return propiedadEspecial;
	} else if (i === longitudTablero - 1 && j >= 1 && j <= longitudTablero - 2) {
		propiedadEspecial = 'bordeInferior';
		return propiedadEspecial;
	} else if (i >= 1 && i <= longitudTablero - 2 && j === 0) {
		propiedadEspecial = 'bordeIzquierdo';
		return propiedadEspecial;
	} else if (i >= 1 && i <= longitudTablero - 2 && j === longitudTablero - 1) {
		propiedadEspecial = 'bordeDerecho';
		return propiedadEspecial;
	}
}

function newGame() {
	aplicarTurno();
	let contadorVivas;
	for (let i = 0; i < longitudTablero; i++) {
		for (let j = 0; j < longitudTablero; j++) {
			switch (matrizTablero[i][j].positionGrid) {
				case 'esquinaSupIzquierda':
					contadorVivas = esqSupIzq(i, j);
					break;
				case 'esquinaSupDerecha':
					contadorVivas = esqSupDer(i, j);
					break;
				case 'esquinaInfIzquierda':
					contadorVivas = esqInfIzq(i, j);
					break;
				case 'esquinaInfDerecha':
					contadorVivas = esqInfDer(i, j);
					break;
				case 'bordeSuperior':
					contadorVivas = bordSup(i, j);
					break;
				case 'bordeInferior':
					contadorVivas = bordInf(i, j);
					break;
				case 'bordeIzquierdo':
					contadorVivas = bordIzq(i, j);
					break;
				case 'bordeDerecho':
					contadorVivas = bordDer(i, j);
					break;
				default:
					contadorVivas = posCentral(i, j);
					break;
			}

			if (
				matrizTablero[i][j].viva &&
				(contadorVivas < 2 || contadorVivas > 3)
			) {
				//ESTÁ VIVA Y MORIRÁ
				let celula = document.getElementById(matrizTablero[i][j].id);
				matrizTablero[i][j].nextTurn = false;
				celula.classList.add('ultima-ronda');
			} else if (!matrizTablero[i][j].viva && contadorVivas === 3) {
				//ESTÁ MUERTA Y NACERÁ
				matrizTablero[i][j].nextTurn = true;
			}
		}
	}
	segundaRonda = true;
}

function aplicarTurno() {
	for (let i = 0; i < longitudTablero; i++) {
		for (let j = 0; j < longitudTablero; j++) {
			let celula = document.getElementById(matrizTablero[i][j].id);
			if (matrizTablero[i][j].nextTurn === false) {
				matrizTablero[i][j].viva = false;
				celula.classList.remove('ultima-ronda');
				celula.classList.remove('celula-viva');
			} else if (matrizTablero[i][j].nextTurn === true) {
				matrizTablero[i][j].viva = true;
				celula.classList.add('celula-viva');
			}
		}
	}
}
function esqSupIzq(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j + 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function esqSupDer(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function esqInfIzq(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j + 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function esqInfDer(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j - 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function bordSup(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j + 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function bordInf(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j + 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function bordIzq(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function bordDer(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}

function posCentral(i, j) {
	let contadorVivas = 0;

	if (matrizTablero[i][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j - 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i - 1][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j + 1].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j].viva) {
		contadorVivas++;
	}
	if (matrizTablero[i + 1][j - 1].viva) {
		contadorVivas++;
	}

	return contadorVivas;
}
