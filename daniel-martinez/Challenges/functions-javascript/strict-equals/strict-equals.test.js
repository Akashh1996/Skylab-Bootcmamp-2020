const strictEquals = require('./strict-equals');

describe('strictEquals', () => {
	test('should 1 and 1 equals true', () => {
		expect(strictEquals(1, 1)).toBe(true);
	});

	test('should NaN and NaN equals false', () => {
		expect(strictEquals(NaN, NaN)).toBe(false);
	});

	test('should 0 and -0 equals true', () => {
		expect(strictEquals(0, -0)).toBe(true);
	});

	test('should -0 and 0 equals true', () => {
		expect(strictEquals(0, -0)).toBe(true);
	});

	test('should 1 and "1" equals false', () => {
		expect(strictEquals(1, '1')).toBe(false);
	});

	test('should true and false equals true', () => {
		expect(strictEquals(true, false)).toBe(false);
	});

	test('should false and false equals true', () => {
		expect(strictEquals(false, false)).toBe(true);
	});

	test('should "water and "oil" equals true', () => {
		expect(strictEquals('water', 'oil')).toBe(false);
	});
});
