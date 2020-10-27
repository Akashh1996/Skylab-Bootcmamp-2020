const lowestProduct = require('./lowest-product');

describe ('lowestProduct', () => {
    test('should return the odd number in the array', () => {
        let input = '123456789';
        expect(lowestProduct(input)).toBe(24);
    });

    test('should return "Number is too small" when there is only 3 digits', () => {
        input = '567';
        expect(lowestProduct(input)).toBe('Number is too small');
    })
});