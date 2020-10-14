/*//////////////////////

In this little assignment you are given a
string of space separated numbers, and have 
to return the highest and lowest number.

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, 
and highest number is first.
//////////////////////*/

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