const myArray = {};

function myFindIndex(obj, callback) {
    let objArray = Object.values(obj);
    for (let i = 0; i < objArray.length; i++) {
        if (callback(objArray[i])) return true;
    }
    return false;
};

let obj = {
    0: 11,
    1: 3,
    2: 8,
    3: 15,
    length: 4
};

const result = myFindIndex(obj, (value) => {
    return value / 2 === 4;
});

console.log(result);