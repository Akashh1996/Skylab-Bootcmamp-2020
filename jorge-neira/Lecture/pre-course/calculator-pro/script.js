let numbersToCalc = 0;
let userValues = [];
let calcUserResult = [];
let userCalcLastCheck = [];
let finalResult = [];

//* Inicio del programa "proCalulator()"  */

const proCalculator = () => {
	let checkIfNewCalc = confirm('¿Desea introducir nuevos numeros?');
	checkIfNewCalc == true ? getNumbers() : console.log('Hasta luego!');
};

function getNumbers() {
	userValues = [];
	numbersToCalc = parseFloat(prompt('¿Cuantos numeros desea introducir?'));

	if (isNaN(numbersToCalc)) {
		alert('Solo se admiten numeros');
		proCalculator();
	} else if (numbersToCalc == 1) {
		const getUserValues = parseFloat(prompt(`Introduce el Numero`));
		if (isNaN(getUserValues)) {
			getNumbers();
		} else {
			userValues.push(Math.sqrt(getUserValues).toFixed(2));
			finalResult.push(
				`La raiz cuadrada de ${getUserValues} es: ${userValues}`
			);
			return showResult();
		}
	} else {
		let counter = 0;
		while (counter < numbersToCalc) {
			const getUserValues = prompt(
				`Introduce el ${counter + 1}º Numero \nVolver[x]`
			);
			if (getUserValues == 'x' || getUserValues == null) {
				return proCalculator();
			} else if (isNaN(getUserValues) || getUserValues == false) {
				continue;
			} else {
				userValues.push(Number(getUserValues));
				counter++;
			}
		}
		return doCalc(userValues);
	}
}

function doCalc() {
	for (const num of arguments) {
		let sum = 0;
		let substract = num[0];
		let multiply = 1;
		let division = num[0];

		for (let i = 0; i < num.length; i++) {
			const numToCalc1 = num[i];
			sum += numToCalc1;
			multiply *= numToCalc1;
		}
		for (let y = 1; y < num.length; y++) {
			const numToCalc2 = num[y];
			substract -= numToCalc2;
			division /= numToCalc2;
		}

		calcUserResult = [];
		calcUserResult.push(sum, substract, multiply, division);
		userCalcLastCheck = [];
		for (let y = 0; y < calcUserResult.length; y++) {
			calcUserResult[y] - Math.floor(calcUserResult[y]) == 0
				? userCalcLastCheck.push(calcUserResult[y])
				: userCalcLastCheck.push(Number(calcUserResult[y].toFixed(2)));
		}
	}
	//
	let z = 0;
	const operand = ['Sum', 'Substract', 'Multiply', 'Division'];
	while (z < operand.length) {
		finalResult.push(operand[z] + ` = ` + userCalcLastCheck[z]);
		z++;
	}
	return showResult();
}
const showResult = () => {
	console.log(finalResult);
	return proCalculator();
};

proCalculator();
