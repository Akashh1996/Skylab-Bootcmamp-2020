const skylabArray = {
    map: (object, callback) => {
        const mappedValues = {}
        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                mappedValues[i] = callback(object[i]);

            }
        }
        return {
            ...mappedValues,
            __proto__: skylabArray,
            length: object.length
        }
    },
    find: (object, callback) => {
        let cont = 0
        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                if (callback(object[i])) {
                    cont++
                    return {
                        __proto__: skylabArray,
                        [(i)]: object[i],
                        length: cont,


                    }
                }

            } else return false
        }

    },
    some: (object, callback) => {
        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                if (callback(object[i])) {
                    return true
                }

            }
        }
        return false

    },
    every: (object, callback) => {

        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                if (!callback(object[i])) {
                    return false
                }

            }
        }
        return true

    },
    findIndex: (object, callback) => {
        let cont = 0
        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                if (callback(object[i])) {
                    cont++
                    return {
                        __proto__: skylabArray,
                        index: i,
                        length: cont,


                    }
                }

            }
        }
        return false

    },
    fill: (original, value, start, end) => {
        for (let i = start; i < end; i++) {
            if (original.hasOwnProperty(i)) {
                original[i] = value
            }

        }
        return {
            ...original,
            __proto__: skylabArray
        }
    }

}


module.exports = skylabArray;