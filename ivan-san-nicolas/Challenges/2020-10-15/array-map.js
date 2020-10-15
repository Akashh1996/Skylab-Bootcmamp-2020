const myArray = {};

function myMap(obj, callback) {
    let newObj = {}
    let objArray = Object.values(obj);
    for (let i = 0; i < objArray.length; i++) {
        newObj[i] = callback(objArray[i]);
    }
    obj[Object.keys(newObj).length] = Object.keys(obj).length;
    return newObj;
};

let obj = {
    0: 'hola',
    1: 'adios',
    2: 'adios',
    3: 'adios',
    length: 4
};

const result = myMap(obj, (value) => {
    return value + ' los callbacks son guais';
});

console.log(result);