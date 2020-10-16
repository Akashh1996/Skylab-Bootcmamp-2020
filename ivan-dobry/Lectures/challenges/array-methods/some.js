const array1 = {0: 5, 1: 12, 2: 8, 3: 130, 4: 44, length: 5};

function mySome(object, callback) {
	for ( let prop in object) {
        if (callback(object[prop])){
            return true;
        } 
    }
    return false;
};
	
const found = mySome(array1, (element) => {
    return element % 2 === 0;
} )

console.log(found);

