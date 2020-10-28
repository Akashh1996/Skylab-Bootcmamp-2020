const findOdd = require("./findOdd.js");

describe('findOdd', () => {

    test('should return number 5', () => {
        let array = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
        const num = findOdd(array);
        expect(num).toBe(5);
    });
    test('should return number -1', () => {
        let array = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
        expect(num).toBe(-1);
    });
    test('should return number 5', () => {
        let array = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
        const num = findOdd(array);
        expect(num).toBe(5);
    });
    test('should return number 10', () => {
        let array = [10];
        const num = findOdd(array);
        expect(num).toBe(10);
    });
    test('should return number 10', () => {
        let array = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
        const num = findOdd(array);
        expect(num).toBe(10);
    });
    test('should return number 1', () => {
        let array = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
        const num = findOdd(array);
        expect(num).toBe(1);
    });
});