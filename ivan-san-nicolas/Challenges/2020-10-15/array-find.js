const myArray = {};

function myFind(obj, callback) {
    let newObj = {}
    let objArray = Object.values(obj);
    for (let i = 0; i < objArray.length; i++) {
        if (callback(objArray[i])) return objArray[i];
    }
};

let obj = {
    0: 100,
    1: 2,
    2: 3,
    3: 15,
    length: 4
};

const result = myFind(obj, (value) => {
    return value > 10;
});

console.log(result);