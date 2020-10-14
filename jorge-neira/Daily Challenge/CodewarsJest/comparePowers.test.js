const comparePowers = require('./comparePowers');

describe('You certainly can tell which is the larger number between 210 and 215.', () => {
	test('Compare both powers', () => {
		const asw = ([2, 10], [2, 15]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(1);
	});
	test('Compare both powers', () => {
		const asw = ([2, 10], [3, 10]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(1);
	});
	test('Compare both powers', () => {
		const asw = ([2, 10], [2, 10]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(0);
	});
	test('Compare both powers', () => {
		const asw = ([3, 9], [5, 6]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(-1);
	});
	test('Compare both powers', () => {
		const asw = ([7, 7], [5, 8]);
		const response = comparePowers(asw);
		expect(response).toStrictEqual(-1);
	});
});
