Object.prototype.findIndexFunction = function(callback) {
    const keys = Object.keys(this);
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (callback(values[i])) {
            return keys[i];
        }
    }

    return -1;
}

const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
console.log(skylabArray.findIndexFunction((value) => value < 1));

// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
// En caso contrario devuelve -1.