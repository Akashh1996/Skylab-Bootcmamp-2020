const { debug } = require("console");

Object.prototype.copywithinFunction = function(target, start = 0, end = this.length) {
    const keys = Object.keys(this);
    const values = Object.values(this);
    const tempObject = {};
    let tempVar = start;

    for (start; start < end; start++) {
        tempObject[keys[start]] = values[start];
    }

    for (let i = 0; i < tempObject.length; i++) {
        this[keys[target]*1] = tempObject[tempVar];
        debugger;
        tempVar++;
    }
}


const skylabArray = {0:  'a', 1: 'b', 2:'c', 3:'d', 4: 'e', 5:'f', length: 6};
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(skylabArray);
console.log(arr);
skylabArray.copywithinFunction(1, 3); //[ 'a', 'd', 'e', 'f', 'e', 'f' ]
arr.copyWithin(1, 3);
console.log('After change');
console.log(skylabArray);
console.log(arr);

//El método copyWithin() transfiere una copia  plana de una sección a otra dentro del mismo array ( o contexto similar ),
// sin modificar su propiedad length y lo devuelve.