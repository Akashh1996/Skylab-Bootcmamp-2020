function cloneObject (obj) {
    const objkeys = Object.keys(obj);
    const objvalues = Object.values(obj);
    const newObject = {};

    for(let i = 0; i < objkeys.length; i++) {
        newObject[objkeys[i]] = objvalues[i];
    }

    return newObject;
}

const objeto1 = {altura: 10, anchura: 20};
const objetoCopia = cloneObject(objeto1);
console.log(objeto1);
console.log(objetoCopia);
console.log('');
objeto1.altura = 50;
console.log(objeto1);
console.log(objetoCopia);
console.log('');
objetoCopia.anchura = 300;
console.log(objeto1);
console.log(objetoCopia);
console.log('');