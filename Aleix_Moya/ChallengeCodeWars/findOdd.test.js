const findOdd = require('./findOdd')

describe('findOdd', () => {
	test('null', () => {
		// arrange
		const original = null;
		// act
		let copy = findOdd(original);
		// assert
		expect(copy).toBe(original);
	});
	test('undefined', () => {
		// arrange
		const original = undefined;
		// act
		let copy = findOdd(original);
		// assert
		expect(copy).toBe(original);
	});
	test('easy chain', () => {
		// arrange
		const original = [1, 1, 2, 2, 3, 3, 4, 5, 5, 0,0,0,0];
		// act
		let copy = findOdd(original);
		// assert
		expect(copy).toBe("5 0");
	});
	test('negative chain', () => {
		// arrange
		const original = "1 -1 -5 5 -10"
		// act
		let copy = findOdd(original);
		// assert
		expect(copy).toBe("5 -10");
	});
});