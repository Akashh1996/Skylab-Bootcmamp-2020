function deepClone(original) {
    const objectClone = {}
    let property;
    if (!original) {
        return original
    } else {
        for (property in original) {
            if (typeof original[property] === 'object') {
                objectClone[property] = deepClone(original[property])
            } else {
                objectClone[property] = original[property]
            }
        }
        return objectClone
    }
}

module.exports = deepClone