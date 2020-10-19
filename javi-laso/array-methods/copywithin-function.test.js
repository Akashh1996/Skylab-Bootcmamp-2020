const copywithinFunction = require('./copywithin-function');

describe('CopyWithIn function', () => {
    let skylabArray;

    beforeEach(() => {        
        skylabArray = {0:  'a', 1: 'b', 2:'c', 3:'d', 4: 'e', 5:'f', length: 6};
    });

    test('Should take the element with index 3 and put it in the first position', () => {
        //assign
        //act
        skylabArray.copywithinFunction(0, 3, 4);
        //expect
        expect(skylabArray).toEqual({0: 'd', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', length: 6 });
    });

    test('Should take the last three values and put it in index 1 and after', () => {
        //assign
        //act
        skylabArray.copywithinFunction(1, 3);
        //expect
        expect(skylabArray).toEqual({0: 'a', 1: 'd', 2: 'e', 3: 'f', 4: 'e', 5: 'f', length: 6 });
    });

    test('Should change last two positions with the first two elements', () => {
        //assign
        //act
        skylabArray.copywithinFunction(-2);
        //expect
        expect(skylabArray).toEqual({0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'a', 5: 'b', length: 6 });
    });
});