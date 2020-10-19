const SkylabArray = {
    push: (original, element) => {
        return {
            ...original,
            [original.length]: element,
            length: original.length + 1,
            __proto__: SkylabArray
        };
    }
};

let customArray = {
    0: 'skylab',
    length: 1,
    __proto__: SkylabArray
};

customArray = customArray.push(customArray, 'bootcamp');


console.log(customArray);


module.exports = SkylabArray, customArray

//*   THIS
/*
function f1() {
    return this;   
}
undefined
f1();
Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}
function f1() {
   'use strict';
    return this;   
}
undefined
f1();



class Car {
    constructor() {
        this.sayBye = 'esto es una propiedad del objeto que se crea';
    }


}
    
undefined
const obj = new Car();
undefined
obj.sayBye;
"esto es una propiedad del objeto que se crea"
obj;
Car {sayBye: "esto es una propiedad del objeto que se crea"}


class Car {
    constructor() {
        this.sayBye = this.sayBye.bind(this);
    }
    
    sayHi(){
        console.log(`Hello from ${this.name}`)
}

    sayBye(){
        console.log(`Bye from ${this.name}`)
}
    get name() {
        return 'Ferrari';
}
}

class Bird {
    get name() {
        return 'tweety';
}

}
    
undefined
const car = new Car;
undefined
const bird = new Bird;
undefined
car;
Car {sayBye: ƒ}sayBye: ƒ ()arguments: (...)caller: (...)length: 0name: "bound sayBye"__proto__: ƒ ()[[TargetFunction]]: ƒ sayBye()[[BoundThis]]: Car[[BoundArgs]]: Array(0)name: (...)__proto__: Object
bird;
Bird {}name: "tweety"__proto__: Object
car.sayHi();
VM634:7 Hello from Ferrari
undefined
car.sayBye();
VM634:11 Bye from Ferrari

bird.sayHi = car.sayHi;
ƒ sayHi(){
        console.log(`Hello from ${this.name}`)
}
bird.sayHi();
VM634:7 Hello from tweety


bird.sayHi = car.sayHi;
ƒ sayHi(){
        console.log(`Hello from ${this.name}`)
}
bird.sayHi();
VM634:7 Hello from tweety
undefined
bird.sayBye = car.sayBye;
ƒ sayBye(){
        console.log(`Bye from ${this.name}`)
}
bird.sayBye();
VM634:11 Bye from Ferrari

//CONTEXO DE EJECUCION

var obj = {a : 'Custom'};
var a = 'Global';
function whatsThis() {
    return this.a;
}
undefined
obj;
{a: "Custom"}
a;
"Global"
obj.a;
"Custom"
whatsThis();
"Global"
whatsThis.call(obj);
"Custom"
whatsThis.apply(obj);
"Custom"


otro ejemplo:
function add (c, d) {
    return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};
undefined
add(5,7);
NaN
add.call(o, 5,7);
16
add.apply(o, [5,7]);
16

FIND:
const newFn = add.bind(o, 5,7);
undefined
newFn();
16
const b = {a: 2, b: 4};
undefined
newFn.call(b);
16

SIEMPRE VA A DEVOLVER 16.









*/







*/