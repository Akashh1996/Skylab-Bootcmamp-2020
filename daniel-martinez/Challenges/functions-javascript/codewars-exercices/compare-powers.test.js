const comparePowers = require('./compare-powers');

describe('compare-powers', () => {
	test('[[2,10],[2,15]] should return 1', () => {
		//arange
		const value1 = [2, 10];
		const value2 = [2, 15];
		//act
		const response = comparePowers(value1, value2);
		//assert
		expect(response).toBe(1);
	});
	test('[[7,7],[5,8]] should return -1', () => {
		//arange
		const value1 = [7, 7];
		const value2 = [5, 8];
		//act
		const response = comparePowers(value1, value2);
		//assert
		expect(response).toBe(-1);
	});
});
