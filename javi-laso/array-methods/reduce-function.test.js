const reduceFunction = require('./reduce-function');

describe('Recuce function', () => {
    test('Should return 10', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator + currentValue});
        //expect
        expect(response).toBe(10);
    });

    test('Should return 24', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator * currentValue});
        //expect
        expect(response).toBe(24);
    });

    test('Should return -8', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator - currentValue});
        //expect
        expect(response).toBe(-8);
    });
    
    test('Should return 15', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator + currentValue}, 5);
        //expect
        expect(response).toBe(15);
    });

    test('Should return 48', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator * currentValue}, 2);
        //expect
        expect(response).toBe(48);
    });

    test('Should return -24', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, 3: 4, length: 4};
        //add
        const response = skylabArray.reduceFunction((accumulator, currentValue) => {return accumulator * currentValue}, -1);
        //expect
        expect(response).toBe(-24);
    });
});