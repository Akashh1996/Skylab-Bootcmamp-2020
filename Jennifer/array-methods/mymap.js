

const xmyMap = function (object, callback) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        if(property !== "length"){
            newObject[property[0]] = callback(property[1]);
        }
    });
    newObject.length = object.length;
    return newObject
}

Object.prototype.myMap = myMap
let skylabArray = {
    0: 5,
    1: 10,
    2: 3,
    length: 3
}


const result = Object.prototype.myMap(skylabArray, (value) => {
    return value * 2

})

console.log(result);



