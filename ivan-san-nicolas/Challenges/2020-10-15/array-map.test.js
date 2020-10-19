const {
    proto,
    obj
} = require('./array-map');

describe('Array find method', () => {
    test('should return ', () => {

        console.log(proto);
        // arrange
        const callback = (value) => {
            return value + ' los callbacks son guais';
        }
        //act
        const newObj = obj.myMap(obj, callback);
        console.log(newObj);
        //assert
        expect(newObj).toEqual({
            0: 'hola los callbacks son guais',
            1: 'adios los callbacks son guais',
            2: 'adios los callbacks son guais',
            3: 'adios los callbacks son guais',
            length: '4 los callbacks son guais'
        });
    });
});