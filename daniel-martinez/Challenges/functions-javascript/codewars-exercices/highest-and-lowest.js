function highAndLow(numbers) {
	let list = numbers.split(' ');
	list = list.sort(function (a, b) {
		return b - a;
	});
	return list[0].toString() + ' ' + list[list.length - 1].toString();
}

module.exports = highAndLow;
