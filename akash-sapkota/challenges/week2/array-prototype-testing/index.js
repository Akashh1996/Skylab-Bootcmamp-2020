const skylabArray = {
	map: (object, callback) => {
		const mappedValues = {};
		for (let i in object) {
			if (object.hasOwnProperty(i) && i !== 'length') {
				mappedValues[i] = callback(object[i]);
			}
		}
		return {
			...mappedValues,
			__proto__: skylabArray,
			length: object.length
		};
	},
	find: (object, callback) => {
		let cont = 0;
		for (let i in object) {
			if (object.hasOwnProperty(i) && i !== 'length') {
				if (callback(object[i])) {
					cont++;
					return {
						__proto__: skylabArray,
						[i]: object[i],
						length: cont
					};
				}
			} else return false;
		}
	},
	some: (object, callback) => {
		for (let i in object) {
			if (object.hasOwnProperty(i) && i !== 'length') {
				if (callback(object[i])) {
					return true;
				}
			}
		}
		return false;
	},
	every: (object, callback) => {
		for (let i in object) {
			if (object.hasOwnProperty(i) && i !== 'length') {
				if (!callback(object[i])) {
					return false;
				}
			}
		}
		return true;
	},
	findIndex: (object, callback) => {
		let cont = 0;
		for (let i in object) {
			if (object.hasOwnProperty(i) && i !== 'length') {
				if (callback(object[i])) {
					cont++;
					return {
						__proto__: skylabArray,
						index: i,
						length: cont
					};
				}
			}
		}
		return false;
	},
	fill: (original, value, start, end) => {
		for (let i = start; i < end; i++) {
			if (original.hasOwnProperty(i)) {
				original[i] = value;
			}
		}
		return {
			...original,
			__proto__: skylabArray
		};
	},
	reduce: (object, fn, rest = 0) => {
		let accumulator = 0;
		!rest ? (accumulator = 0) : (accumulator = rest);
		for (property in object) {
			if (object.hasOwnProperty(property) && property !== 'length')
				accumulator = fn(accumulator, object[property]);
		}
		return accumulator;
	},
	copyWithin: function (
		object,
		value,
		start = 0,
		end = Object.entries(object).length
	) {
		if (value >= Object.entries(object).length) {
			return;
		}
		let newObj = {};
		for (let i = start; i < end; i++) {
			newObj[i] = Object.entries(object)[i][1];
		}
		for (let i = 0; i < Object.entries(newObj).length; i++) {
			if (!object[value + i]) {
				return arr;
			}
			object[value + i] = Object.entries(newObj)[i][1];
		}
		return object;
	}
};

module.exports = skylabArray;
