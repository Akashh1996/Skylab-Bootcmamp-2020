function find(callback, arr) {
	for (let i = 0; i < Object.entries(arr).length; i++) {
		if (callback(Object.entries(arr)[i][1])) {
			return Object.entries(arr)[i][1];
		}
	}
	return undefined;
}

module.exports = find;
