function findOdd(A) {
	let c = 0;
	let num;
	for (let i = 0; i < A.length; i++) {
		num = A[i];
		for (let j = 0; j < A.length; j++) {
			if (A[j] === A[i]) {
				c++;
			}
		}
		if (c % 2 !== 0) {
			return A[i];
		}
		c = 0;
	}
	return 0;
}

module.exports = findOdd;
