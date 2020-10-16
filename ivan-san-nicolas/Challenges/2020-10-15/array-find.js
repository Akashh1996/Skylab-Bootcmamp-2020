const myArray = {};

function myFind(obj, callback) {
    for (let i in obj) {
        if (callback(obj[i])) return obj[i];
    }
};

let obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 15,
    length: 4
};

const result = myFind(obj, (value) => {
    return value > 10;
});

console.log(result);