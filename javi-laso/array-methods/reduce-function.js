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

const skylabArray = {0: 1, 1: 16, 2:10, 3:1, 4: 9, 5:3, length: 6};
const arr = [1, 16, 10, 1, 9, 3];
const reducer = (acc, currVal) => acc * currVal;


console.log(skylabArray);
console.log(arr);
console.log(skylabArray.reduceFunction(reducer, 0.3));
console.log(arr.reduce(reducer, 0.3));

//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.