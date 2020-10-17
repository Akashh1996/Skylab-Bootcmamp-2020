// Write a function that calls strictEquals (a,b) that returns the same value as a===b. Your implementation must not use  the === or !== operators.

function strictEquals (a,b) {
    let c;

    if (Object.is(a, NaN) || Object.is(NaN, b)) {
        c = false;
        return c;
    } else if (Object.is(a,-0) || Object.is(-0,b)) {
        c = true;
        return c;
    } else {
        c = (Object.is(a,b));
        return c;    
    }

}

console.log(strictEquals(1,1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(-0,0));
console.log(strictEquals(0,-0));
console.log(strictEquals(false, true));
console.log(strictEquals(false,false));

// Create a function that clones an object without mutation.

function clone(object) {
    let cloneObject = Object.assign({},object,{spain:'Sevilla'});
    return cloneObject;
};

let cityCountries = {spain: 'Barcelona', usa: 'New York'};
console.log(clone(cityCountries));
console.log(cityCountries);
clone(cityCountries);
