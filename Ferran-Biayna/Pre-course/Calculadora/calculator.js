'use strict';

function calculadora(num1, num2 = undefined) {
	if (num2 === undefined) {
		if (entero(Math.sqrt(num1)) == true) {
			return Math.sqrt(num1);
		} else {
			return Math.sqrt(num1).toFixed(3);
		}
	} else {
		var resultSum = num1 + num2;
		var resultRest = num1 - num2;
		var resultMult = num1 * num2;
		var resultDiv = num1 / num2;
		if (entero(resultSum) == false) {
			resultSum = (num1 + num2).toFixed(3);
		}
		if (entero(resultRest) == false) {
			resultRest = (num1 - num2).toFixed(3);
		}
		if (entero(resultMult) == false) {
			resultMult = (num1 * num2).toFixed(3);
		}
		if (entero(resultDiv) == false) {
			resultDiv = (num1 / num2).toFixed(3);
		}
		var results = [
			`Suma --> ${num1}+${num2}=${resultSum}`,
			`Resta --> ${num1}-${num2}=${resultRest}`,
			`Multiplicación --> ${num1}*${num2}=${resultMult}`,
			`División --> ${num1}/${num2}=${resultDiv}`
		];
		return results;
	}
}
function entero(num) {
	let b = null;
	if (num % 1 == 0) {
		b = true;
	} else {
		b = false;
	}
	return b;
}

console.log('\t-- CALCULADORA --\t');
var n1 = null;
var n2 = null;
var n = null;
while (true) {
	n = parseInt(
		prompt('\n¿Cuántos números quieres introducir? (Elige entre 1 y 2): ', '')
	);
	if (n != 1 && n != 2) {
		console.log('\nLa opción introducida no es correcta. Vuelve a intentarlo');
	} else if (n == 1) {
		while (true) {
			n1 = parseFloat(prompt('\nIntroduce el número: '));
			if (isNaN(n1) == false) {
				console.log(calculadora(n1));
				break;
			} else {
				console.log(
					'\nLa opción introducida no es correcta. Vuelve a intentarlo'
				);
			}
		}
		break;
	} else {
		while (true) {
			n1 = parseFloat(prompt('\nIntroduce el primer número: '));
			n2 = parseFloat(prompt('Introduce el segundo número: '));
			if (isNaN(n1) == false && isNaN(n2) == false) {
				console.log(calculadora(n1, n2));
				break;
			} else {
				console.log(
					'\nLa opción introducida no es correcta. Vuelve a intentarlo'
				);
			}
		}
		break;
	}
}
