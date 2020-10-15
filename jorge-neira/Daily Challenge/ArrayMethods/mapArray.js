const skylabArray = { 0: 5, 1: 10, 2: 15, length: 3 };

const mySecondMap = (object, callback) => {
	const myNewObject = {};
	for (const props in object) {
		if (props === 'length') {
			return myNewObject;
		} else {
			myNewObject[props] = callback(object[props]);
		}
	}
	return myNewObject;
};

Object.prototype.myPoopMap = mySecondMap;

const double = (double) => {
	return double * 2;
};

console.log(skylabArray.myPoopMap(skylabArray, double));
