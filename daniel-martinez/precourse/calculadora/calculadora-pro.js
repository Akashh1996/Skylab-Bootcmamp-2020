function calculatorPro() {
	var parameters = [];
	var solutions = [];
	var i = 1;
	while (i !== 0) {
		var newNumber = prompt(
			'Introduzca un número (o pulse cancelar si ya ha introducido todos)'
		);
		if (newNumber === null) {
			i = 0;
		} else if (isNaN(Number(newNumber))) {
			return console.log('Los parámetros a introducir deben ser números.');
		} else {
			parameters.push(Number(newNumber));
		}
	}
	solutions[0] = 'Suma 1: ' + sum(parameters);
	solutions[1] = 'Resta 1: ' + rest(parameters);
	solutions[2] = 'Producto 1: ' + mult(parameters);
	solutions[3] = 'Cociente 1: ' + div(parameters);
	console.log(solutions);
	seguir(solutions);
}

function seguir(solutions) {
	//Funcion para preguntar si se desea realizar más calculos
	switch (prompt('Desea realizar más calculos? (si/no)')) {
		case 'si':
			var param2 = [];
			var j = 1;
			while (j !== 0) {
				var newNumber2 = prompt(
					'Introduzca un número (o pulse cancelar si ya ha introducido todos)'
				);
				if (newNumber2 === null) {
					j = 0;
				} else if (isNaN(Number(newNumber2))) {
					return console.log('Los parámetros a introducir deben ser números.');
				} else {
					param2.push(Number(newNumber2));
				}
			}
			calc2(solutions, param2);
			break;
		case 'no':
			console.log('Bye!');
			break;
	}
}

function calc2(param1, param2) {
	//Funcion para añadir más resultados en caso de responder si
	var num = param1.length / 4 + 1;
	var newSol = [];
	newSol[0] = 'Suma ' + num + ': ' + sum(param2);
	newSol[1] = 'Resta ' + num + ': ' + rest(param2);
	newSol[2] = 'Producto ' + num + ': ' + mult(param2);
	newSol[3] = 'Cociente ' + num + ': ' + div(param2);
	newSol = param1.concat(newSol);
	console.log(newSol);
	seguir(newSol);
}

function sum(param) {
	//Funcion para sumar los elementos de un array
	var acc = 0;
	for (var i = 0; i < param.length; i++) {
		acc += param[i];
	}
	var result = parseFloat(acc.toFixed(3));
	return result;
}

function rest(param) {
	//Funcion para restar los elementos de un array
	var acc = param[0];
	for (var i = 1; i < param.length; i++) {
		acc -= param[i];
	}
	var result = parseFloat(acc.toFixed(3));
	return result;
}

function mult(param) {
	//Funcion para multiplicar los elementos de un array
	var acc = param[0];
	for (var i = 1; i < param.length; i++) {
		acc *= param[i];
	}
	var result = parseFloat(acc.toFixed(3));
	return result;
}

function div(param) {
	//Funcion para dividir los elementos de un array
	var acc = param[0];
	for (var i = 1; i < param.length; i++) {
		acc /= param[i];
	}
	var result = parseFloat(acc.toFixed(3));
	return result;
}

calculatorPro();
