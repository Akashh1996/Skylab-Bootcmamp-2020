const {
    expect
} = require("@jest/globals");
const highAndLow = require("./highest-and-lowest");

describe('highAndLow', () => {

    test('should return "542 -214"', () => {
        // arrange
        let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("542 -214")
    })
});