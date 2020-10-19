const { test, expect } = require('@jest/globals')
const lowestProduct = require('./lowest-product')

test('return an error if a string is short', () => {
    const result = lowestProduct('333')
    expect(result).toBe('Number is too small')
})

test('return an error if a string is short', () => {
    const result = lowestProduct('3123456789')
    expect(result).toBe(24)
})

test('return an error if a string is short', () => {
    const result = lowestProduct('234567899')
    expect(result).toBe(120)
})
