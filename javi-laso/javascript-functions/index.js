function sum(a, b) {
    return a + b;
}

module.exports = sum;

// export function strictEquals (a, b) {
//     if (Object.is(a, NaN) && Object.is(b, NaN)) {
//         return false;
//     } else if (Object.is(a, 0) && Object.is(b, -0)) {
//         return true;
//     } else if (Object.is(a, -0) && Object.is(b, 0)) {
//         return true;
//     }
    
//     return Object.is(a, b);
// }

// function cloneObject (obj) {
//     const objkeys = Object.keys(obj);
//     const objvalues = Object.values(obj);
//     const newObject = {};

//     for(let i = 0; i < objkeys.length; i++) {
//         newObject[objkeys[i]] = objvalues[i];
//     }

//     return newObject;
// }