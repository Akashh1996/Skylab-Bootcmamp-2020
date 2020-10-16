const highAndLow = require ('./highandlow')

describe('highAndLow', () => {
    test('should return highest and low only', () => {
        //arange
        const original = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        //act
        const result = highAndLow(original);
        //assert
        expect(result).toBe("542 -214")
    })
})