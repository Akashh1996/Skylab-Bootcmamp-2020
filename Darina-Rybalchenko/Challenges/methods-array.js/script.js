

const protoMap = function (object, callback) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        newObject[property[0]] = callback(property[1]);
    });
    return newObject
}
Object.prototype.myMap = protoMap

let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 2,
    length: 4
}
const resultMap = Object.prototype.myMap(obj, (value) => {
    return value * 2
})
console.log(resultMap);


const protoFilter = function (object, callback) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        if (callback(property[1])) {
            newObject[property[0]] = property[1];
        }
    });
    return newObject
}
Object.prototype.myFilter = protoFilter
let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 2
}
const result = Object.prototype.myFilter(obj, (value) => {
    return value < 3
})
console.log(result);


const protoSome = function (object, callback) {
    let trasnformObjectToArray = Object.entries(object)
    for (let property = 0; property < trasnformObjectToArray.length; property++) {
        if (callback(trasnformObjectToArray[property][1])) {
            return true
        }
    }
    return false
}

Object.prototype.mySome = protoSome

let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 2
}
const resultSome = Object.prototype.mySome(obj, (value) => {
    return value = 2
})
console.log(resultSome);


const protoEvery = function (object, callback) {
    let trasnformObjectToArray = Object.entries(object)
    for (let property = 0; property < trasnformObjectToArray.length; property++) {
        if (!callback(trasnformObjectToArray[property][1])) {
            return false
        }
    }
    return true
}

Object.prototype.myEvery = protoEvery

let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 2
}
const resultEvery = Object.prototype.myEvery(obj, (value) => {
    return value > 1
})
console.log(resultEvery);


const protoFind = function (object, callback) {
    debugger
    let trasnformObjectToArray = Object.entries(object)
    for (let property = 0; property < trasnformObjectToArray.length; property++) {
        if (callback(trasnformObjectToArray[property][1])) {
            return trasnformObjectToArray[property][1]
        }
    }
}
Object.prototype.myFind = protoFind

let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 1
}
const resultFind = Object.prototype.myFind(obj, (value) => {
    return value > 4
})
console.log(resultFind);

/*
const skyLabArray = {
    push: () =>
}

const customArray = {
    __proto__: skyLabArray;
}
 */


