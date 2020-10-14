const sum = require('./index');

describe('Sum', () => {
    test('sum 1 + 2 equals 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('sum 3 + 5 equals 8', () => {
        expect(sum(3, 5)).toBe(8);
    });
});
