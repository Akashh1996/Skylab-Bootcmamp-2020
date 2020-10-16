function filter(callback, arr) {
	let newArray = {};
	Object.entries(arr).forEach((e) => {
		if (callback(e[1])) {
			newArray[e[0]] = e[1];
		}
	});
	return newArray;
}
module.exports = filter;
