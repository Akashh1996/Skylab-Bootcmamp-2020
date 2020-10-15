const comparePowers = require("./comparePowers.js");

describe("comparePowers", () => {
    test("should return 1", () => {
        //arrange
        let array1 = [2, 10];
        let array2 = [2, 15];
        //act
        const powers = comparePowers(array1, array2);
        //assert
        expect(powers).toBe(1);
    });
    test("should return 1", () => {
        //arrange
        let array1 = [2, 10];
        let array2 = [3, 10];
        //act
        const powers = comparePowers(array1, array2);
        //assert
        expect(powers).toBe(1);
    });
    test("should return 0", () => {
        //arrange
        let array1 = [2, 10];
        let array2 = [2, 10];
        //act
        const powers = comparePowers(array1, array2);
        //assert
        expect(powers).toBe(0);
    });
    test("should return -1", () => {
        //arrange
        let array1 = [3, 9];
        let array2 = [5, 6];
        //act
        const powers = comparePowers(array1, array2);
        //assert
        expect(powers).toBe(-1);
    });
    test("should return -1", () => {
        //arrange
        let array1 = [7, 7];
        let array2 = [5, 8];
        //act
        const powers = comparePowers(array1, array2);
        //assert
        expect(powers).toBe(-1);
    });
});