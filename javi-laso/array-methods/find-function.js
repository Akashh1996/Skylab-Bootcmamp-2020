Object.prototype.findFunction = function(callback) {
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (callback(values[i])) {
            return values[i];
        }
    }
}

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.