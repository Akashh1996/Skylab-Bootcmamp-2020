var moveZeros = function (arr) {
    let fullarray = []
    let zeros = arr.filter(num => num === 0);
    let whithoutZeros = arr.filter(num => num !== 0);
    return fullarray = whithoutZeros.concat(zeros)
}