const { danielArray } = require('./array-methods');

describe('array-methods', () =>{
    describe ('.length', () => {
        test('danielArray.length should return 3', () => {
            //arrange
            //act
            const response = danielArray.length;
            //assert
            expect(response).toBe(3);
        });
    });
    describe ('.map', () => {
        test('danielArray.map((x) => x*2, danielArray) should return { "0": 2, "1": 4, "2": 6, length: 3 }', () => {
            //arrange
            //act
            const response = danielArray.map((x) => x * 2, danielArray);
            //assert
            expect(response).toEqual({ '0': 2, '1': 4, '2': 6, length: 3 });
        });
    });
    describe ('.filter', () => {
        test("danielArray.filter((x) => x>1, danielArray) should return { '1': 2, '2': 3, length: 2 }", () => {
            //arrange
            //act
            const response = danielArray.filter((x) => x > 1, danielArray);
            //assert
            expect(response).toEqual({ '1': 2, '2': 3, length: 2 });
        });
    });
    describe ('.find', () => {
        test("danielArray.find((x) => x>1, danielArray) should return 2", () => {
            //arrange
            //act
            const response = danielArray.find((x) => x > 1, danielArray);
            //assert
            expect(response).toEqual(2);
        });
    });
    describe ('.findIndex', () => {
        test("danielArray.findIndex((x) => x>1, danielArray) should return 1", () => {
            //arrange
            //act
            const response = danielArray.findIndex((x) => x > 1, danielArray);
            //assert
            expect(response).toEqual(1);
        });
    });
    describe ('.fill', () => {
        test("danielArray.fill(danielArray, 1,1,2) should return { '0': 1, '1': 1, '2': 3, length: 3 }", () => {
            //arrange
            //act
            const response = danielArray.fill(danielArray, 1,1,2);
            //assert
            expect(response).toEqual({ '0': 1, '1': 1, '2': 3, length: 3 });
        });
    });
    describe ('.some', () => {
        test("danielArray.some((x) => x > 1, danielArray)) should return true}", () => {
            //arrange
            //act
            const response = danielArray.some((x) => x > 1, danielArray);
            //assert
            expect(response).toEqual(true);
        });
    });
    describe ('.reduce', () => {
        test("danielArray.reduce(danielArray, (a,b) => a+b) should return 6}", () => {
            //arrange
            //act
            const response = danielArray.reduce(danielArray, (a,b) => a+b);
            //assert
            expect(response).toEqual(6);
        });
    });
    describe ('.copyWithin', () => {
        test("danielArray.copyWithin(danielArray, 1,0,3) should return { '0': 1, '1': 1, '2': 2, length: 3 }", () => {
            //arrange
            //act
            const response = danielArray.copyWithin(danielArray, 1,0,3);
            //assert
            expect(response).toEqual({ '0': 1, '1': 1, '2': 2, length: 3 });
        });
    });
});