function findOdd(arr) {
    let times;
    for (let i = 0; i < arr.length; i++) {
        times = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                times++;
            }
        }
        if (times % 2 != 0) {
            return arr[i];
        }
    }
}

module.exports = findOdd;