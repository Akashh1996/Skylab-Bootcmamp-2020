const skyLabArray = {
    map: (object, callback) => {
        let newObject = {}
        for (property in object) {
            if (object.hasOwnProperty(property) && property !== 'length') {
                newObject[property] = callback(object[property])
            }
        }
        return {
            ...newObject,
            __proto__: skyLabArray,
            length: object.length
        }
    },

    filter: (object, callback) => {
        let newObject = {}
        for (property in object) {
            if (callback(object[property]) && object.hasOwnProperty(property)) {
                newObject[property] = object[property]
            }
        }
        return newObject
    },

    find: (object, callback) => {
        for (property in object) {
            if (callback(object[property]) && object.hasOwnProperty(property)) {
                return object[property]
            }
        }
    },

    findIndex: (object, callback) => {
        for (property in object) {
            if (callback(object[property]) && object.hasOwnProperty(property)) {
                return object[property[0]]
            }
        }
    },

    some: (object, callback) => {
        for (property in object) {
            if (callback(object[property]) && object.hasOwnProperty(property)) {
                return true
            }
        }
        return false
    },

    every: (object, callback) => {
        for (property in object) {
            if (!callback(object[property])) {
                return false
            }
        }
        return true
    },

    /*     fill: (object, currentValue, start, end) => {
            for (property in object) {
    
    
    
            }
        } */
}


let obj = {
    0: 1,
    1: 4,
    2: 6,
    length: 3,
    __proto__: skyLabArray
}

/* obj = obj.fill(obj, currentValue, start, end)
console.log(obj)
 */


obj = obj.every(obj, value => {
    return value > 8
})

console.log(obj)
