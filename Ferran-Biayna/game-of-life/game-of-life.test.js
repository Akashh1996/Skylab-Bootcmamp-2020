const gameOfLife = require('./game-of-life');

describe('gameOfLife', () => {
	test('gameOfLife(matrix) should return "newMatrix"', () => {
		// arrange

		let matrix = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		];

		// act
		let response = gameOfLife(matrix, 5, 5);

		// assert
		expect(response).toEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		]);
	});
	
	test('gameOfLife(matrix) should return "newMatrix"', () => {
		// arrange

		let matrix = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		];

		// act
		let response = gameOfLife(matrix, 5, 5);

		// assert
		expect(response).toEqual([
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]);
	});

	test('gameOfLife(matrix) should return "newMatrix"', () => {
		// arrange

		let matrix = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		];

		// act
		let response = gameOfLife(matrix, 5, 5);

		// assert
		expect(response).toEqual([
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		]);
	});
	
});
