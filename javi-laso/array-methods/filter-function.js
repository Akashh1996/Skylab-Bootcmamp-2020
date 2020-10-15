Object.prototype.filterFunction = function(callback) {
    const newObject = {};
    const keys = Object.keys(this);
    const values = Object.values(this);
    let length = 0;
    let index = 0;
    for (let i = 0; i < this.length; i++) {
        if(callback(values[i])) {
            newObject[index] = values[i];
            index++;
            length++;
        }
    }

    newObject.length = length;

    return newObject;
}

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.