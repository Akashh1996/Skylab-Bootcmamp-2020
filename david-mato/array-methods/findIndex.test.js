const findIndex = require('./findIndex.js');

describe('findIndex', () => {
	test('should return 0', () => {
		// arrange
		const callback = (e) => e < 3;
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = findIndex(callback, arr);
		// assert
		expect(response).toBe(0);
	});
});
