/*////////////////////////////////
Given an array of integers, 
find the one that appears an odd number of times.

There will always be only one integer 
that appears an odd number of times.
///////////////////////////////*/

function findOdd(A) {
    let newArray = [];
    for (let i in A) {
        for (let k in newArray) {
            let alreadyIn = false;
            if (A[i] === newArray[K]) {
                alreadyIn = true;
            }
        }
        if (!alreadyIn) newArray.push(A[i]);
        else newArray.splice(indexOf(A[i], 1));
    }
    return newArray[0];
}

module.exports = findOdd;