const life = require ('./gameOfLife')

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
		const finalState = life(blinker);
		// assert
		expect(finalState).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
    test('should change state', () => {
		// arrange
		const blinker = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]
        ];
		// act
		const finalState = life(blinker);
		// assert
		expect(finalState).toEqual([
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
    test('should change state', () => {
		// arrange
		const blinker = [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1]
        ];
		// act
		const finalState = life(blinker);
		// assert
		expect(finalState).toEqual([
            [0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1]
        ]);
    });
});

describe('Life', function () {
        
});