const sum = require('./sum');

describe ('sum', () => {
    
    test('should sum 3 + 5 equals 8', () => {
        expect(sum(3,5)).toBe(8);
    });
    
    test('sum 1 + 2 equals 3', () => {
        expect(sum(1,2)).toBe(3);
    });
    
    test('sum 8 + 10 equals 18', () => {
        expect(sum(8,10)).toBe(18);
    });
});