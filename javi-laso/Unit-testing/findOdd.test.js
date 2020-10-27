const findOdd = require('./findOdd');

describe('Find odd times number', () => {
    test('should return 5', () => {
        //assign
            const arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
        //add
            const result = findOdd(arr);
        //assert
        expect(result).toBe(5);
    })

    test('should return -1', () => {
        //assign
            const arr = [1,1,2,-2,5,2,4,4,-1,-2,5];
        //add
            const result = findOdd(arr);
        //assert
        expect(result).toBe(-1);
    })

    test('should return 5', () => {
        //assign
            const arr = [20,1,1,2,2,3,3,5,5,4,20,4,5];
        //add
            const result = findOdd(arr);
        //assert
        expect(result).toBe(5);
    })

    test('should return 10', () => {
        //assign
            const arr = [1,1,1,1,1,1,10,1,1,1,1];
        //add
            const result = findOdd(arr);
        //assert
        expect(result).toBe(10);
    })

    test('should return 1', () => {
        //assign
            const arr = [5,4,3,2,1,5,4,3,2,10,10];
        //add
            const result = findOdd(arr);
        //assert
        expect(result).toBe(1);
    })
});