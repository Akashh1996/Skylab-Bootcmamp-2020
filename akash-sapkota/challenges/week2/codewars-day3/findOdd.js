function findOdd(A) {
    let newArray = []
    for (let i = 0; i < A.length; i++) {
        if (!newArray.includes(A[i])) {
            newArray.push(A[i])
        } else {
            newArray.splice(newArray.indexOf(A[i]), 1)
        }
    }
    return newArray[0]
}

module.exports = highAndLow;