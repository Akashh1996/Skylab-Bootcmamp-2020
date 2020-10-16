Object.prototype.someFunction = function(callback) {
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (callback(values[i])) {
            return true;
        }
    }

    return false;
}

//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.