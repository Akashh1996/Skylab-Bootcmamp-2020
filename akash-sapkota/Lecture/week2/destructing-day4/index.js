const human = {
    teeth: 32
}

const gwen = {
    ...human,
    age: 19
}

//----------------------------------------------------------
const array = [1, 2];
const sum = (x, y) => {
    return x + y;
}

sum(...array);


//----------------------------------------------------------

const date = [28, 01, 1988];
const time = [08, 25, 30];
const fullDate = [...date, ...time];


//----------------------------------------------------------

const bodyPart = ['shoulders', 'knees'];
const song = ['head', ...bodyPart, 'toes'];
console.log(song);


//----------------------------------------------------------

const suma = (...values) => console.log(values);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // y todos lo que quiera ya que al hacer destructuring (...values) pasa todos los values que hayan.



//----------------------------------------------------------


const reducerSum = (account, current) => account + current;
const suma = (...values) => values.reduce(reducerSum, 0);


//----------------------------------------------------------

const {
    PI,
    E,
    SQRT2
} = Math;

const circle = {
    label: 'Circle X',
    radius: 2,
};

const circleArea = ({
    radius
}) => { //({radius}) a esta funcion se le pasa el elemento que es un objeto que tiene una propiedad radius.
    return (PI * radius * radius).toFixed(2);
};

circleArea(circle);

const {
    label,
    radius
} = circle; //destructuring propiedades de un objeto.
console.log(label);
console.log(radius);


//----------------------------------------------------------

//... crea un nuevo valor


const x = [1, 2];

x.some(value => value === 14); //some va mirando 1 a 1 los elementos del array y si lo encuentra retorna verdadero, y sino falso.

const skylabArray = {};

skylabArray[0] = 1;
skylabArray[1] = 2;
skylabArray['length'] = 2;


//crear un prototype donde vas a implementar las arrays que vas a crear

//hay 3 scoopes diferentes en Javascrypt - Global scope, function scope y block scope.
//el scope global dentro de un script, es un objeto vacio.
//el scope global del navegador es la ventana. El objeto de la ventana.

//las var tienen hoisting, por lo que se puede acceder a esa variable antes de que este declarada, pero sin saber su valor, dando undefined.
// en cambio let y const da reference Error.

//Un callback es una funcion que es recibida como argumento por una funcion.
//Un clousure es una funcion declarada dentro de otra funcion.

function sum(a, b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    myLog(console.log);
}

sum(1, 2);


//--------------------------------------------------------------------------------

function sum(a, b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    return myLog;
}

sum(1, 2)(console.log);

//--------------------------------------------------------------------------------


function sum(a, b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    return {
        myLog
    };
}

sum(1, 2).myLog(console.log);

//--------------------------------------------------------------------------------

function sum(a, b) {

    function myLog(customLogFn) {
        return {
            log: () => customLogFn('El resultado es:', a + b)
        }
    }
    return {
        myLog
    };
}

sum(1, 2).myLog(console.log).log();


//--------------------------------------------------------------------------------

function sum(a, b) {

    function myLog(customLogFn) {
        return {
            log: () => customLogFn('El resultado es:', a + b)
        }
    }
    return {
        x: myLog
    };
}

sum(1, 2).x(console.log).log();

//--------------------------------------------------------------------------------

function sum(a, b) {

    function myLog(customLogFn) {
        return () => customLogFn('El resultado es:', a + b)
    }
    return {
        x: myLog
    };
}

sum(1, 2).x(console.log)();


//--------------------------------------------------------------------------------

function sum(a, b) {

    function log(customLogFn) {
        return () => customLogFn('El resultado es:', a + b)
    }
    return log;
}

sum(1, 2)(console.log)();


//--------------------------------------------------------------------------------

function sum(a, b) {

    function log(customLogFn) {
        return {
            a: {
                x: () => customLogFn('El resultado es: ', a + b)
            }
        };
    }
    return log;
}

sum(1, 2)(console.log).a.x();


let mammal = {
    brainy: true
}
let human = {
    teeth: 32,
    __proto__: mammal
};
let gwen = {
    age: 19,
    __proto__: human
}; //__proto__ coge las propiedades de human, apuntando a su objecto, no a human variable.
gwen.teeth = 31; // al cambiar la propiedad de gwen, no se modifica la del prototype.
//Prototype Shadowing: 
//Javascript siempre mira primero si el objeto tiene esa propiedad, si la tiene no va al prototype, sino, entra prototype a buscarla.
//.hasOwnProperty('propiedad'); nos dice si el objecto tiene esa propiedad en su objeto o si la hereda de algun otro objecto con prototype.


//__proto__ = null, convierte al objeto en un objeto sin prototype.

//Prototype pollution:
//si a partir del objecto original se hace algun cambio en el __proto__ object original, los objetos que apunten a ese proto de ese objeto tambien se agregaran a sus propiedades.
//pero ninguno de ellos lo tendra como .hasOwnProperty.
//intentar no hacer prototype pollution. Bad coding.

class Spiderman { // la class nos sirve como base para crear otros nuevos objetos.
    lookout() {
        alert('My Spider-sense is tingling.');
    }
};

let miles = new Spiderman();
miles.lookout();