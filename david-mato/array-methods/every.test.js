const every = require('./every.js');

describe('every', () => {
	test('should return true', () => {
		// arrange
		const callback = (e) => e > 4;
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = every(callback, arr);
		// assert
		expect(response).toBe(false);
	});
});
