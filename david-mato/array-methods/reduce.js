function reduce(callback, arr) {
	let acc = 0;
	let curr = 0;
	for (let i = 1; i < Object.entries(arr).length; i++) {
		if (!acc) {
			acc = Object.entries(arr)[i - 1][1];
		}
		curr = Object.entries(arr)[i][1];

		acc = callback(acc, curr);
	}
	return acc;
}

module.exports = reduce;
