const filter = require('./filter.js');

describe('map', () => {
	test('should return {1, 2}', () => {
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
		const response = filter(callback, arr);
		// assert
		expect(response).toEqual({
			0: 1,
			1: 2
		});
	});
});
