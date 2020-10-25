//map
function myMap(obj, callback) {
    let myObj= {};
    debugger;
    for(let property in obj) {
        myObj[property] = callback(obj[property]);
    }
    return myObj;
}

function modifier(x){
    return x + " lol"
}

let newObj = {1: "skylab", 2: "aaasas", 3: "pizza"}


console.log(myMap(newObj, modifier));

//filter
const method = {
    myFilter: (obj, callback) => {
    let contador = 0;
    let myObj= {};
    for(const property in obj) {
        const passTest = callback(obj[property]);
        if(passTest) {
            contador ++;
            myObj[property] = obj[property];
        }
    }
    if(contador === 0) {
        return undefined;
    } else {
        myObj.length = contador;
        return myObj;
    }
}
}
const newObj = {
    1: 12,
    2: 5,
    3: 8,
    4: 130,
    5: 44,
    __proto__: method
}
let result = newObj.myFilter(newObj, (property) => {
    if(property >= 10){
        return true;
    }else {
        return false;
    }
});
console.log(result);