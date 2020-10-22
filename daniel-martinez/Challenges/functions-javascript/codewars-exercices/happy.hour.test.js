const isHappy = require('./happy-hour');

describe('happy-hour', () => {
	test('(42,2) should return [42, 20, 4, 16, 37, 58, 89, 145, 42]', () => {
		//arange
		const value1 = 42;
		const value2 = 2;
		//act
		const response = isHappy(value1, value2);
		//assert
		expect(response).toStrictEqual([42, 20, 4, 16, 37, 58, 89, 145, 42]);
	});

	test('(7,2) should return [1]', () => {
		//arange
		const value1 = 7;
		const value2 = 2;
		//act
		const response = isHappy(value1, value2);
		//assert
		expect(response).toStrictEqual([1]);
	});
});
