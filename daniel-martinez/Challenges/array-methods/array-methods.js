let skylabArray = {
	map: (fn, object) => {
		let newObj = {};
		for (let property in object) {
			if (property !== 'length' && object.hasOwnProperty(property)) {
				newObj[property] = fn(object[property]);
			}
		}
		newObj.length = object.length;
		return newObj;
	},
	filter: (fn, object) => {
		let newObj = {};
		newObj.length = 0;
		for (let property in object) {
			if (
				fn(object[property]) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObj[property] = object[property];
				newObj.length++;
			}
		}
		return newObj;
	},
	find: (fn, object) => {
		for (let property in object) {
			if (fn(object[property]) && object.hasOwnProperty(property)) {
				return object[property];
			}
		}
		return -1;
	},
	findIndex: (fn, object) => {
		for (let property in object) {
			if (fn(object[property])) {
				return Number(property);
			}
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
	copyWithin: (object, target, start=0, end=object.length) => {
		if (target >= object.length) {
			return;
		}
		let values = {};
		for (let i = start; i < end; i++) {
			if (object[i] !== 'length'){
				values[i] = Object.entries(object)[i][1];
			}
		}
		for (let i = 0; i < object.length; i++) {
			if (!object[target + i]) {
				return object;
			}
			object[target + i] = Object.entries(values)[i][1];
		}
		return object;
	},
	some: (fn, object) => {
		for (let property in object) {
			if (fn(object[property]) && object.hasOwnProperty(property)) {
				return true;
			}
		}
		return false;
	},
	every: (fn, object) => {
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

let danielArray = {
	0: 1,
	1: 2,
	2: 3,
	length: 3,
	__proto__: skylabArray
};


module.exports = {danielArray, skylabArray};
