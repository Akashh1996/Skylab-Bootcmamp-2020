function lowestProduct(input) {
	let arr = [];
	if (input.length < 4) return 'Number is too small';
	for (let x = 0; x < input.length - 3; x++) {
		arr.push(
			input
				.slice(x, x + 4)
				.split('')
				.reduce((a, b) => a * b)
		);
	}
	return Math.min(...arr);
}

module.exports = lowestProduct;
