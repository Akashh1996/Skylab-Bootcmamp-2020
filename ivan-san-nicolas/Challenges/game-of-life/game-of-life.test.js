const gameOfLife = require('./gameoflife');

describre('GameOfLife', () => {
    test('should return the next generation correctly', () => {
        // arrange
        let initialArray = [
            [2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 0, 1, 1, 1, 0, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 2, 2, 2, 2, 2, 2]
        ];
        let finalArray = [
            [2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 1, 0, 0, 2],
            [2, 0, 0, 1, 0, 0, 2],
            [2, 0, 0, 1, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 2],
            [2, 2, 2, 2, 2, 2, 2]
        ];
        // act
        let nextGeneration = gameOfLife(initialArray);
        // assert
        expect(nextGeneartion).toEqual(finalArray)
    });
});