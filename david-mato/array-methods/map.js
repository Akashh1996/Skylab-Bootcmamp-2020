function map(callback, arr) {
	let newArray = {};
	Object.entries(arr).forEach((e) => {
		newArray[e[0]] = callback(e[1]);
	});
	return newArray;
}

module.exports = map;
