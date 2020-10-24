const array1 = {0: 5, 1: 12, 2: 8, 3: 130, 4: 44, length: 5};

function myFill(object, value, start = 0 , end = object.length) {
    let newObj = {...object};
	for ( let prop in object) {
        if (prop >= start && prop < end && prop !== 'length'){
            newObj[prop] = value;
        }    
    }
    return newObj;
};
	
const found = myFill(array1, 33, 2)

console.log(found);

