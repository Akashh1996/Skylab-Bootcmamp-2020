const fillFunction = require('./fill-function');

describe('Fill function', () => {
    let skylabArray;

    beforeEach(() => {        
        skylabArray = {0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6};
    });

    test('Should change to 99 in positions 3, 4 and 5', () => {
        //assign
        //act
        skylabArray.fillFunction(99, 3);
        //expect
        expect(skylabArray).toEqual({0: 1, 1: 16, 2:0, 3:99, 4: 99, 5:99, length: 6});
    });
    
    test('Should change to 99 in positions 2, 3, 4 and 5', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, -4);
        //expect
        expect(skylabArray).toEqual({0: 1, 1: 16, 2:99, 3:99, 4: 99, 5:99, length: 6});
    });
    
    test('Should change to 99 in first position', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, 0, 1);
        //expect
        expect(skylabArray).toEqual({0: 99, 1: 16, 2:0, 3:1, 4: 9, 5:3, length: 6});
    });
    
    test('Should change to 99 in last position', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, skylabArray.length - 1);
        //expect
        expect(skylabArray).toEqual({0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:99, length: 6});
    });
    
    test('Should change to 99 in last position with start = -1', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, -1);
        //expect
        expect(skylabArray).toEqual({0: 1, 1: 16, 2:0, 3:1, 4: 9, 5:99, length: 6});
    });
    
    test('Should change to 99 in last two positions with start = -2', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, -2);
        //expect
        expect(skylabArray).toEqual({0: 1, 1: 16, 2:0, 3:1, 4: 99, 5:99, length: 6});
    });
    
    test('Should change to 99 in all the positions except the last two ones with start = 0 and end = -2', () => {
        //arrange
        //act
        skylabArray.fillFunction(99, 0, -2);
        //expect
        expect(skylabArray).toEqual({0: 99, 1: 99, 2:99, 3:99, 4: 9, 5:3, length: 6});
    });
});