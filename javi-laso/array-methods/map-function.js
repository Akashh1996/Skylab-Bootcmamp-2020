Object.prototype.mapFunction = function(callback) {
    const newObject = {};

    const keys = Object.keys(this);
    const values = Object.values(this);
    for (let i = 0; i < this.length; i++) {
        newObject[keys[i]] = callback(values[i]);
    }
    newObject.length = this.length;
    return newObject;
};


const skylabArray = {0: 1, 1: 2, 2:8, length: 3};
function double(value) {return value * 4}
console.log(skylabArray.mapFunction(double));

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.