function calculator() {
	var num_container = [];
	function sum() {
		var numbers_sum = 0;
		for (let num in arguments) {
			console.log(`Se ha elegido el número ${arguments[num]}`);
			numbers_sum += arguments[num];
		}
		console.log(
			`La suma de los números elegidos es igual a ${parseFloat(
				numbers_sum.toFixed(3)
			)}`
		);
		return numbers_sum;
	}

	function subs() {
		var numbers_subs = 0;
		for (let num in arguments) {
			console.log(`Se ha elegido el número ${arguments[num]}`);
			if (numbers_subs === 0) {
				numbers_subs = arguments[0];
			} else {
				numbers_subs -= arguments[num];
			}
		}
		console.log(
			`La resta de los números elegidos es igual a ${parseFloat(
				numbers_subs.toFixed(3)
			)}`
		);
		return numbers_subs;
	}

	function mult() {
		var numbers_mult = 0;
		for (let num in arguments) {
			console.log(`Se ha elegido el número ${arguments[num]}`);
			if (numbers_mult === 0) {
				numbers_mult = arguments[0];
			} else {
				numbers_mult *= arguments[num];
			}
		}
		console.log(
			`La multiplicación de los números elegidos es igual a ${parseFloat(
				numbers_mult.toFixed(3)
			)}`
		);
		return numbers_mult;
	}

	function div() {
		var numbers_div = 0;
		for (let num in arguments) {
			console.log(`Se ha elegido el número ${arguments[num]}`);
			if (numbers_div === 0) {
				numbers_div = arguments[0];
			} else {
				numbers_div /= arguments[num];
			}
		}
		console.log(
			`La división de los números elegidos es igual a ${parseFloat(
				numbers_div.toFixed(3)
			)}`
		);
		return numbers_div;
	}

	// Sustituir los números entre paréntesis por aquellos con los que se desee calcular. Los números 2, 3 y 5 son un ejemplo.

	num_container.push(
		sum(2, 3, 5),
		subs(2, 3, 5),
		mult(2, 3, 5),
		parseFloat(div(2, 3, 5).toFixed(3))
	);

	console.log(num_container);

	var question = prompt('¿Desea añadir más números?');

	switch (question) {
		case 'si':
			// Sustituir los números entre paréntesis por aquellos con los que se desee calcular. Los números 4, 7 y 3 son un ejemplo.
			num_container.push(
				sum(4, 7, 3),
				subs(4, 7, 3),
				mult(4, 7, 3),
				parseFloat(div(4, 7, 3).toFixed(3))
			);

			console.log(num_container);
			break;
		case 'no':
			alert('Bye!');
			break;
	}
}

calculator();
