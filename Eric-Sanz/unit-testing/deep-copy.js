function deepClone(original) {

    let newObject = {};
    let property;

    if (!original) {
        return original;
    } else {
        if (typeof original === 'object') {
            for (property in original) { 
                if (typeof original[property] === 'object') {
                    newObject[property] = deepClone(original[property]);
                } else {
                    newObject[property] = original[property];
                }
            }
        }
        return newObject; 
    }
};

module.exports = deepClone;