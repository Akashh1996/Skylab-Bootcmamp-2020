/**
 * Like a === b
 */
function strictEquals(a, b) {
	if (Object.is(a, b)) {
		// Same value.
		// Is this NaN?
		if (Object.is(a, NaN)) {
			// We already know a and b are the same, so it's enough to check a.
			// Special case #1.
			return false;
		} else {
			// They are equal!
			return true;
		}
	} else {
		// Different value.
		// Are these 0 and -0?
		if (
			(Object.is(a, 0) && Object.is(b, -0)) ||
			(Object.is(a, -0) && Object.is(b, 0))
		) {
			// Special case #2.
			return true;
		} else {
			// They are not equal!
			return false;
		}
	}
}

module.exports = strictEquals;
