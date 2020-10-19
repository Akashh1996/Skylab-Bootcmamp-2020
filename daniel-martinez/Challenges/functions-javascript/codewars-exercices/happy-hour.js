function isHappy(n, pow) {
	let array = [n];
	let sum = 0;
	let number = n.toString();
	do {
		for (var i = 0; i < number.length; i++) {
			sum += Math.pow(+number[i], pow);
		}
		number = sum;
		array.push(number);
		number = number.toString();
		sum = 0;
	} while (+number !== n && +number !== 1 && array.length < 100);
	if (array[array.length - 1] === 1) {
		return [1];
	}
	return array;
}

module.exports = isHappy;
