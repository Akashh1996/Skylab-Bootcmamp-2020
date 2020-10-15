/* const protoMap = function (object, double) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        newObject[property[0]] = double(property[1]);
    });
    return newObject
}

Object.prototype.myMap = protoMap

let obj = {
    0: 2,
    1: 1,
    2: 6,
    3: 9
}

const result = Object.prototype.myMap(obj, function double(value) {
    return value * 2
})

console.log(result); */

/* const protosome = function (object, callback) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (callback(values[index][1])) {
            return true
        }
    }
    return false
}

Object.prototype.mysome = protosome

let obj = {
    0: 2,
    1: 5,
    2: 9,
    3: 2,
}

const result = Object.prototype.mysome(obj, (value) => {
    return value === 2

})

console.log(result); */
/* const protoevery = function (object, equals) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (!equals(values[index][1])) {
            return false
        }
    }
    return true
}

Object.prototype.myevery = protoevery

let obj = {
    0: 2,
    1: 2,
    2: 2,
}


const result = Object.prototype.myevery(obj, function equals(value) {
    return value === 2

})

console.log(result);
 */



/* const protofind = function (object, greater) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (greater(values[index][1])) {
            return values[index][1]
        }
    }
    return "no any item match the condition"
}

Object.prototype.myfind = protofind

let obj = {
    0: 6,
    1: 3,
    2: 4,
}


const result = Object.prototype.myfind(obj, function greater(value) {
    return value > 2

})

console.log(result); */

/* const protofilter = function (object, greater) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        if (greater(property[1])) {
            newObject[property[0]] = property[1];

        }
    });
    return newObject

}

Object.prototype.myfilter = protofilter

let obj = {
    0: 1,
    1: 2,
    2: 3,
}


const result = Object.prototype.myfilter(obj, function greater(value) {
    return value > 2

})

console.log(result); */

/* const protofindIndex = function (object, callback) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (callback(values[index][1])) {
            return index
        }
    }
}

Object.prototype.myfindIndex = protofindIndex

let obj = {
    0: 2,
    1: 5,
    2: 1,
    3: 2,
}

const result = Object.prototype.myfindIndex(obj, (value) => {
    return value === 1

})

console.log(result); */


const protofindIndex = function (object, callback) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (callback(values[index][1])) {
            return index
        }
    }
}

Object.prototype.myfindIndex = protofindIndex

let obj = {
    0: 2,
    1: 5,
    2: 1,
    3: 2,
}

const result = Object.prototype.myfindIndex(obj, (value) => {
    return value === 1

})

console.log(result);