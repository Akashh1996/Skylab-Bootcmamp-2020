Object.prototype.reduceFunction = function(callback, initialValue) {
    let iterator = 0;
    let accumulator = initialValue;
    const values = Object.values(this);

    if (initialValue === undefined) {
        accumulator = values[0];
        iterator++;
    }
    
    for (iterator; iterator < this.length; iterator++) {
        accumulator = callback(accumulator, values[iterator]);
    }

    return accumulator;
}

//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.