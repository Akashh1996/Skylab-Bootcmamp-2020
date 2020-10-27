const reduce = require('./reduce.js');

describe('reduce', () => {
	test('should return 15', () => {
		// arrange
		const callback = (acc, curr) => acc * curr;
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = reduce(callback, arr);
		// assert
		expect(response).toEqual(120);
	});
});
