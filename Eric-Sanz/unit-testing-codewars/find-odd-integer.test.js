const findOdd = require('./find-odd-integer');

describe ('findOdd', () => {
    test('should return the odd number in the array', () => {
        let array = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
        findOdd(array)
        expect(Number(key)).toEqual(5);
    });
});
