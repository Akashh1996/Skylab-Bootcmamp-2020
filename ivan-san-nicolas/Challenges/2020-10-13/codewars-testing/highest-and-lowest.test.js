const highAndLow = require("./highest-and-lowest");

describe('highAndLow', () => {

    test('should return "542 -214"', () => {
        // arrange
        let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("542 -214");
    });
    test('should return "542 -214" even with a space in the first position', () => {
        // arrange
        let numbers = " 4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("542 -214");
    });
    test('should return "5 1"', () => {
        // arrange
        let numbers = "1 2 3 4 5";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("5 1");
    });
    test('should return "5 -3"', () => {
        // arrange
        let numbers = "1 2 -3 4 5";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("5 -3");
    });
    test('should return "9 -5"', () => {
        // arrange
        let numbers = "1 9 3 4 -5";
        // act
        const str = highAndLow(numbers);
        // assert
        expect(str).toBe("9 -5");
    });
});