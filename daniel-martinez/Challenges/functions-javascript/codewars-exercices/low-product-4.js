function lowestProduct(input) {
	let menor = 0;
	let actual;
	let array = input.split('');
	if (array.length < 4) {
		return 'Number is too small';
	} else {
		for (let i = 0; i < array.length - 3; i++) {
			actual = +array[i] * +array[i + 1] * +array[i + 2] * +array[i + 3];
			if (i === 0) {
				menor = actual;
				actual = 0;
			} else if (actual < menor) {
				menor = actual;
				actual = 0;
			} else {
				actual = 0;
			}
		}
	}
	return menor;
}

module.exports = lowestProduct;
