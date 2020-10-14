 checkStrictEquality(a, b) {
     return (typeof (a) == typeof (b) && a == b)
 }

 module.exports = checkStrictEquality;