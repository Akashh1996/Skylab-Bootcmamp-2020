const strictEquality = require('./strict-equal');

describe('strictEquality', () => {
	test('should return true', () => {
		// arrange
		const a = 0;
		const b = -0;

		// act
		const response = strictEquality(a, b);

		// assert
		expect(response).toBe(true);
	});

	test('should return true', () => {
		// arrange
		const a = -0;
		const b = 0;

		// act
		const response = strictEquality(a, b);

		// assert
		expect(response).toBe(true);
	});

	test('should return true', () => {
		// arrange
		const a = 1;

		// act
		const response = strictEquality(a, a);

		// assert
		expect(response).toBe(true);
	});

	test('should return true', () => {
		expect(strictEquality(1, 1)).toBe(true);
		expect(strictEquality(0, -0)).toBe(true);
		expect(strictEquality(-0, 0)).toBe(true);
		expect(strictEquality(0, 0)).toBe(true);
		expect(strictEquality(-0, -0)).toBe(true);
		expect(strictEquality('hola', 'hola')).toBe(true);
		expect(strictEquality(false, false)).toBe(true);
	});

	test('should return false', () => {
		expect(strictEquality(1, 2)).toBe(false);
		expect(strictEquality(NaN, NaN)).toBe(false);
		expect(strictEquality('1', 1)).toBe(false);
		expect(strictEquality('string1', 'string2')).toBe(false);
		expect(strictEquality('', 0)).toBe(false);
		expect(strictEquality(true, false)).toBe(false);
		expect(strictEquality('Walter', 'oil')).toBe(false);
	});
});
