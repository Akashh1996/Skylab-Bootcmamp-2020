function highestLowest(str) {
    let x = str.split(' ').map(Number);
    let highAndLow = '';
    const maxNum = Math.max.apply(null, x);
    const minNum = Math.min.apply(null, x)
    for (i = 0; i < 3; i++) {
        if (i === 0) {
            highAndLow += `${maxNum}`
        } else if (i === 1) {
            highAndLow += ' ';
        } else {
            highAndLow += `${minNum}`
        }
    }
    return highAndLow;
}

module.exports = highestLowest;