function comparePowers(n1, n2) {
    let a = Math.log(n1[0]) * n1[1]
    let b = Math.log(n2[0]) * n2[1]
    return a === b ? 0 : a > b ? -1 : 1

}

module.exports = comparePowers;