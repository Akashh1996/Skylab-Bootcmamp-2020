function highAndLow(numbers) {
    let newNumbers = numbers.split(' ')
    let sortedMin = newNumbers.sort(function (a, b) { return a - b })
    let sortedMax = sortedMin[sortedMin.length - 1]
    return (`${sortedMax} ${sortedMin[0]}`)
}

module.exports = highAndLow