const skylabArr = {
    some: (original, callback) => {
        for (property in original) {
            if (callback(original[property])) 
            return true;
            
        }
        return false;
    }
}

let customObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    __proto__: skylabArr
}

const result = customObj.some(customObj, (value) => {
    return value === 5;
})

console.log(result);