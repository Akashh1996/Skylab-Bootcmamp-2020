const skylabArr = {
    filter: (original, callback) => {
        let newObj = {};
        for (property in original) {
            if (callback(original[property])) {
                newObj[property] = original[property];
            }
        }
        return newObj;
    }
}

const customObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    __proto__: skylabArr
}

const result = customObject.filter(customObject, (value) => {
    return value < 3;
})

console.log(result);