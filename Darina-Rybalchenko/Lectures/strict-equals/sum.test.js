const sum = require('./sum')

test('sum 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('sum 1 + 2 equals 3', () => {
    expect(sum(3, 5)).toBe(8)
});