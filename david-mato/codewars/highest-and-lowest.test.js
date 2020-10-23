const highAndLow = require('./highest-and-lowest.js');

describe('highAndLow', () => {
	test('should return 542 -214', () => {
		// arrange
		const str = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';
		// act
		const response = highAndLow(str);
		// assert
		expect(response).toBe('542 -214');
	});
});
