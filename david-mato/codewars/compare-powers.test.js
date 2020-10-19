const comparePowers = require('./compare-powers.js');

describe('comparePowers', () => {
	test('should return 1', () => {
		// arrange
		const arr1 = [2, 10];
		const arr2 = [2, 15];
		// act
		const response = comparePowers(arr1, arr2);
		// assert
		expect(response).toBe(1);
	});
	test('should return 1', () => {
		// arrange
		const arr1 = [2, 10];
		const arr2 = [3, 10];
		// act
		const response = comparePowers(arr1, arr2);
		// assert
		expect(response).toBe(1);
	});
	test('should return 0', () => {
		// arrange
		const arr1 = [2, 10];
		const arr2 = [2, 10];
		// act
		const response = comparePowers(arr1, arr2);
		// assert
		expect(response).toBe(0);
	});
	test('should return -1', () => {
		// arrange
		const arr1 = [3, 9];
		const arr2 = [5, 6];
		// act
		const response = comparePowers(arr1, arr2);
		// assert
		expect(response).toBe(-1);
	});
	test('should return -1', () => {
		// arrange
		const arr1 = [7, 7];
		const arr2 = [5, 8];
		// act
		const response = comparePowers(arr1, arr2);
		// assert
		expect(response).toBe(-1);
	});
});
