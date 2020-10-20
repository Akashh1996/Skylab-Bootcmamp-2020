const highAndLow = require("./highest-and-lowest");

describe('highAndLow', () => {

    test('should return "542 -214"', () => {
        let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        expect(str).toBe("542 -214");
    });
    test('should return "542 -214" even with a space in the first position', () => {
        let numbers = " 4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        const str = highAndLow(numbers);
        expect(str).toBe("542 -214");
    });
    test('should return "5 1"', () => {
        let numbers = "1 2 3 4 5";
        const str = highAndLow(numbers);
        expect(str).toBe("5 1");
    });
    test('should return "5 -3"', () => {
        let numbers = "1 2 -3 4 5";
        const str = highAndLow(numbers);
        expect(str).toBe("5 -3");
    });
    test('should return "9 -5"', () => {
        let numbers = "1 9 3 4 -5";
        const str = highAndLow(numbers);
        expect(str).toBe("9 -5");
    });
});