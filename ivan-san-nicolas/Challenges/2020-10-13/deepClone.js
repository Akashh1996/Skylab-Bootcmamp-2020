function deepClone(obj) {
    let newObj = {};
    let property = 0;
    if (!obj) return obj;
    else {
        for (property in obj) {
            if (typeof obj[property] === 'object') {
                newObj[property] = deepClone(obj[property]);
            } else {
                newObj[property] = obj[property];
            }
        }
    }
    return newObj;
}

module.exports = deepClone;