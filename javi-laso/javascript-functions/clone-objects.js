function cloneObject (obj) {
    if (typeof(obj) !== 'object' || obj === null) {
        return obj;
    }

    const objkeys = Object.keys(obj);
    const objvalues = Object.values(obj);
    const newObject = {};
    debugger;

    for(let i = 0; i < objkeys.length; i++) {
        newObject[objkeys[i]] = cloneObject(objvalues[i]);
    }

    return newObject;
}

module.exports = cloneObject;