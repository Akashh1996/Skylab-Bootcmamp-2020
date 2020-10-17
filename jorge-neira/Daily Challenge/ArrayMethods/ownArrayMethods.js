'use strict';

const myProtos = {
	myMap: (object, callback) => {
		const newObject = {};
		for (const property in object) {
			if (property !== 'length') {
				newObject[property] = callback(object[property]);
			} else {
				newObject[property] = object[property];
				newObject.__proto__ = myProtos;
				return newObject;
			}
		}
	},
	myFilter: (object, callback) => {
		const newObject = {};
		let objectCounter = 0;
		for (const property in object) {
			if (property !== 'length') {
				const callResult = callback(object[property]);
				switch (callResult) {
					case true:
						newObject[objectCounter] = object[property];
						objectCounter++;
						break;
					case false:
						break;
				}
			} else {
				newObject.length = objectCounter;
				newObject.__proto__ = myProtos;
			}
		}
		return newObject;
	},
	myFind: (object, callback) => {
		const newObject = {};
		for (const property in object) {
			if (callback(object[property])) {
				newObject['0'] = object[property];
				newObject.length = 1;
				newObject.__proto__ = myProtos;
				return newObject;
			}
			if (property === 'length') {
				return undefined;
			}
		}
	},
	myFindIndex: (object, callback) => {
		for (const property in object) {
			if (property !== 'length') {
				const callResult = callback(object[property]);
				if (callResult) {
					return property;
				}
			} else {
				return '-1';
			}
		}
	},
	myFill: (object, value, start, end) => {
		debugger;
		if (start === undefined) start = 0;
		if (end === undefined) end = object.length;
		if (start === end) return { ...object, __proto__: myProtos };
		if (Math.sign(start) === -1) start = object.length + start;
		if (Math.sign(end) === -1) end = object.length + end;
		for (let i = start; i < end; i++) {
			if (object.hasOwnProperty(i)) {
				object[i] = value;
			}
		}
		return { ...object, __proto__: myProtos };
	},
	myCopyWithin: (object, target, start, end) => {
		if (Math.sign(target) === -1) target = object.length - 1 + target;
	},
	mySome: (object, callback) => {
		for (const property in object) {
			const callResult = callback(object[property]);
			switch (callResult) {
				case true:
					return true;
			}
		}
		return false;
	},
	myEvery: (object, callback) => {
		debugger;
		for (const property in object) {
			if (property === 'length') return true;
			const callResult = callback(object[property]);
			if (!callResult) return false;
		}
	}
};
module.exports = { myProtos };
