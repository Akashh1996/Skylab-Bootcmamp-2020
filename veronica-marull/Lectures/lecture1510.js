//prototypes

let human = {
    __proto__: mammal,
    teeth: 32
};

let gwen = {
//we added this line:
    __proto__: human,
age: 19
}
 
let mammal = {
    brainy: true
}



gwen.hasOwnProperty('teeth');
//false
gwen.hasOwnProperty('age');
//true

gwen.__proto__ = null
//null
//le saca todos lo sprototipos 

//Polluting the prototipo
let obj = {};

//undefined
obj.__proto__.smell = true;
//true
sherlock.smell;
//true
watson.smell;
//true


//JS MODERNO
//3 tipos de Scope 

//****************************************************************8



/*
Destructuring assignment

...Math (prpiedad de math)

const human = {
    teeth: 32
}

const gwen = {
    ...human,
    age: 19
}
gwen
//{teeth: 32, age: 19}


const sum = (x,y) => {return x + y};
const array = [1,2];

sum(...array)
//3

con los ... se puede acceder a las propiedades 

const bodyPart = ['shoulder', 'knees'];
undefined
const song = ['head', ...bodyPart, 'toes'];
undefined
song
(4) ["head", "shoulder", "knees", "toes"]



destructuring assingment:
const {E, PI} = Math;
undefined
E;
2.718281828459045
PI;
3.141592653589793


me quedo con las propiedada e, pi, etc. del obsjto math.

*s epueden pasar prpiedad de obj como argumento: 
ej: const circleArea = ({radius}) => ..etc


*******************8

DESTRUCTURIAG ASSIGNMENT

const [j, a, v, e, ...script] = 'JavaScript';
undefined
j
"J"
script;
(6) ["S", "c", "r", "i", "p", "t"]

ptototys polotion, callback para el challenge
hacer un prot que sirva para crear new o


CHALLENGE
Object.prototype.feria = 'abril';

"abril"
Object.prototype
{feria: "abril", constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}feria: "abril"constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
//crear un array-objetc, va a tener length en 0 y luego con olution, funciones que me permitan operar como si fueran array.
undefined
Object.prototype.find = () => {};

//crear un array-objetc, va a tener length en 0 y luego con olution, funciones que me permitan operar como si fueran array.
undefined
Object.prototype.find = () => {};
() => {}
//un objeto con las funciones y poder utilizarlas.

*/obj.map();

//property = ['arms', 'hola']

const myProtoFunction = function (object, callback) {
    const returnObject = {};
    Object.entries(object).forEach((property) => {
        returnObject[property[0]] = callback(property[1]);
    });

    return returnObject;
}

Object.prototype.map = myProtoFunction;

const result = Object.prototype.map(obj,(value) => {
    return value + 'lalala';
});

console.log(result);
//**********************************

const map = {map: () => {}};
const obj = {length: 0, __proto__: map};

/*
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

*/
































































