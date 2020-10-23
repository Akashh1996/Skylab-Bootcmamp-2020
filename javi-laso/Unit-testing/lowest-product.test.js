const lowestProduct = require('./lowest-product');

describe('Lowest product of 4 consecutive numbers', () => {
    test('should return 24', () => {
        //assign
            const str = "123456789";
        //add
            const result = lowestProduct(str);
        //assert
        expect(result).toBe(24);
    })

    test('should return 120', () => {
        //assign
            const str = "234567899";
        //add
            const result = lowestProduct(str);
        //assert
        expect(result).toBe(120);
    })

    test('should return 1', () => {
        //assign
            const str = "2345611117899";
        //add
            const result = lowestProduct(str);
        //assert
        expect(result).toBe(1);
    })

    test('should return "Number is too small"', () => {
        //assign
            const str = "333";
        //add
            const result = lowestProduct(str);
        //assert
        expect(result).toBe("Number is too small");
    })

    test('should return 4', () => {
        //assign
            const str = "1234111";
        //add
            const result = lowestProduct(str);
        //assert
        expect(result).toBe(4);
    })
});    