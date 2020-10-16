const newCycle = require('./index')

describe('Game of life', () => {
    test('Horizonal figure must finish vertical', () => {
        //arrange
        const matrix = [
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0], 
            [0, 1, 1, 1, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0]
        ];
        //act
        const newMatrix = newCycle(matrix);
        //assert
        expect(newMatrix).toEqual( [
            [0, 0, 0, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 0, 0, 0]
        ]);
    });

    test('Vertical figure must finish horizontal', () => {
        //arrange
        const matrix = [
            [0, 0, 0, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 0, 0, 0]
        ];
        //act
        const newMatrix = newCycle(matrix);
        //assert
        expect(newMatrix).toEqual( [
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0], 
            [0, 1, 1, 1, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0]
        ]);
    });

    test('Square figures must be static', () => {
        //arrange
        const matrix = [
            [0, 0, 0, 1, 1], 
            [0, 0, 0, 1, 1], 
            [0, 0, 0, 0, 0], 
            [1, 1, 0, 0, 0], 
            [1, 1, 0, 0, 0]
        ];
        //act
        const newMatrix = newCycle(matrix);
        //assert
        expect(newMatrix).toEqual( [
            [0, 0, 0, 1, 1], 
            [0, 0, 0, 1, 1], 
            [0, 0, 0, 0, 0], 
            [1, 1, 0, 0, 0], 
            [1, 1, 0, 0, 0]
        ]);
    });
});