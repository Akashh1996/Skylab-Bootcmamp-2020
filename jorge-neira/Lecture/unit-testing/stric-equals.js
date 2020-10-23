function strictEquals(a, b) {
	if (Object.is(a, b)) {
		if (Object.is(a, NaN)) return false;
		else return true;
	} else {
		if (
			Object.is(a, 0) ||
			Object.is(0, b) ||
			Object.is(a, -0) ||
			Object.is(-0, b)
		) {
			return true;
		} else {
			return false;
		}
	}
}
module.exports = strictEquals;
