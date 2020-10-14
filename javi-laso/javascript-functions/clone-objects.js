function cloneObject (obj) {
    const objkeys = Object.keys(obj);
    const objvalues = Object.values(obj);
    const newObject = {};

    for(let i = 0; i < objkeys.length; i++) {
        newObject[objkeys[i]] = objvalues[i];
    }

    return newObject;
}