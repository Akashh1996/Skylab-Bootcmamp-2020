let obj = {
	0: 'hola',
	1: 'adios',
	2: 'adios',
	3: 'adios',
	length: 4
};

function mySecondMap(object, callback) {
	const returnObject = {};
	for (const prop in object) {
		if (prop === 'length') {
			return returnObject;
		} else {
			returnObject[prop] = callback(object[prop]);
		}
	}
}
const result = mySecondMap(obj, (value) => {
	return value + ' los callbacks son guais';
});

console.log(result);

module.exports = obj;
