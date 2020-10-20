const array1 = {0: 5, 1: 5, 2: 5, 3: 5, 4: 2, length: 5};

function mySome(object, callback) {
	for ( let prop in object) {
        if (!callback(object[prop])){
            return false;
        } 
    }
    return true;
};
	
const found = mySome(array1, (element) => {
    return element === 5;
} )

console.log(found);

