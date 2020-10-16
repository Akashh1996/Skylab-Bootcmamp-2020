const find = require('./find.js');

describe('find', () => {
	test('should return 1', () => {
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
		const response = find(callback, arr);
		// assert
		expect(response).toBe(1);
	});
});
