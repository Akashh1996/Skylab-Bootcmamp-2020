function strictEquals(a, b) {
	if (Object.is(a, NaN) || Object.is(NaN, b)) {
		return false;
	} else if (Object.is(a, -0) || Object.is(-0, b)) {
		return true;
	} else if (Object.is(-0, b) || Object.is(a, -0)) {
		return true;
	} else {
		let c = Object.is(a, b);
		return c;
	}
}

module.exports = strictEquals;
