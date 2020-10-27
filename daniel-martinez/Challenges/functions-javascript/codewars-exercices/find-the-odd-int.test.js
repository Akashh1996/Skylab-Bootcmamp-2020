const findOdd = require('./find-the-odd-int');

describe('find-the-odd-int', () => {
	test('[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5] should return 5', () => {
		//arange
		const values = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
		//act
		const response = findOdd(values);
		//assert
		expect(response).toBe(5);
	});
	test('[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5] should return -1', () => {
		//arange
		const values = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
		//act
		const response = findOdd(values);
		//assert
		expect(response).toBe(-1);
	});
	test('[10] should return [10]', () => {
		//arange
		const values = [10];
		//act
		const response = findOdd(values);
		//assert
		expect(response).toBe(10);
	});
	test('[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10] should return 1', () => {
		//arange
		const values = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
		//act
		const response = findOdd(values);
		//assert
		expect(response).toBe(1);
	});
});
