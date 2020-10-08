'use strict';

function calc(array1) {
	let sum = 0;
	let rest = array1[0];
	let mult = array1[0];
	let div = array1[0];
	for (let i = 0; i < array1.length; i++) {
		sum += array1[i];
		rest -= array1[i];
		mult *= array1[i];
		div /= array1[i];
	}
	let all = [sum, rest + ar[0], mult / ar[0], div * ar[0]];
	return all;
}

function entero(a) {
	if (a % 1 == 0) {
		return true;
	} else {
		return false;
	}
}

function newNumber() {
	while (true) {
		let n = parseFloat(prompt('\nIntroduce un valor a la calculadora', ''));
		if (n == '' || n == null || isNaN(n) == true) {
			console.log('\nEl valor introducido no es válido');
		} else {
			return n;
		}
	}
}

function newValue() {
	while (true) {
		var op = window.confirm('\n¿Quieres introducir otro valor?');
		if (op) {
			ar.push(newNumber());
		} else {
			var resultSum = calc(ar)[0];
			var resultRest = calc(ar)[1];
			var resultMult = calc(ar)[2];
			var resultDiv = calc(ar)[3];
			if (entero(resultSum) == false) {
				resultSum = calc(ar)[0].toFixed(3);
			}
			if (entero(resultRest) == false) {
				resultRest = calc(ar)[1].toFixed(3);
			}
			if (entero(resultMult) == false) {
				resultMult = calc(ar)[2].toFixed(3);
			}
			if (entero(resultDiv) == false) {
				resultDiv = calc(ar)[3].toFixed(3);
			}
			results.push(
				`Suma${[j]}=${resultSum}`,
				`Resta${[j]}=${resultRest}`,
				`Multiplicación${[j]}=${resultMult}`,
				`División${[j]}=${resultDiv}`
			);
			j++;
			ar = [];
			return results.join(', ');
		}
	}
}

console.log('\t-- CALCULADORA PRO --\t');

var results = [];
var ar = [];
var j = 1;

ar.push(newNumber());
console.log(newValue());
while (true) {
	var op1 = window.confirm('\n¿Quieres seguir introduciendo valores?');
	if (op1) {
		ar.push(newNumber());
		console.log(newValue());
	} else {
		break;
	}
}
