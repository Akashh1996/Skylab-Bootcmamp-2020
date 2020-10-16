const some = require('./some.js');

describe('some', () => {
	test('should return true', () => {
		// arrange
		const callback = (e) => e === 3;
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = some(callback, arr);
		// assert
		expect(response).toBe(true);
	});
});
