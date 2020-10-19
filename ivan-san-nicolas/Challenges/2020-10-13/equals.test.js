const areThemEquals = require('./equals.js');

describe('areThemEquals', () => {
    test('Should NaN and NaN not be equals', () => {
        //arrange
        let a = NaN;
        let b = NaN;
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(false);
    });

    test('Should 0 and -0 return true', () => {
        //arrange
        let a = 0;
        let b = -0;
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(true);
    });
    test('Should -0 and 0 return true', () => {
        //arrange
        let a = -0;
        let b = 0;
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(true);
    });
    test('Should return false to a different a and b', () => {
        //arrange
        let a = 1;
        let b = -1;
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(false);
    });
    test('Should return true to an equals a and b', () => {
        //arrange
        let a = 1;
        let b = 1;
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(true);
    });
    test('Should 1 and "1" return false', () => {
        //arrange
        let a = 1;
        let b = "1";
        //act
        const response = areThemEquals(a, b);
        //asert
        expect(response).toBe(false);
    });
})