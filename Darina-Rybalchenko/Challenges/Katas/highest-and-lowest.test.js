const { test, expect } = require('@jest/globals')
const highAndLow = require('./highest-and-lowest')

test('highest and lowest number of a string', () => {
    const result = highAndLow('12 34 878 -3 0')
    expect(result).toBe('878 -3')
})
