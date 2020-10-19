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

    fill: (object, currentValue, start, end) => {
        for (let i = start; i < end; i++) {
            if (object.hasOwnProperty(i)) {
                object[i] = currentValue
            }
        }
        return {
            ...object,
            __ptoto__: skyLabArray
        }
    }
}


module.exports = skyLabArray;