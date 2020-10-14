const cloneObject = require('./clone-objects');

describe('Clone object', () => {
    test('should clone undefined', () => {
        //arrange
        const object1 = undefined;

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toBe(object1);
    });

    test('should clone null', () => {
        //arrange
        const object1 = null;

        //act
        const object1copy = cloneObject(object1);

        //assert
        expect(object1copy).toBe(object1);
    });

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
        expect(object1copy === object1).toBe(false);
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
        expect(object1copy.address).toEqual(object1.address);
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
        expect(object1copy.address).not.toBe(object1.address);
    });

    test('the property with type object at level two is not the same value in the copy', () => {
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
        expect(object1copy.address === object1.address).toBe(false);
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

    test('the property with type object al level three is not the same value in the copy', () => {
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
        expect(object1copy.address.street === object1.address.street).toBe(false);
    });

    test('changing a three level object property not changes the original three level object property', () => {
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
        object1copy.address.street = { number: 20 };

        //assert
        expect(object1copy.address.street === object1.address.street).toBe(false);
    });
});