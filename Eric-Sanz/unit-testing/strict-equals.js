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

module.exports = strictEquals;