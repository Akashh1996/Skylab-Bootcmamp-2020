Object.prototype.findFunction = function(callback) {
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (callback(values[i])) {
            return values[i];
        }
    }
}

const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
console.log(skylabArray.findFunction((value) => value > 28));


// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.