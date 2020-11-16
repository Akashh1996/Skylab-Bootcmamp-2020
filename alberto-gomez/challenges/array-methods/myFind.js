const skylabArr = {
    find: (original, callback) => {
        for (property in original) {
            if (callback(original[property]))
            return original[property];
        }
    }
}

let customObj = {
    0: 1,
    1: 2,
    2: 2,
    3: 4,
    __proto__: skylabArr
}

const result = customObj.find(customObj, (value) => {
    return value === 3;
})

console.log(result)