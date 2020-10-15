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

	copyWithin: () => {},

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
	// No acabada
	reduce: (object, fn, rest = 0) => {
		let accumulator = 0;
		!rest ? (accumulator = 0) : (accumulator = rest);
		let array = Object.entries(object);
		for (let i = 0; i < array.length - 2; i++) {
			accumulator += fn(array[i][1], array[i + 1][1]);
		}
	}
};

const ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

console.log(ferranObject.every(ferranObject, (x) => x < 2));
console.log(ferranObject.reduce(ferranObject, (x, y) => x + y));

module.exports = skylabObject;