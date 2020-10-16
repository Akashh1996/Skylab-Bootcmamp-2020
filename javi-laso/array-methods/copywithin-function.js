Object.prototype.copywithinFunction = function(target, start = 0, end = this.length) {
    const keys = Object.keys(this);
    const values = Object.values(this);
    const tempObject = {};
    let tempVar = start;

    target = target < 0 ? target + this.length : target;
    start = start < 0 ? start + this.length : start;
    end = end < 0 ? end + this.length : end;

    for (start; start < end; start++) {
        tempObject[keys[start]] = values[start];
    }

    for (let i = 0; i < Object.keys(tempObject).length; i++) {
        this[keys[target]] = tempObject[tempVar];
        target++;
        tempVar++;
        if (target >= this.length) {break;}
    }
}


const skylabArray = {0:  'a', 1: 'b', 2:'c', 3:'d', 4: 'e', 5:'f', length: 6};
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(skylabArray);
console.log(arr);
skylabArray.copywithinFunction(-2);
arr.copyWithin(-2);
console.log('After change');
console.log(skylabArray);
console.log(arr);

//El método copyWithin() transfiere una copia  plana de una sección a otra dentro del mismo array ( o contexto similar ),
// sin modificar su propiedad length y lo devuelve.