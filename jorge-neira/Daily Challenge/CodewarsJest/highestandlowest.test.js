const highAndLow = require('./highestandlowest');

describe('return the highest and the lowest from an array', () => {
	test('return the highest and the lowest from an array', () => {
		expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
	});
	test('return the highest and the lowest from an array', () => {
		expect(highAndLow('1 2 3 4 5')).toBe('5 1');
	});
	test('return the highest and the lowest from an array', () => {
		expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
	});
	test('return the highest and the lowest from an array', () => {
		expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
	});
});
