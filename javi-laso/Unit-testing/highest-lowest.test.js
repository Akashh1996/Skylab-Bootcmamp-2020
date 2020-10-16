const highAndLow = require('./highest-lowest');


describe('High and low', () => {

    test('should return 542 and -214', () => {
        //assign
            const numbersString = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
        //add
            const result = highAndLow(numbersString);
        //assert
        expect(result).toBe("542 -214");
    })

    test('should return 42 and 42', () => {
        //assign
            const numbersString = "42";
        //add
            const result = highAndLow(numbersString);
        //assert
        expect(result).toBe("42 42");
    })

    test('should return 66 and 6', () => {
        //assign
            const numbersString = "66 8 12 25 15 52 48 6";
        //add
            const result = highAndLow(numbersString);
        //assert
        expect(result).toBe("66 6");
    })

    test('should return -6 and -66', () => {
        //assign
            const numbersString = "-66 -8 -12 -25 -15 -52 -48 -6";
        //add
            const result = highAndLow(numbersString);
        //assert
        expect(result).toBe("-6 -66");
    })
});
