Object.prototype.filterFunction = function(callback) {
    const newObject = {};
    const keys = Object.keys(this);
    const values = Object.values(this);
    let length = 0;
    for (let i = 0; i < this.length; i++) {
        if(callback(values[i])) {
            newObject[keys[i]] = values[i];
            length++;
        }
    }

    newObject.length = length;

    return newObject;
}

const skylabArray = {0: 1, 1: 2, 2:8, length: 3};
console.log(skylabArray.filterFunction((value) => value > 10));

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.