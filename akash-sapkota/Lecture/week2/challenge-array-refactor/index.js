const skylabArray = {
    map: (object, callback) => {
        const mappedValues = {}
        for (let i in object) {
            console.log(typeof i);
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
        const someValues = {}
        let cont = 0
        for (let i in object) {
            if (object.hasOwnProperty(i) && i !== 'length') {
                if (callback(object[i])) {
                    cont++
                    return {
                        __proto__: skylabArray,
                        [(Number(i))]: object[i],
                        length: cont,


                    }
                }

            }
        }

    }
}


let customArray = {
    __proto__: skylabArray,
    0: 1,
    1: 4,
    2: 7,
    3: 8,
    length: 4
}

customArray = customArray.find(customArray, (value) => {
    return value > 2
})

console.log(customArray);