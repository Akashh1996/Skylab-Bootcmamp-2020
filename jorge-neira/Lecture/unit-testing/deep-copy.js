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

module.exports = deepCopy;
