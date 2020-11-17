function comparePowers(a, b) {
    if (Math.pow(a[0], a[1]) > Math.pow(b[0], b[1])) {
        return -1;
    } else if (Math.pow(a[0], a[1]) === Math.pow(b[0], b[1])) {
        return 0;
    } else {
        return 1;
    }
}

module.exports = comparePowers;