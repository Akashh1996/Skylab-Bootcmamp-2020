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