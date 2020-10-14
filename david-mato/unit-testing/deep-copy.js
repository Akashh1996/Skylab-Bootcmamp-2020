const deepClone = (obj) => {
	if (!obj) {
		return obj;
	} else {
		const newObject = {};
		for (let [key, value] of Object.entries(obj)) {
			if (typeof value === 'object') {
				value = deepClone(value);
			}
			newObject[key] = value;
		}
		return newObject;
	}
};

module.exports = deepClone;
