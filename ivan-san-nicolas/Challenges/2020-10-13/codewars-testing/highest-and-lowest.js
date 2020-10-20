function highAndLow(num) {
    let newStr = '';
    let maxNum = +num[0];
    let minNum = +num[0];
    let actualNum = '';
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== ' ') actualNum += num[i];
        if ((num[i] === ' ' && actualNum !== '') || (i === num.length - 1 && actualNum !== '')) {
            actualNum = +actualNum;
            if (actualNum > maxNum) maxNum = actualNum;
            if (actualNum < minNum) minNum = actualNum;
            actualNum = '';
        }
    }
    newStr = `${maxNum} ${minNum}`;
    return newStr;
}

module.exports = highAndLow;