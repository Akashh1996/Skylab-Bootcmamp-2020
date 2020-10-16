const skylabArr = {
    every: (original, callback) => {
        let verif = []
        for (property in original) {
            if(original.hasOwnProperty(property)){
                if (callback(original[property])) {
                    verif.push(true);
                } else {
                    verif.push(false);
                }
            }
        }
        for (i = 0; i < verif.length; i++) {
            if (verif[i] === false) {
                return false;
            }
        } 
        return true;
    }
}

const customObj = {
    0: 1,
    1: 1,
    2: 2,
    3: 1,
    __proto__: skylabArr
}

const result = customObj.every(customObj, (value) => {
    return value === 1;
})

console.log(result);