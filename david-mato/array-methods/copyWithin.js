function copyWithin(arr, target, start = 0, end = Object.entries(arr).length) {
	if (target >= Object.entries(arr).length) {
		return;
	}
	let values = {};
	for (let i = start; i < end; i++) {
		values[i] = Object.entries(arr)[i][1];
	}
	for (let i = 0; i < Object.entries(values).length; i++) {
		if (!arr[target + i]) {
			return arr;
		}
		arr[target + i] = Object.entries(values)[i][1];
	}
	return arr;
}

module.exports = copyWithin;
