const gameOfLife = require ('./gameOfLife')

describe('Game Of Life', () => {
	test('should change state', () => {
		// arrange
		const blinker = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ];
		// act
		const finalState = gameOfLife(blinker);
		// assert
		expect(finalState).toBe([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
});