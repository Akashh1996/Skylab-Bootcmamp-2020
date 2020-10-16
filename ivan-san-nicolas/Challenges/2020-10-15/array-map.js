let proto = {
    myMap: (obj, callback) => {
        let newObj = {}
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                newObj[i] = callback(obj[i]);
            }
        }
        return newObj;
    }
}

let obj = {
    0: 'hola',
    1: 'adios',
    2: 'adios',
    3: 'adios',
    length: 4,
    __proto__: proto
};

const result = obj.myMap(obj, (value) => {
    return value + ' los callbacks son guais';
});

module.exports = {
    proto,
    obj
}