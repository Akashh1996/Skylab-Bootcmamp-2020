const array1 = {1: 5, 2: 12, 3: 8, 4: 130, 5: 44};

function myMap(object, callback) {
    let newObj = {}
    debugger;
	for ( let prop in object) {
        newObj[prop] = callback(object[prop]);
    }
    return newObj;
};
	
const found = myMap(array1, (element) => {
    return element+2;
});

console.log(found);

