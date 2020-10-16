const largestRectangleInGrid = require('./area-rectangles');

describe('area-rectangles', () => {
	test('should return 6', () => {
		//arange
		const value = [
			[1, 0, 1, 1, 1],
			[0, 1, 1, 0, 1],
			[0, 1, 1, 0, 1],
			[0, 1, 1, 0, 1]
		];
		//act
		const response = largestRectangleInGrid(value);
		//assert
		expect(response).toBe(6);
	});
	test('should return 5', () => {
		//arange
		const value = [
			[1, 1, 1, 1, 1],
			[1, 0, 1, 0, 1],
			[1, 1, 1, 0, 1],
			[0, 1, 1, 0, 1]
		];
		//act
		const response = largestRectangleInGrid(value);
		//assert
		expect(response).toBe(5);
	});
});
