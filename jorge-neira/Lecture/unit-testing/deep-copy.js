function deepCopy(original) {
	if (!original) {
		return original;
	} else {
		let newOriginal = {};
		for (const props in original) {
			if (original[props] === 'object') {
				return deepCopy(original[props]);
			} else {
				newOriginal = newOriginal.original[props];
			}
			return newOriginal;
		}
	}
}

module.exports = deepCopy;
