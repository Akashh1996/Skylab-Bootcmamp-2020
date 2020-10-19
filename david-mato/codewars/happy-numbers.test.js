const isHappy = require('./happy-numbers.js');

describe('isHappy', () => {
	test('should return [1]', () => {
		// arrange
		const n1 = 7;
		const n2 = 2;
		// act
		const response = isHappy(n1, n2);
		// assert
		expect(response).toBe([1]);
	});
	test('should return [42, 20, 4, 16, 37, 58, 89, 145, 42]', () => {
		// arrange
		const n1 = 42;
		const n2 = 2;
		// act
		const response = comparePowers(n1, n2);
		// assert
		expect(response).toBe([42, 20, 4, 16, 37, 58, 89, 145, 42]);
	});
});
