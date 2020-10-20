function findOdd(A) {
    debugger;
    let totalArray = [];
    let actualNum = A[0];
    for (let i in A) {
        if (A[i] === actualNum) totalArray.push(A[i]);
    }
    if (totalArray.length % 2 === 0) {
        while (A.includes(totalArray[0])) {
            for (let i in A) {
                if (A[i] === totalArray[0]) A.splice(i, 1);
            }
        }
        return findOdd(A);
    } else return totalArray[0];
}

module.exports = findOdd;