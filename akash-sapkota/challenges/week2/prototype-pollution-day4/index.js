const protoMap = function (object, double) {
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

const resultMap = Object.prototype.myMap(obj, function double(value) {
    return value * 2
})


const protosome = function (object, callback) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (callback(values[index][1])) {
            return true
        }
    }
    return false
}

Object.prototype.mysome = protosome

const resultSome = Object.prototype.mysome(obj, (value) => {
    return value === 2

})


const protoevery = function (object, equals) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (!equals(values[index][1])) {
            return false
        }
    }
    return true
}

Object.prototype.myevery = protoevery

const resultEvery = Object.prototype.myevery(obj, function equals(value) {
    return value === 2

})

console.log(resultEvery);



const protofind = function (object, greater) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (greater(values[index][1])) {
            return values[index][1]
        }
    }
    return "no any item match the condition"
}

Object.prototype.myfind = protofind



const resultFind = Object.prototype.myfind(obj, function greater(value) {
    return value > 2

})

console.log(resultFind);

const protofilter = function (object, greater) {
    const newObject = {}
    Object.entries(object).forEach(property => {
        if (greater(property[1])) {
            newObject[property[0]] = property[1];

        }
    });
    return newObject

}

Object.prototype.myfilter = protofilter

const resultFilter = Object.prototype.myfilter(obj, function greater(value) {
    return value > 2

})

console.log(resultFilter);

const protofindIndex = function (object, callback) {
    let values = Object.entries(object)
    for (let index = 0; index < values.length; index++) {
        if (callback(values[index][1])) {
            return index
        }
    }
}

Object.prototype.myfindIndex = protofindIndex


const resultFindex = Object.prototype.myfindIndex(obj, (value) => {
    return value === 1

})

console.log(resultMap);
console.log(resultSome);
console.log(resultFindex);