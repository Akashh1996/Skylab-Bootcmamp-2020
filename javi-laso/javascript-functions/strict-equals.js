function strictEquals (a, b) {
    if (Object.is(a, NaN) && Object.is(b, NaN)) {
        return false;
    } else if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    } else if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }
    
    return Object.is(a, b);
}

console.log(strictEquals(9, 9));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, 0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(0, -0));
console.log(strictEquals(true, false));
console.log(strictEquals(true, true));
console.log(strictEquals(false, false));