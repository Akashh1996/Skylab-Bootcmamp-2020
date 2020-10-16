const mapFunction = require('./map-function');

describe('Map function', () => {
    test('Should return {0: 2, 1: 4, 2: 6, length: 3}', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2: 3, length: 3};
        //add
        const response = skylabArray.mapFunction((value) => { return value * 2});
        //expect
        expect(response).toEqual({0: 2, 1: 4, 2: 6, length: 3});
    })
    
    test('Should return {0: 4, 1: 8, 2: 32, length: 3}', () => {
        //assign
        const skylabArray = {0: 1, 1: 2, 2:8, length: 3};
        //add
        const response = skylabArray.mapFunction((value) => { return value * 4});
        //expect
        expect(response).toEqual({0: 4, 1: 8, 2: 32, length: 3});
    })
    
    test('Should add " callback"', () => {
        //assign
        const skylabArray = {0: 'have a', 1: 'be the', 2:'go to', length: 3};
        //add
        const response = skylabArray.mapFunction((value) => { return value + ' callback'});
        //expect
        expect(response).toEqual({0: 'have a callback', 1: 'be the callback', 2:'go to callback', length: 3});
    })
});
