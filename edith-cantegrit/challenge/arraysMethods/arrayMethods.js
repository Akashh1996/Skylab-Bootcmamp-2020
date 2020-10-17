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

// let objname = {
//     propertyOne: "edith",
//     propertyTwo: "pedro",
//     propertyThree: "theo"
// }

// Object.prototype.map = function(fun) {
//     newObject = {};
//     for(const [key, value] of Object.entries(this)) {
//         newObject[key] = fun(value)
//     }
//     return newObject;
// }

// let mappedOBj = objname.map((item)=>{
//     return item + "_mapped"
// });
// console.log(mappedOBj) // ed_Mapped


Object.prototype.filter = function(callback, original) {
    newObject = {}
    newObject.id
    for (property in original) {
       if(callback(original[property]) === true) {
           newObject.id = original[property]
       }
    }
    return {
     newObject
    };
}

let ObjToFilter = {
    propertyOne: 8,
    propertyTwo: 4,
    propertyThree: 5
}

const isMoreThanFive = number => number > 2;

ObjToFilter.filter(isMoreThanFive, ObjToFilter)






// Object.prototype.reduce = function(func) {
//     newObject = {};
//     newObject.current = 0;
//     for(const property in this) {
//         console.log(newObject['current'])
//         newObject.current = func(newObject['current'], this[property])
//     }
//     return newObject;
// }

// let obj = {
//     propertyOne: 1,
//     propertyTwo: 4,
//     propertyThree: 5
// }

// let reduceOBj = obj.reduce((total, amount)=>{
//     let result = total + amount
//     return result
// });
// console.log(reduceOBj) // ed_Mapped


