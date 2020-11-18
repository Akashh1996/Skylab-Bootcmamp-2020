const myArray = {};

function myEvery(obj, filler, startpos = 0, endpos = this.length, callback) {
    let newObj = {
        ...obj
    };
    let objArray = Object.values(obj);
    if (filler && startpos && endpos) {
        for (let i in newObj) {
            if (i >= startpos && i <= endpos) newObj[i] = filler;
        }
    } else if (filler && startpos && !endpos) {
        for (let i in newObj) {
            if (i >= startpos) newObj[i] = filler;
        }
    } else if (filler && !startpos && !endpos) {
        for (let i in newObj) {
            newObj[i] = filler;
        }
    }
    return newObj;
};

let obj = {
    0: 100,
    1: 100,
    2: 100,
    3: 100,
    length: 4
};

let filler = 2;
let startpos = 1;
let endpos = 3;

const result = myEvery(obj, filler, startpos, endpos, (value) => {
    return value / 2 === 4;
});

console.log(result);