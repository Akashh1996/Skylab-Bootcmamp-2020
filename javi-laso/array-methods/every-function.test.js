const everyFunction = require('./every-function');

describe('Every function', () => {
    let skylabArray;

    beforeEach(() => {        
        skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
    });

    test('Should return false because not all numbers are 1', () => {
        //assign
        //act
        const response = skylabArray.everyFunction((value) => { return value === 1 });
        //expect
        expect(response).toBe(false);
    });

    test('Should return true because all the elements are > 20', () => {
        //assign
        //act
        const response = skylabArray.everyFunction((value) => { return value < 20 });
        //expect
        expect(response).toBe(true);
    });

    test('Should return false because one of the elements is not > 0', () => {
        //assign
        //act
        const response = skylabArray.everyFunction((value) => { return value > 0 });
        //expect
        expect(response).toBe(false);
    });

    test('Should return false because not all the elements are even', () => {
        //assign
        //act
        const response = skylabArray.everyFunction((value) => { return value % 2 == 0 });
        //expect
        expect(response).toBe(false);
    });

});