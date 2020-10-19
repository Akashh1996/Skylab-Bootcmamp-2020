const myArray = {};

function mySome(obj, callback) {
    if (!obj[0]) return false;
    else {
        for (let i in obj) {
            if (callback(obj[i])) return true;
        }
        return false;
    }
};

let obj = {
    0: 1,
    1: 3,
    2: 8,
    3: 15,
    length: 4
};

const result = mySome(obj, (value) => {
    return value / 2 === 4;
});

console.log(result);