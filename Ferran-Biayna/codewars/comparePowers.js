function comparePowers(n1,n2) {
    if (Math.pow(n1[0],n1[1]) < Math.pow(n2[0],n2[1])) {
        return 1
    } else if (Math.pow(n1[0],n1[1]) === Math.pow(n2[0],n2[1])) {
        return 0
    } else {
        return -1
    }
  }

module.exports = comparePowers;