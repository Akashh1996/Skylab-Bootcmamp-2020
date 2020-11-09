const largestRectangleInGrid = require('./largestRectangleInGrid');

describe('largestRectangleInGrid', () => {
	test('[2,10],[2,15] should return 1', () => {
		// arrange
		let a = [
            [1,0,1,1,1],
            [0,1,1,0,1],
            [0,1,1,0,1],
            [0,1,1,0,1]
           ]

		// act
		let response = largestRectangleInGrid(a);

		// assert
		expect(response).toBe(6);
	});

	test('[2,10],[2,10] should return 0', () => {
		// arrange
		let a = [
            [1,1,1,1,1],
            [1,0,1,0,1],
            [1,1,1,0,1],
            [0,1,1,0,1]
           ]

		// act
		let response = largestRectangleInGrid(a);

		// assert
		expect(response).toBe(5);
	});

});
