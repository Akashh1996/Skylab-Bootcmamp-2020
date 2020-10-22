function strictEquals(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false
    }
    if (Object.is(a, 0) || Object.is(b, -0) || Object.is(a, -0) || Object.is(b, 0)) {
        return true
    }
    return (Object.is(a, b))
}

module.exports = strictEquals