const highAndLow = require('./high-and-low');

describe ('highAndLow', () => {

    test('should return the highest and lowest number of an array', () => {
        let numbers = ('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
        highAndLow(numbers);
        expect(result).toEqual('542 -214');
    });
});