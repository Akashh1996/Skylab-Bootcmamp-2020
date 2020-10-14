function strictEquals(a, b) {
	if (isNaN(a) && isNaN(b)) {
		return false;
	} else if (!Object.is(a, b) && isNaN(a / b)) {
		return true;
	} else {
		return Object.is(a, b);
	}
}
