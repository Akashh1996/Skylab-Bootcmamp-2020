/* STRICT EQUALS FUNCTION */

function strictEquals(a, b) {
    if (Object.is(a, 0) && Object.is(-0, b) || Object.is(0, b) && Object.is(-a, -0)) {
        return true;
    } else if (Object.is(a, NaN)) {
        return false;
    } else if (Object.is(a, b)) {
        return true;
    } 
    else {
        return false
    }
}

/* CLONE OBJECT */ 

const person = {
    name: "Edith",
    city: "Barcelona",
    school: "Skylab",
}

// shalow copy cloning

const personClone = {
    ...person
}

// merge firstc second argument

const personClone2 = Object.assign({}, person);