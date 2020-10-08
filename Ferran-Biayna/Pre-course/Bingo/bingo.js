'use strict';

function bingo() {
	console.log('-- SKYLAB BINGO --');
	i = true;
	while (i === true) {
		let nombre = prompt('Bienvenido a Skylab Bingo. ¿Cómo te llamas?', '');
		if (nombre === null || nombre === '' || isNaN(nombre) === false) {
			alert('El valor introducido no es correcto. Vuelve a intentarlo');
		} else {
			console.log(`¡Un placer saludarte, ${nombre}!`);
			i = false;
		}
	}
	pasarTurno();
	while (true) {
		op = window.confirm(
			`${nombre}, ¿quieres volver a jugar?\nSI (Aceptar) / NO (Cancelar)`
		);
		if (op) {
			turno = 0;
			bola = 0;
			numeros = [];
			bing = false;
			linea = false;
			pasarTurno();
		} else {
			return '¡Hasta Luego!';
		}
	}
}

function nuevoCarton() {
	carton.fila1.splice(0, 5);
	carton.fila2.splice(0, 5);
	carton.fila3.splice(0, 5);
	for (i = 0; i < 5; i++) {
		c = 0;
		while (c === 0) {
			z = 0;
			s = Math.floor(Math.random() * 90);
			for (j = 0; j <= carton.fila1.length; j++) {
				if (s === carton.fila1[j] || s === 0) {
					z = 1;
				}
			}
			if (z === 0) {
				c = 1;
			}
		}
		carton.fila1.push(s);
	}
	for (i = 0; i < 5; i++) {
		c = 0;
		while (c === 0) {
			z = 0;
			s = Math.floor(Math.random() * 90);
			for (j = 0; j <= carton.fila2.length; j++) {
				if (s === carton.fila1[j] || s === carton.fila2[j] || s === 0) {
					z = 1;
				}
			}
			if (z === 0) {
				c = 1;
			}
		}
		carton.fila2.push(s);
	}
	for (i = 0; i < 5; i++) {
		c = 0;
		while (c === 0) {
			z = 0;
			s = Math.floor(Math.random() * 90);
			for (j = 0; j <= carton.fila3.length; j++) {
				if (
					s === carton.fila1[j] ||
					s === carton.fila2[j] ||
					s === carton.fila3[j] ||
					s === 0
				) {
					z = 1;
				}
			}
			if (z === 0) {
				c = 1;
			}
		}
		carton.fila3.push(s);
	}
	return `- Cartón -\n${carton.fila1.join(', ')}\n${carton.fila2.join(
		', '
	)}\n${carton.fila3.join(', ')}\n`;
}

function nuevoNumero() {
	while (true) {
		c = 0;
		bola = Math.floor(Math.random() * 90);
		for (i = 0; i < numeros.length; i++) {
			if (bola === numeros[i]) {
				c = 1;
			}
		}
		if (bola != 0 && c === 0) {
			numeros.push(bola);
			return bola;
		}
	}
}

function nuevoTurno() {
	turno++;
	console.log(`-- Turno ${turno} --`);
	bola = nuevoNumero();
	console.log(`Bola con número ${bola}`);
	for (i = 0; i < 5; i++) {
		if (carton.fila1[i] === bola) {
			carton.fila1[i] = 'X';
		} else if (carton.fila2[i] === bola) {
			carton.fila2[i] = 'X';
		} else if (carton.fila3[i] === bola) {
			carton.fila3[i] = 'X';
		}
		var fila1 = carton.fila1.toString();
		var fila2 = carton.fila2.toString();
		var fila3 = carton.fila3.toString();
		if (
			(fila1 === 'X,X,X,X,X' ||
				fila2 === 'X,X,X,X,X' ||
				fila3 === 'X,X,X,X,X') &&
			linea === false
		) {
			linea = true;
			console.log(
				`- Cartón -\n${carton.fila1.join(', ')}\n${carton.fila2.join(
					', '
				)}\n${carton.fila3.join(', ')}\n`
			);
			console.log(`¡LÍNEA! En el turno ${turno}`);
			return '';
		}
		if (
			fila1 === 'X,X,X,X,X' &&
			fila2 === 'X,X,X,X,X' &&
			fila3 === 'X,X,X,X,X'
		) {
			bing = true;
			console.log(
				`- Cartón -\n${carton.fila1.join(', ')}\n${carton.fila2.join(
					', '
				)}\n${carton.fila3.join(', ')}\n`
			);
			console.log(
				`¡BINGO!\nEnhorabuena, has completado el bingo en ${turno} turnos`
			);
			return '';
		}
	}
	console.log(`Este es el estado de tu cartón en el turno ${turno}`);
	console.log(
		`- Cartón -\n${carton.fila1.join(', ')}\n${carton.fila2.join(
			', '
		)}\n${carton.fila3.join(', ')}\n`
	);
}

function pasarTurno() {
	console.log('Este es tu cartón');
	console.log(nuevoCarton());
	i = true;
	while (i === true) {
		op = window.confirm(
			'¿Quieres canviar el cartón?\nSI (Aceptar) / NO (Cancelar)'
		);
		if (op) {
			console.log('Este es tu nuevo cartón');
			console.log(nuevoCarton());
		} else {
			i = false;
		}
	}
	while (bing === false) {
		op = window.confirm(
			'¿Quieres pasar al siguiente turno?\nSI (Aceptar) / NO (Cancelar)'
		);
		if (op) {
			nuevoTurno();
		} else {
			console.log(`Este es el estado de tu cartón en el turno ${turno}`);
			console.log(
				`- Cartón -\n${carton.fila1.join(', ')}\n${carton.fila2.join(
					', '
				)}\n${carton.fila3.join(', ')}\n`
			);
		}
	}
}

var i = null;
var j = null;
var z = null;
var s = null;
var c = null;
var op = null;
var turno = 0;
var bola = 0;
var numeros = [];
var bing = false;
var linea = false;
var carton = {
	fila1: [],
	fila2: [],
	fila3: []
};
bingo();
