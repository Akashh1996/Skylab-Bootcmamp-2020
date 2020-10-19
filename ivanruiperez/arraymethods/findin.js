const mySkylabMethods = {
	myFindIn: (object, callback) => {
		let returnObject;
		let contador = 0;
		for (const property in object) {
			const elementPassTest = callback(object[property]);
			if (elementPassTest && contador === 0) {
				contador++;
				return property;
			}
		}
		if (contador === 0) {
			return undefined;
		} else {
			returnObject.length = contador;
		}
	}
};
const obj = {
	0: 5,
	1: 10,
	2: 3,
	3: 6,
	length: 4,
	__proto__: mySkylabMethods
};

result = obj.myFindIn(obj, (property) => {
	if (property === 3) {
		return true;
	} else {
		return false;
	}
});

console.log(result);
