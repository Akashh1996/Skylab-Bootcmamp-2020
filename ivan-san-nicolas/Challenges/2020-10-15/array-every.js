const myArray = {};

function myEvery(obj, callback) {
    let objArray = Object.values(obj);
    for (let i = 0; i < objArray.length - 1; i++) {
        if (!callback(objArray[i])) return false;
    }
    return true;
};

let obj = {
    0: 8,
    1: 8,
    2: 7,
    3: 8,
    length: 4
};

const result = myEvery(obj, (value) => {
    return value / 2 === 4;
});

console.log(result);