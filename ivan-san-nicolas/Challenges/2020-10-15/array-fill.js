const myArray = {};

function myFill(obj, callback) {
    let newObj = {
        ...obj
    };
    for (let i in newObj) {
        if (i >= startpos && i <= endpos) newObj[i] = filler;
    }
    return newObj;
}


let obj = {
    0: 100,
    1: 100,
    2: 100,
    3: 100,
    length: 4
};

let filler = 0;

const result = myFill(obj, filler, startpos = 0, endpos = 3, (value) => {});

console.log(result);