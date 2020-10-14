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

function highAndLow(numbers) {
    debugger;
    let newStr = '';
    let maxNum = 0;
    let minNum = 0;
    let actualNum = '';
    for (let i in numbers) {
        if (numbers[i] !== ' ') actualNum += numbers[i];
        else if (numbers[i] === ' ' && actualNum !== '') {
            actualNum = +actualNum;
            if (actualNum > maxNum) maxNum = actualNum;
            else if (actualNum < minNum) minNum = actualNum;
            actualNum = '';
        }
    }
    newStr = `${maxNum} ${minNum}`;
    return newStr;
}

module.exports = highAndLow;