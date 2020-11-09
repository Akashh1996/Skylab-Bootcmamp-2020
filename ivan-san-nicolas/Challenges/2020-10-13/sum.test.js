const sum = require('./sum.js');

describe('Sum', () => {
    test('Should sum 1 + 2 equals 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('Should sum -1 + -2 equals -3', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
})