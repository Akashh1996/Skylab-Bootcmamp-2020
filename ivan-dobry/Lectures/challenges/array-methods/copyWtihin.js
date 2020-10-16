const array1 = {0: 5, 1: 12, 2: 8, 3: 130, 4: 44, length: 5};

function myFind(object, start = 0, end = object.length) {
	for ( let property in object) {
        if (callback(object[property])){
        return object[property];
        }
    }
};
	

const found = myFind(array1, (element) => {
   if (element > 100) {
       return element;
   }
});

console.log(found);