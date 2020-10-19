const multiply = require('./multiply');

describe('multiply', () => {
	test('should multiply 5 and 6 and return 30', () => {
		expect(multiply(5, 6)).toBe(30);
	});

	describe('from codewars', () => {
		test('fixed tests', () => {
			expect(multiply(1, 1)).toStrictEqual(1);
		});

		test('fixed tests', () => {
			expect(multiply(2, 1)).toStrictEqual(2);
		});

		test('fixed tests', () => {
			expect(multiply(2, 2)).toStrictEqual(4);
		});

		test('fixed tests', () => {
			expect(multiply(3, 5)).toStrictEqual(15);
		});
	});
});
