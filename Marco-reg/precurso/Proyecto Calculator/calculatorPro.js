function calculator() {
	let numeros = [];
	if (window.confirm('Desea realizar alguna operación?')) {
		while (window.confirm('Desea Introducir un nuevo número?')) {
			numeros.push(GetNumber());
			console.log(numeros);
		}

		if (numeros.length === 1) {
			const raiz = Math.round(Math.sqrt(numeros[0]) * 100) / 100;
			console.log('La raiz cuadrada es:' + raiz);
		} else if (numeros.length > 1) {
			sumaNum(numeros);
			restaNum(numeros);
			multiNum(numeros);
			diviNum(numeros);
		}

		if (window.confirm('Desea realizar una operación adicional?')) {
			calculator();
		}
	}
	return 'Adios';
}
function GetNumber() {
	let userInput = window.prompt('Introducir números');
	//la función isNaN() devuelve true si no es un número, false si lo es.
	if (isNaN(userInput)) {
		console.log('no es un número');
		GetNumber();
	} else {
		let realNumber = parseInt(userInput);
		return realNumber;
	}
}
function sumaNum(numeros) {
	let resultado = 0;
	for (let i = 0; i < numeros.length; i++) {
		resultado += numeros[i];
	}
	console.log('El resultado de la suma es:' + resultado);
}
function restaNum(numeros) {
	let resultado = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		resultado -= numeros[i];
	}
	console.log('El resultado de la resta es:' + resultado);
}
function multiNum(numeros) {
	let resultado = 1;
	for (let i = 0; i < numeros.length; i++) {
		resultado = resultado * numeros[i];
	}
	console.log('El resultado de la multiplicación es:' + resultado);
}
function diviNum(numeros) {
	let resultado = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		resultado = resultado / numeros[i];
	}
	console.log(
		'El resultado de la división es:' + Math.round(resultado * 100) / 100
	);
}

calculator();
