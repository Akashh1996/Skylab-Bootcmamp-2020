const array1 = {1: 5, 2: 12, 3: 8, 4: 130, 5: 44};

function myFindIndex(object, callback) {
	for ( let property in object) {
        if (callback(object[property])){
        return object[property];
        }
    }
};
	

const found = myFindIndex(array1, (element) => {
   if (element  > 10) {
       return element;
   }
});

console.log(found);
