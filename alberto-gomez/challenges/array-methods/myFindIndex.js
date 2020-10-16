const skylabArr = {
    findIndex : (original, callback) => {
        for (property in original) {
            if (callback(original[property]))
            return property;
        }
    }
}

let customObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    __proto__: skylabArr
}

const result = customObj.findIndex(customObj, (value) => {
    return value === 2;
})

console.log(result);