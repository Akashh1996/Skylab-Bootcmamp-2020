const strictEquals = require('./stric-equals');

describe('Strict Equals comparison', () => {
	test('stric equal of 1 and 1', () => {
		expect(strictEquals(1, 1)).toStrictEqual(true);
	});
	test('stric equal of NaN and NaN', () => {
		expect(strictEquals(NaN, NaN)).toStrictEqual(false);
	});
	test('stric equal of 0 and -0', () => {
		expect(strictEquals(0, -0)).toStrictEqual(true);
	});
	test('stric equal of -0 and 0', () => {
		expect(strictEquals(-0, 0)).toStrictEqual(true);
	});
	test(`stric equal of 1 and "1"`, () => {
		expect(strictEquals(1, '1')).toStrictEqual(false);
	});
	test('stric equal of true and false', () => {
		expect(strictEquals(true, false)).toStrictEqual(false);
	});
	test('stric equal of false and false', () => {
		expect(strictEquals(false, false)).toStrictEqual(true);
	});
	test(`stric equal of "Water" and "oil"`, () => {
		expect(strictEquals('Water', 'Oil')).toStrictEqual(false);
	});
});
