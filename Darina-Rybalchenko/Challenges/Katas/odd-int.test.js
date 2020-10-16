const { test, expect } = require('@jest/globals')
const findOdd = require('./odd-int')

test('find the one that appears an odd number of times', () => {
    const result = findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
    expect(result).toBe(5)
})

test('find the one that appears an odd number of times', () => {
    const result = findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])
    expect(result).toBe(-1)
})

