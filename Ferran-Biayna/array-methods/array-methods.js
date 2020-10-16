const skylabObject = {
	map: (object, fn) => {
		let newObject = {};
		for (let property in object) {
			if (property !== 'length' && object.hasOwnProperty(property)) {
				newObject[property] = fn(object[property]);
			}
		}
		newObject.length = object.length;
		return newObject;
	},

	filter: (object, fn) => {
		let newObject = {};
		for (let property in object) {
			if (
				fn(object[property]) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObject[property] = object[property];
			}
		}
		return newObject;
	},

	find: (object, fn) => {
		for (let property in object) {
			if (fn(object[property])) {
				return object[property];
			}
		}
	},

	findIndex: (object, fn) => {
		let i = 0;
		for (let property in object) {
			if (fn(object[property])) {
				return i;
			}
			i++;
		}
		return -1;
	},

	fill: (object, value, start = 0, end = object.length) => {
		let newObj = {};
		newObj.length = object.length;
		for (let property in object) {
			if (
				(property < start || property >= end) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObj[property] = object[property];
			} else if (
				property >= start &&
				property < end &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObj[property] = value;
			}
		}
		return newObj;
	},

	copyWithin: (object, value, start=0, end=object.length) => {
		let end = object.length
		if (value >= end) {
			return;
		}
		let newObj = {};
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

	some: (object, fn) => {
		for (let property in object) {
			if (fn(object[property]) && object.hasOwnProperty(property)) {
				return true;
			}
		}
		return false;
	},

	every: (object, fn) => {
		for (let property in object) {
			if (
				!fn(object[property]) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				return false;
			}
		}
		return true;
	},

	reduce: (object, fn, rest = 0) => {
		let accumulator = 0;
		!rest ? (accumulator = 0) : (accumulator = rest);
		for (property in object) {
			if (object.hasOwnProperty(property) && property!=="length")
			accumulator = fn(accumulator, object[property]);
		}
		return accumulator
	}
};

const ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

module.exports = ferranObject;
