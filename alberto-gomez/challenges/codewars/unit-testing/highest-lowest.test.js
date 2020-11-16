const highestLowest = require ('./highest-lowest');

describe('highestLowest ', () => {
    test('should check which numbers of a string are the highest and the lowest.', () => {
        //arrange
        const numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        const maxMin = "542 -214";
        //act
        const highAndLow = highestLowest(numbers)
        //assert
        expect(highAndLow).toBe(maxMin);
    })
})