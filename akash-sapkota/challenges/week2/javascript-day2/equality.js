const checkStrictEquality = (a, b) => (typeof (a) == typeof (b) && a == b)

console.log(checkStrictEquality(null, undefined)); //false
console.log(checkStrictEquality(0, -0)); //true