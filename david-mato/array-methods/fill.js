function fill(arr, value, startIndex, finalIndex) {
	if (!startIndex) {
		startIndex = 0;
	}
	if (!finalIndex) {
		finalIndex = Object.entries(arr).length;
	}
	for (let i = startIndex; i < finalIndex; i++) {
		arr[i] = value;
	}
	return arr;
}

module.exports = fill;
