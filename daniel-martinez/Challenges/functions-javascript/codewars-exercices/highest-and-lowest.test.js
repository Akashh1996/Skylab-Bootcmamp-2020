const highAndLow = require('./highest-and-lowest');

describe('highest-and-lowest', () => {
	test("'4 5 29 54 4 0 -214 542 -64 1 -3 6 -6' should return '542 -214'", () => {
		//arange
		const values = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';
		//act
		const response = highAndLow(values);
		//assert
		expect(response).toBe('542 -214');
	});
	test("1 2 3 4 5' should return  '5 1'", () => {
		//arange
		const values = '1 2 3 4 5';
		//act
		const response = highAndLow(values);
		//assert
		expect(response).toBe('5 1');
	});
	test("'1 9 3 4 -5' should return '9 -5'", () => {
		//arange
		const values = '1 9 3 4 -5';
		//act
		const response = highAndLow(values);
		//assert
		expect(response).toBe('9 -5');
	});
});
