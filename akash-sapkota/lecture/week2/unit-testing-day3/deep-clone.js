const cloneObject = (original) => {
    if (!original) {
        return original
    } else {
        const copiedObj = JSON.parse(JSON.stringify(original));
        return copiedObj
    }
}

module.exports = cloneObject;