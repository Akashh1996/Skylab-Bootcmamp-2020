const pushFunction = require('./push-function');

describe('Push function', () => { 
    let skylabArray;

    beforeEach(() => {        
        skylabArray = {length: 0};
    });

    test('Should add an element to the end of the array', () => {
        //assign
        //act
        skylabArray.pushFunction('element1');
        //expect
        expect(skylabArray[0]).toBe('element1');
    });

    test('The length after adding an element should be 1', () => {
        //assign
        //act
        skylabArray.pushFunction('element1');
        //expect
        expect(skylabArray.length).toBe(1);
    });

    test('Should add multiple elements to the end of the array', () => {
        //assign
        //act
        skylabArray.pushFunction('element1', 'element2', 'element3');
        //expect
        expect(skylabArray[0]).toBe('element1');
        expect(skylabArray[1]).toBe('element2');
        expect(skylabArray[2]).toBe('element3');
    });

    test('The length after adding 3 elements should be 3', () => {
        //assign
        //act
        skylabArray.pushFunction('element1', 'element2', 'element3');
        //expect
        expect(skylabArray.length).toBe(3);
    });
});