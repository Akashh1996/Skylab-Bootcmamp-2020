const ferranObject = require('./array-methods');

describe('Array-methods.test', () => {
	test('ferranObject.map(ferranObject, (x) => x * 2) should return "{ 0: 2, 1: 2, 2: 6, length: 3 }"', () => {
		// arrange

		// act
		let response = ferranObject.map(ferranObject, (x) => x * 2);

		// assert
		expect(response).toEqual({ 0: 2, 1: 2, 2: 6, length: 3 });
	});

	test('ferranObject.filter(ferranObject, (x) => x > 0) should return "{ 0: 1, 1: 1, 2: 3 }"', () => {
		// arrange

		// act
		let response = ferranObject.filter(ferranObject, (x) => x > 0);

		// assert
		expect(response).toEqual({ 0: 1, 1: 1, 2: 3 });
	});

	test('ferranObject.find(ferranObject, (x) => x > 1) should return "2"', () => {
		// arrange

		// act
		let response = ferranObject.find(ferranObject, (x) => x > 1);

		// assert
		expect(response).toBe(3);
	});

	test('ferranObject.findIndex(ferranObject, (x) => x > 0) should return "3"', () => {
		// arrange

		// act
		let response = ferranObject.findIndex(ferranObject, (x) => x > 0);

		// assert
		expect(response).toBe(0);
	});

	test('ferranObject.fill(ferranObject, 6) should return "{0: 6, 1: 6, 2: 6, length: 3 }"', () => {
		// arrange

		// act
		let response = ferranObject.fill(ferranObject, 6);

		// assert
		expect(response).toEqual({ 0: 6, 1: 6, 2: 6, length: 3 });
	});

	test('"ferranObject.some(ferranObject, (x) => x % 2 === ) should return "false"', () => {
		// arrange

		// act
		let response = ferranObject.some(ferranObject, (x) => x % 2 === 0);

		// assert
		expect(response).toBe(false);
	});

	test('ferranObject.every(ferranObject, (x) => x < 2) should return "false"', () => {
		// arrange

		// act
		let response = ferranObject.every(ferranObject, (x) => x < 2);

		// assert
		expect(response).toBe(false);
	});

	test('"ferranObject.reduce(ferranObject, (x, y) => x + y) should return "5"', () => {
		// arrange

		// act
		let response = ferranObject.reduce(ferranObject, (x, y) => x + y);

		// assert
		expect(response).toBe(5);
	});

	test('"ferranObject.copyWithin(ferranObject, 0, 1, 3) should return "{ 0: 1, 1: 3, 2: 3, length: 3 }"', () => {
		// arrange

		// act
		let response = ferranObject.copyWithin(ferranObject, 0, 1, 3);

		// assert
		expect(response).toEqual({ '0': 1, '1': 3, '2': 3, length: 3 });
	});
});
