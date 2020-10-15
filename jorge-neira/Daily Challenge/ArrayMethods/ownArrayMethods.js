const myProtos = {
	//Map function
	myMap: (object, callback) => {
		const newObject = {};
		for (const property in object) {
			if (property !== 'length') {
				newObject[property] = callback(object[property]);
			} else {
				newObject[property] = object[property];
				return newObject;
			}
		}
		return newObject;
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
				newObject[property] = objectCounter;
			}
		}
		return newObject;
	}
	// myFind: (object, callback) => {
	// 	const newObject = {};
	// 	for (const property in object) {
	// 		if (callback(object[property])) {
	// 			newObject[0] = object[property];
	// 			newObject['length'] = 1;
	// 			return;
	// 		}
	// 		if (property === 'length') {
	// 			newObject[0] = undefined;
	// 			newObject['length'] = 1;
	// 		}
	// 	}
	// 	return newObject;
	// }
};

const customProtos = Object.create(myProtos);
module.exports = customProtos;
