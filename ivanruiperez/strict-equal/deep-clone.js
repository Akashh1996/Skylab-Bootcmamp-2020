function deepClone(original) {
	let newClone = {};
	let property;
	if (!original) {
		return original;
	} else {
		for (property in original) {
			if (typeof original[property] === 'object') {
				newClone[property] = deepClone(original[property]);
			} else {
				newClone[property] = original[property];
			}
		}
		return newClone;
	}
}

module.exports = deepClone;
