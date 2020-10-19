const array1 = {1: 5, 2: 12, 3: 8, 4: 130, 5: 44};

function myFind(object, callback) {
	const returnObject = {};
	Object.entries(object).forEach((property) => {
        if (callback(property[1])){
        debugger
        return property[1];
    }
	});
	return returnObject;
}
const found = myFind(array1, (element) => {
   if (element > 10) {
       return element;
   }
});

console.log(found);
