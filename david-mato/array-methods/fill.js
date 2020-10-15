function fill(
	arr,
	value,
	startIndex = 0,
	finalIndex = Object.entries(arr).length
) {
	for (let i = startIndex; i < finalIndex; i++) {
		arr[i] = value;
	}
	return arr;
}

module.exports = fill;
