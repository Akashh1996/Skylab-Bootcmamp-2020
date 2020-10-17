Object.prototype.everyFunction = function(callback) {
    const values = Object.values(this);
    
    for (let i = 0; i < this.length; i++) {
        if (!callback(values[i])) {
            return false;
        }
    }

    return true;
}

const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
console.log(skylabArray.everyFunction((value) => value < 17));

//Determina si todos los elementos en el array satisfacen una condición.