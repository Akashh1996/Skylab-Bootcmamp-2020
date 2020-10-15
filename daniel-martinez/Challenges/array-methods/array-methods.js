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
				return property;
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
	reduce: () => {}
};

let danielArray = {
	0: 1,
	1: 2,
	2: 3,
	length: 3,
	__proto__: skylabArray
};

console.log('Initial array:');
console.log(danielArray);

console.log('.map(x => x*2) >>> ');
console.log(danielArray.map((x) => x * 2, danielArray));

console.log('.length >>> ');
console.log(danielArray.length);

console.log('.filter(x => x > 1) >>> ');
console.log(danielArray.filter((x) => x > 1, danielArray));

console.log('.find(x => x > 1) >>> ');
console.log(danielArray.find((x) => x > 1, danielArray));

console.log('.findIndex(x => x > 1) >>> ');
console.log(danielArray.findIndex((x) => x > 1, danielArray));

console.log('.fill(1,1,2) >>> ');
console.log(danielArray.fill(danielArray, 1, 1, 2));

console.log('.some(x => x > 1) >>> ');
console.log(danielArray.some((x) => x > 1, danielArray));

console.log('.reduce((a,b) => a+b) >>> ');
console.log(danielArray.reduce((a, b) => a + b, danielArray));

module.exports = skylabArray;
