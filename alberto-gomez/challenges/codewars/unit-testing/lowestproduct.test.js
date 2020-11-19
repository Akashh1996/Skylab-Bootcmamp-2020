const lowestProduct = require ('./lowestproduct')

describe('lowestProduct', () => {
    test('should multiply the first 4 digits of string', () => {
        //arrange
        const input = '123456789';
        const result = 24;
        //act
        const resultToFind = lowestProduct(input);
        //assert
        expect(resultToFind).toBe(result);
    })

    test('should return Number is to small if string\'s length is below 4', () => {
        //arrange
        const input = '123';
        result = 'Number is too small';
        //act
        const resultToFind = lowestProduct(input)
        //assert
        expect(resultToFind).toBe(result);
    })
})