const strictEquals = (a, b) => {
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
};

console.log(strictEquals(1, 1)); //true
console.log(strictEquals(NaN, NaN)); //false
console.log(strictEquals(0, -0)); //true
console.log(strictEquals(-0, 0)); //true
console.log(strictEquals(1, '1')); //false
console.log(strictEquals(true, false)); //false
console.log(strictEquals(false, false)); //true
console.log(strictEquals('Water', 'Oil')); //false

////////////////////////////////////////////////////////////////

function deepCopy(original) {
	let newOriginal = {};
	if (!original) {
		return original;
	} else {
		for (const props in original) {
			debugger;
			if (typeof original[props] === 'object') {
				newOriginal[props] = deepCopy(original[props]);
			} else {
				newOriginal[props] = original[props];
			}
		}
		return newOriginal;
	}
}
