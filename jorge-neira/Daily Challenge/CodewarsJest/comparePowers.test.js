const comparePowers = require('./comparePowers');

describe('You certainly can tell which is the larger number between 210 and 215.', () => {
	test('Compare both powers', () => {
		const arr1 = [2, 10];
		const arr2 = [2, 15];
		const response = comparePowers(arr1, arr2);
		expect(response).toBe(1);
	});
	test('Compare both powers', () => {
		const arr1 = [2, 10];
		const arr2 = [3, 10];
		const response = comparePowers(arr1, arr2);
		expect(response).toBe(1);
	});
	test('Compare both powers', () => {
		const arr1 = [2, 10];
		const arr2 = [2, 10];
		const response = comparePowers(arr1, arr2);
		expect(response).toBe(0);
	});
	test('Compare both powers', () => {
		const arr1 = [3, 9];
		const arr2 = [5, 6];
		const response = comparePowers(arr1, arr2);
		expect(response).toBe(-1);
	});
	test('Compare both powers', () => {
		const asw = ([7, 7], [5, 8]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(-1);
	});
});

const comparePowers = require('./comparePowers');
