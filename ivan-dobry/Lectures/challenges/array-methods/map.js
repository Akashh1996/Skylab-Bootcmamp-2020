let obj = {
	0: 'hola',
	1: 'adios',
	2: 'adios',
	3: 'adios',
	length: 4
};
function mySecondMap(object, callback) {
	const returnObject = {};
	Object.entries(object).forEach((property) => {
        if (property[0] === 'length') {
            return returnObject;
        }else{
        	returnObject[property[0]] = callback(property[1]);
        }
	});
	return returnObject;
}
const result = mySecondMap(obj, (value) => {
	return value + 'los callbacks son guais';
});
console.log(result);