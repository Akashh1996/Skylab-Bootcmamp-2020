const findFunction = require('./find-function');

describe('Map function', () => {
    test('Should return 25', () => {
        //assign
        const skylabArray = {0: 1, 1: '2', 2: {}, 3: 'pet', 4: null, 5: 25, length: 6};
        //add
        const response = skylabArray.findFunction(value => value > 10);
        //expect
        expect(response).toBe(25);
    });
    
    test('Should return undefined', () => {
        //assign
        const skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
        //add
        const response = skylabArray.findFunction(value => value > 28);
        //expect
        expect(response).toBe(undefined);
    });
    
    test('Should return -16', () => {
        //assign
        const skylabArray = {0: 1, 1: -16, 2:0, 3:1, 4: 9, 5:3, length: 6};
        //add
        const response = skylabArray.findFunction(value => value < 0);
        //expect
        expect(response).toBe(-16);
    });
});