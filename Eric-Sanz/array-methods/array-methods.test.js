const {customArray,skylabArray} = require('./array-methods');

describe('array-methods', () => {

    describe('push-method', () => {

        // beforeEach('should restart the object'), () => {
        //     //act
        //     customArray = {};
        //     //assert
        // }

        test('Should return an object with one element', () => {
            //act
            const customArray = skylabArray.push(customArray, 'Skylab');
            //assert
            expect(customArray[0]).toBe('Skylab');
        });

        test('Should return an object with two element', () => {
            //act
            const customArray = skylabArray.push(customArray, 'Skylab');
            customArray = skylabArray.push(customArray, 'Bootcamp');
            //assert
            expect(customArray[1]).toBe('Bootcamp');
        });

        test('should return the length of the object elements', () => {
            //act
            const customArray = skylabArray.push(customArray, 'Skylab');
            customArray = skylabArray.push(customArray, 'Bootcamp');
            customArray = skylabArray.push(customArray, 'Barcelona');
            //assert
            expect(customArray.length).toEqual(3);
        })
    });
});

