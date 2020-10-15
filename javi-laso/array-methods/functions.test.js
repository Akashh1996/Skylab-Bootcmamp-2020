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
});