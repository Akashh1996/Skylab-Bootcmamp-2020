const skylabArray = { 0: 5, 1: 10, 2: 15, length: 3 };

const myObjectMap = function (object, callback) {
	const myNewObject = {};
	for (const props in object) {
		if (props === 'length') {
			myNewObject[props] = object[props];
			return myNewObject;
		} else {
			myNewObject[props] = callback(object[props]);
		}
	}
	return myNewObject;
};

Object.prototype.myMap = myObjectMap;

const myLog = skylabArray.myMap(skylabArray, (double) => {
	return double * 2;
});

// console.log(myLog);
console.log(Object.prototype.myMap);
// console.log(
// 	skylabArray.myMap((double) => {
// 		return double * 2;
// 	})
// );
Object.prototype.newMap = this.map;

console.log(
	skylabArray.newMap((double) => {
		return double * 2;
	})
);
