const nextGen = require('./index');

describe('Game of life rules should...', () => {
	test('if a alive cell has less than 2 neighbours must die', () => {
		//arrange
		const blinker = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		];

		const blinkerEnd = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		];
		//act
		const newTurn = nextGen(blinker);
		//assert
		expected(newTurn).toBe(blinkerEnd);
	});
});
