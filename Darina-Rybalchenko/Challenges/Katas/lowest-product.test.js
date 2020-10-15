const { test, expect } = require('@jest/globals')
const lowestProduct = require('./lowest-product')

test('return an error if a string is short', () => {
    const result = lowestProduct('333')
    expect(result).toBe('Number is too small')
})