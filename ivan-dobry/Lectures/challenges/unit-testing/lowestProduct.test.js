const lowestProduct = require ('./lowestProduct');

describe('lowest product', () => {
    test('should return lowest product', () => {
        //arange
        const original = "123456789";
        //act
        const result = lowestProduct(original);
        //assert
        expect(result).toBe(24)
    })
    test('should return lowest product', () => {
        //arange
        const original = "234567899";
        //act
        const result = lowestProduct(original);
        //assert
        expect(result).toBe(120)
    })
    test('should return lowest product', () => {
        //arange
        const original = "2345611117899";
        //act
        const result = lowestProduct(original);
        //assert
        expect(result).toBe(1)
    })
    test('should return too small', () => {
        //arange
        const original = "333";
        //act
        const result = lowestProduct(original);
        //assert
        expect(result).toBe("Number is too small")
    })
    test('should return lowest product', () => {
        //arange
        const original = "1234111";
        //act
        const result = lowestProduct(original);
        //assert
        expect(result).toBe(4)
    })
})