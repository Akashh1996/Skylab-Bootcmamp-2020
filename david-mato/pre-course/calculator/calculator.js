const calculator = (num1, num2) => {
	if (num2 == undefined && !isNaN(num1)) {
		return `La raíz cuadrada de ${num1} es ${+Math.sqrt(num1).toFixed(3)}.`;
	} else if (isNaN(num1) || isNaN(num2)) {
		return 'Introduzca números.';
	} else {
		let resultSum = num1 + num2;
		let resultRest = num1 - num2;
		let resultMult = num1 * num2;
		let resultDiv = num1 / num2;

		const resultsArr = [
			+resultSum.toFixed(3),
			+resultRest.toFixed(3),
			+resultMult.toFixed(3),
			+resultDiv.toFixed(3)
		];

		return `Suma: ${num1} + ${num2} es ${resultsArr[0]}\nResta: ${num1} - ${num2} es ${resultsArr[1]}\nMultiplicación: ${num1} x ${num2} es ${resultsArr[2]}\nDivisión: ${num1} ÷ ${num2} es ${resultsArr[3]}`;
	}
};
console.log(calculator(4, 3.14));
