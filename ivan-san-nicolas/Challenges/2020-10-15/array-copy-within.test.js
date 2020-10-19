const {
    expect
} = require('@jest/globals');
const myCopyWithin = require('./array-copy-within.js');

describe('Array copy within', () => {
    test('should return ', () => {
        // arrange
        let obj = {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            length: 5
        };
        let target = 3;
        let start = 2;
        let end = 4;
        // act
        const result = myCopyWithin(obj, target, start, end);
        // assert
        expect(result).toEqual({
            0: 1,
            1: 2,
            2: 3,
            3: 3,
            4: 4,
            length: 5
        });
    });
});