
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
	}
};

const customProtos = Object.create(myProtos);
module.exports = customProtos;
