const strictEquals = require('./strict-equals');

describe('strictEquals', () => {
	test('should compare 1 and return true', () => {
		// arrange
		const a = 1;
		const b = 1;

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(true);
	});

	test('should compare NaN and return false', () => {
		// arrange
		const a = NaN;
		const b = NaN;

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(false);
	});

	test('should compare 0 and -0 and return false', () => {
		// arrange
		const a = 0;
		const b = -0;

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(true);
	});

	test('should compare -0 and 0 and return false', () => {
		// arrange
		const a = -0;
		const b = 0;

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(true);
	});

	test('should compare 1 as number and string and return false', () => {
		// arrange
		const a = 1;
		const b = '1';

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(false);
	});

	test('should compare true and false and return false', () => {
		// arrange
		const a = true;
		const b = false;

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(false);
	});

	test('should compare Water and oil and return false', () => {
		// arrange
		const a = 'Water';
		const b = 'oil';

		// act
		const response = strictEquals(a, b);

		// assert
		expect(response).toBe(false);
	});

	test('should return true for the same value', () => {
		// arrange
		const values = [1, 'a', 0, -0, [1, 2], {}, false, true, undefined, null];

		for (let index = 0; index < values.length; index++) {
			// act
			const response = strictEquals(values[index], values[index]);

			// assert
			expect(response).toBe(true);
		}
	});
});
