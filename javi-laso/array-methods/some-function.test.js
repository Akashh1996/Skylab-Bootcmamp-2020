const someFunction = require('./some-function');

describe('Some function', () => {
    let skylabArray;

    beforeEach(() => {        
        skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
    });

    test('Should return true finding 1', () => {
        //assign
        //act
        const response = skylabArray.someFunction((value) => { return value === 1 });
        //expect
        expect(response).toBe(true);
    });

    test('Should return false because none of the elements is > 20', () => {
        //assign
        //act
        const response = skylabArray.someFunction((value) => { return value > 20 });
        //expect
        expect(response).toBe(false);
    });

    test('Should return false because none of the elements is < 0', () => {
        //assign
        //act
        const response = skylabArray.someFunction((value) => { return value < 0 });
        //expect
        expect(response).toBe(false);
    });

    test('Should return true because there is an even number', () => {
        //assign
        //act
        const response = skylabArray.someFunction((value) => { return value % 2 == 0 });
        //expect
        expect(response).toBe(true);
    });

});