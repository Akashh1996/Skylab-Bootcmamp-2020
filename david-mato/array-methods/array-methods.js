const arrayMethods = {
	map: function map(callback, arr) {
		let newArray = {};
		Object.entries(arr).forEach((e) => {
			newArray[e[0]] = callback(e[1]);
		});
		return newArray;
	},
	filter: function (callback, arr) {
		let newArray = {};
		Object.entries(arr).forEach((e) => {
			if (callback(e[1])) {
				newArray[e[0]] = e[1];
			}
		});
		return newArray;
	},
	find: function (callback, arr) {
		for (let i = 0; i < Object.entries(arr).length; i++) {
			if (callback(Object.entries(arr)[i][1])) {
				return Object.entries(arr)[i][1];
			}
		}
		return undefined;
	},
	findIndex: function (callback, arr) {
		for (let i = 0; i < Object.entries(arr).length; i++) {
			if (callback(Object.entries(arr)[i][1])) {
				return i;
			}
		}
		return -1;
	},
	fill: function (arr, value, startIndex, finalIndex) {
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
	},
	copyWithin: function (target, start, end, arr) {
		if (!start) {
			start = 0;
		}
		if (!end) {
			end = Object.entries(arr).length;
		}
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
	},
	some: function (callback, arr) {
		for (let i = 0; i < Object.entries(arr).length; i++) {
			if (callback(Object.entries(arr)[i][1])) {
				return true;
			}
		}
		return false;
	},
	every: function (callback, arr) {
		let comparingObject = {};
		for (let i = 0; i < Object.entries(arr).length; i++) {
			if (callback(Object.entries(arr)[i][1])) {
				comparingObject[i] = Object.entries(arr)[i][1];
			}
		}
		return (
			Object.entries(arr).length === Object.entries(comparingObject).length
		);
	},
	reduce: function (callback, arr) {
		let acc = 0;
		let curr = 0;
		for (let i = 0; i < Object.entries(arr).length; i++) {
			curr = Object.entries(arr)[i][1];
			acc = callback(acc, curr);
		}
		return acc;
	}
};

const arr = {
	length: 0,
	__proto__: arrayMethods
};
