function myCopyWithin(obj, target, start, end) {
    let tempObj = {
        length: 0
    };
    let index = 0;
    if (end > obj.length) end = obj.length;
    for (let i in obj) {
        if (+i >= start && +i < end) {
            tempObj[tempObj.length] = obj[i];
            tempObj.length++;
        }
    }
    for (let i in obj) {
        if (+i >= target && +i <= (target + tempObj.length - 1)) {
            obj[i] = tempObj[index];
            index++;
        };
    }
    return obj;
}


let obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5
};

let target = 3;
let start = 2;
let end = 4;

const result = myCopyWithin(obj, target, start, end);

console.log(result);

module.exports = myCopyWithin;