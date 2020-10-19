function strictEquals(a,b) {
    if (Object.is(a,NaN) || Object.is(NaN,b)) {
        return false;
    } else if (Object.is(a,-0) || Object.is(b,-0)) {
        return true;
    } else if ((Object.is(a,0) || Object.is(b,0))) {
        return true;
    } else {
        return Object.is(a,b)
    }
}

console.log(strictEquals(1, 1)); //true
console.log(strictEquals(NaN, NaN)); //false
console.log(strictEquals(0, -0)); //true
console.log(strictEquals(-0, 0)); //true
console.log(strictEquals(1, '1')); //false
console.log(strictEquals(true, false)); //false
console.log(strictEquals(false, false)); //true
console.log(strictEquals('Water', 'Oil')); //false