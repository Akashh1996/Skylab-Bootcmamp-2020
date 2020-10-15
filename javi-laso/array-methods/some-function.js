Object.prototype.someFunction = function(callback) {
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (callback(values[i])) {
            return true;
        }
    }

    return false;
}

const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
console.log(skylabArray.someFunction((value) => value === 1));

//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.