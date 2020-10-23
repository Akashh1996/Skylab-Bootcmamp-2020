const filterFunction = require('./filter-function');

describe('Filter function', () => {
    test('Should return only numbers', () => {
        //arrange
        const skylabArray = {0: 1, 1: '2', 2: 3, 3: 'pet', 4: null, 5: {}, length: 6};
        //act
        const response = skylabArray.filterFunction((value) => { return typeof value === 'string'});
        //expect
        expect(response).toEqual({0: '2', 1: 'pet', length: 2});
    });
    
    test('Should return numbers above 30', () => {
        //arrange
        const skylabArray = {0: 25, 1: 32, 2: 68, 3: 10, 4: 120, 5: -40, 6: 0, length: 7};
        //act
        const response = skylabArray.filterFunction((value) => { return value > 30});
        //expect
        expect(response).toEqual({0: 32, 1: 68, 2: 120, length: 3});
    });
    
    test('Should return negative numbers', () => {
        //arrange
        const skylabArray = {0: -25, 1: 32, 2: -1, 3: -10, 4: 120, 5: -40, 6: 0, length: 7};
        //act
        const response = skylabArray.filterFunction((value) => { return value < 0});
        //expect
        expect(response).toEqual({0: -25, 1: -1, 2: -10, 3: -40, length: 4});
    });
    
    test('Should return only ones', () => {
        //arrange
        const skylabArray = {0: -25, 1: 32, 2: -1, 3: -10, 4: 120, 5: -40, 6: 1, length: 7};
        //act
        const response = skylabArray.filterFunction((value) => { return value === 1});
        //expect
        expect(response).toEqual({0: 1, length: 1});
    });
});
