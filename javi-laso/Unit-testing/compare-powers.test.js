const comparePowers = require('./compare-powers');

describe('Compare powers', () => {
    test('should return 1', () => {
        //assign
            const n1 = [2,10];
            const n2 = [2,15];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(1);
    })

    test('should return 1', () => {
        //assign
            const n1 = [2,10];
            const n2 = [3,10];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(1);
    })

    test('should return 0', () => {
        //assign
            const n1 = [2,10];
            const n2 = [2,10];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(0);
    })

    test('should return -1', () => {
        //assign
            const n1 = [3,9];
            const n2 = [5,6];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(-1);
    })

    test('should return -1', () => {
        //assign
            const n1 = [7,7];
            const n2 = [5,8];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(-1);
    })

    test('should return -1', () => {
        //assign
            const n1 = [2136449,7569462];
            const n2 = [209571,8726227];
        //add
            const result = comparePowers(n1, n2);
        //assert
        expect(result).toBe(-1);
    })
});