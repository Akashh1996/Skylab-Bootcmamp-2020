testObject = {
    0:1,
    1:2,
    2:3,
    3:4
};

const protoMapFunction = function (object,callback) {
    const newObject = {};
    Object.entries(object).forEach((element) => {
        newObject[element[0]] = callback(element[1]);
    });
    
    return newObject;
};

Object.prototype.myFirstMap = protoMapFunction;

const newIndexValues = Object.prototype.myFirstMap(testObject, (value) => {
    return value + ' callback';
});

// console.log(newIndexValues);


let result = testObject.myFirstMap(testObject,(value) => {
    return value + ' callback';
});

console.log(result);



const words = {0: 'letter', 1: 'water', 2: 'one', 3: 'package', length: 4};

const protoFilterFunction = function (object, callback) {
    const newObject = {};
    let count = 0;
    // Object.entries(object).forEach((property) => {
    //     newObject[property[0]] 
    // })
    for (const property in object) {
        if (property !== 'length') {
            const callbackResult = callback(object[property]) {
                if (callbackResult) {
                    newObject[count] = object[property]
                    count++;
                } else {
                    return;
                }
            }
        } else {
            newObject[property] = count;
        }
    }
};

Object.prototype.myFilter = protoFilterFunction;


let filter = words.myFilter(words,(value) => {
    return word.length > 4;
});