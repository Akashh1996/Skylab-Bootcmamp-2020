// ARRAY
// let arr = [
//     "pedro",
//     "ed",
//     "carlos",
// ]

// let mapped = arr.map((item)=>{
//     return item = item + "_Mapped"
// });
// console.log(mapped) // ed_Mapped...

// let reduced = arr.reduce( function(total, amount){
//     return total + amount
// });


Object.prototype.map = function(fun) {
    newObject = {};
    for(const [key, value] of Object.entries(this)) {
        newObject[key] = fun(value)
    }
    return newObject;
}

let mappedOBj = obj.map((item)=>{
    return item + "_mapped"
});
console.log(mappedOBj) // ed_Mapped



Object.prototype.reduce = function(func) {
    newObject = {};
    newObject.current = 0;
    for(const property in this) {
        console.log(newObject['current'])
        newObject.current = func(newObject['current'], this[property])
    }
    return newObject;
}

let obj = {
    propertyOne: 1,
    propertyTwo: 4,
    propertyThree: 5
}
let reduceOBj = obj.reduce((total, amount)=>{
    let result = total + amount
    return result
});
console.log(reduceOBj) // ed_Mapped


