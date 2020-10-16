const { test, expect } = require('@jest/globals')
const isHappy = require('./is-happy')

test('square its digits and add them together, you eventually end up at 1.', () => {
    const result = isHappy(7, 2)
    expect(result).toBe([1])
})

test('square its digits and add them together, you eventually end up at 1.', () => {
    const result = isHappy(42, 2)
    expect(result).toBe([42, 20, 4, 16, 37, 58, 89, 145, 42])
})
