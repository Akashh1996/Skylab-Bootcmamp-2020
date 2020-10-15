const findOdd = require('./find-odd-int');

describe('findOdd', () => {
	test('should return 5', () => {
		// arrange
		const arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(5);
	});
	test('should return 5', () => {
		// arrange
		const arr = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(-1);
	});
	test('should return 5', () => {
		// arrange
		const arr = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(5);
	});
	test('should return 5', () => {
		// arrange
		const arr = [10];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(10);
	});
	test('should return 10', () => {
		// arrange
		const arr = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(10);
	});
	test('should return 1', () => {
		// arrange
		const arr = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];
		// act
		const response = findOdd(arr);
		// assert
		expect(response).toBe(1);
	});
});
