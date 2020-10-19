function every(callback, arr) {
	let comparingObject = {};
	for (let i = 0; i < Object.entries(arr).length; i++) {
		if (callback(Object.entries(arr)[i][1])) {
			comparingObject[i] = Object.entries(arr)[i][1];
		}
	}
	return Object.entries(arr).length === Object.entries(comparingObject).length;
}

module.exports = every;
