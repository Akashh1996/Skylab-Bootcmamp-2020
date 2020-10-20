const comparePowers = require("./comparePowers.js");

describe("comparePowers", () => {
    test("should return 1", () => {
        let array1 = [2, 10];
        let array2 = [2, 15];
        const powers = comparePowers(array1, array2);
        expect(powers).toBe(1);
    });
    test("should return 1", () => {
        let array1 = [2, 10];
        let array2 = [3, 10];
        const powers = comparePowers(array1, array2);
        expect(powers).toBe(1);
    });
    test("should return 0", () => {
        let array1 = [2, 10];
        let array2 = [2, 10];
        const powers = comparePowers(array1, array2);
        expect(powers).toBe(0);
    });
    test("should return -1", () => {
        let array1 = [3, 9];
        let array2 = [5, 6];
        const powers = comparePowers(array1, array2);
        expect(powers).toBe(-1);
    });
    test("should return -1", () => {
        let array1 = [7, 7];
        let array2 = [5, 8];
        const powers = comparePowers(array1, array2);
        expect(powers).toBe(-1);
    });
});