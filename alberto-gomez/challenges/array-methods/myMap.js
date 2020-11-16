const skylabArr = {
    map: (original, callback) => {
        newObj = {}
        for (property in original) {
            console.log(property)
            newObj[property] = callback(original[property])
        }
        return newObj;
    }
}

let customObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4,
    __proto__: skylabArr
}

const result = customObject.map(customObject, (value) => {
    return value * 2;
});

console.log(result);