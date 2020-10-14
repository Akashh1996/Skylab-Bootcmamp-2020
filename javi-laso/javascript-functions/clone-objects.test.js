const cloneObject = require('./clone-objects');

describe('Clone object', () => {
    test('have all the same properties with an empty object', () => {
        //arrange
        const object1 = {}

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toEqual(object1);
    });

    test('are not the exact same object with an empty object', () => {
        //arrange
        const object1 = {};

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).not.toBe(object1);
    });

    test('have all the same properties with a one level object', () => {
        //arrange
        const object1 = { 
            altura: 10, 
            anchura: 10 
        }

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toEqual(object1);
    });

    test('are not the exact same object with a one level object', () => {
        //arrange
        const object1 = { 
            altura: 10, 
            anchura: 10 
        }

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).not.toBe(object1);
    });

    test('have all the same properties with a two level object', () => {
        //arrange
        const object1 = { 
            altura: 10, 
            address: {
                city: 'Madrid'
            } 
        };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toEqual(object1);
    });

    test('are not the exact same object with a two level object', () => {
        //arrange
        const object1 = { 
            altura: 10, 
            address: {
                city: 'Madrid'
            } 
        };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).not.toBe(object1);
    });

    test('have all the same properties with a three level object', () => {
        //arrange
        const object1 = {
            altura: 10, 
            address: {
                city: 'Madrid', 
                street: {
                    number: 10
                }
            } 
        };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toEqual(object1);
    });

    test('are not the exact same object with a three level object', () => {
        //arrange
        const object1 = {
            altura: 10, 
            address: {
                city: 'Madrid', 
                street: {
                    number: 10
                }
            } 
        };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).not.toBe(object1);
    });

    test('have all the same properties ', () => {
        //arrange
        const object1 = { };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toEqual(object1);
    });

    test('are not the exact same object ', () => {
        //arrange
        const object1 = { };

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).not.toBe(object1);
    });
});