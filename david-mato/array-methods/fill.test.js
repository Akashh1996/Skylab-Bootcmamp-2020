const fill = require('./fill.js');

describe('fill', () => {
	test('should return { 0: 1, 1: 2, 2: 2, 3: 2, 4: 2 }', () => {
		// arrange
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = fill(arr, 2, 2, 5);
		// assert
		expect(response).toEqual({ 0: 1, 1: 2, 2: 2, 3: 2, 4: 2 });
	});
});
