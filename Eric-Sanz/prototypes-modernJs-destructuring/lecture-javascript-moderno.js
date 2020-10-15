//hay 3 scoopes diferentes en Javascrypt - Global scope, function scope y block scope.
//el scope global dentro de un script, es un objeto vacio.
//el scope global del navegador es la ventana. El objeto de la ventana.

//las var tienen hoisting, por lo que se puede acceder a esa variable antes de que este declarada, pero sin saber su valor, dando undefined.
// en cambio let y const da reference Error.

//Un callback es una funcion que es recibida como argumento por una funcion.
//Un clousure es una funcion declarada dentro de otra funcion.

function sum(a,b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    myLog(console.log);
}

sum(1,2);


//--------------------------------------------------------------------------------

function sum(a,b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    return myLog;
}

sum(1,2)(console.log);

//--------------------------------------------------------------------------------


function sum(a,b) {

    function myLog(customLogFn) {
        customLogFn('el primer valor introducido es: ', a);
        customLogFn('el segundo valor introducido es: ', b);
        customLogFn('el resultado es: ', a + b);
    }
    return {myLog};
}

sum(1,2).myLog(console.log);

//--------------------------------------------------------------------------------

function sum(a,b) {

    function myLog(customLogFn) {
        return {
            log: () => customLogFn('El resultado es:', a + b)
        }
    }
    return {myLog};
}

sum(1,2).myLog(console.log).log();


//--------------------------------------------------------------------------------

function sum(a,b) {

    function myLog(customLogFn) {
        return {
            log: () => customLogFn('El resultado es:', a + b)
        }
    }
    return {x: myLog};
}

sum(1,2).x(console.log).log();

//--------------------------------------------------------------------------------

function sum(a,b) {

    function myLog(customLogFn) {
        return () => customLogFn('El resultado es:', a + b)
    }
    return {x: myLog};
}

sum(1,2).x(console.log)();


//--------------------------------------------------------------------------------

function sum(a,b) {

    function log(customLogFn) {
        return () => customLogFn('El resultado es:', a + b)
    }
    return log;
}

sum(1,2)(console.log)();


//--------------------------------------------------------------------------------

function sum(a,b) {

    function log(customLogFn) {
        return {a: {x: () => customLogFn('El resultado es: ', a+b)}};
    }
    return log;
}

sum(1,2)(console.log).a.x();



