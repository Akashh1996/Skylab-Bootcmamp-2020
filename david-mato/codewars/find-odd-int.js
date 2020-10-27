function findOdd(A) {
	const oddNumber = [];
	for (const i of A) {
		if (oddNumber.includes(i)) {
			oddNumber.splice(oddNumber.indexOf(i), 1);
		} else {
			oddNumber.push(i);
		}
	}
	return oddNumber[0];
}

module.exports = findOdd;
