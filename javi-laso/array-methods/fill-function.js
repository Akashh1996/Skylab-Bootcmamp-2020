Object.prototype.fillFunction = function(value, start = 0, end = this.length) {
    const keys = Object.keys(this);
    const values = Object.values(this);

    start = start < 0 ? start + this.length : start;
    end = end < 0 ? end + this.length : end;

    for (start; start < end; start++) {
        this[keys[start]] = value;
    }
}

const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
const arr = [1, 16, 0, 1, 9, 3];
console.log(skylabArray);
console.log(arr);
skylabArray.fillFunction(99, -4);
arr.fill(99, -4);
console.log('After change');
console.log(skylabArray);
console.log(arr);

//El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) 
// hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.