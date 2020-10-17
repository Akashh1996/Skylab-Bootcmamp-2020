const comparePowers = require ('./comparePowers');

describe('compare powers', () => {
    test('should compare powers', () => {
        //arange
        const original1 = [2,10];
        const original2 = [2,15];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(1)
    })
    test('should compare powers', () => {
        //arange
        const original1 = [2,10];
        const original2 = [3,10];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(1)
    })
    test('should compare powers', () => {
        //arange
        const original1 = [2,10];
        const original2 = [2,10];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(0)
    })
    test('should compare powers', () => {
        //arange
        const original1 = [3,9];
        const original2 = [5,6];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(-1)
    })
    test('should compare powers', () => {
        //arange
        const original1 = [7,7];
        const original2 = [5,8];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(-1)
    })
    test('should compare powers', () => {
        //arange
        const original1 = [6418, 62678];
        const original2 = [1897, 82327];
        //act
        const result = comparePowers(original1, original2);
        //assert
        expect(result).toBe(1)
    })
})