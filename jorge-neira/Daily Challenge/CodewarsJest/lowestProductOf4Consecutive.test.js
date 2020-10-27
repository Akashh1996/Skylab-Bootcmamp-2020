const lowestProduct = require('./lowestProductOf4Consecutive');

describe('Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.', () => {
	test('This should only work if the number has 4 digits or more. If not, return "Number is too small".', () => {
		//arrange
		const a = '123456789';
		//act
		const response = lowestProduct(a);
		//assert
		expect(response).toBe(24);
	});
	test('This should only work if the number has 4 digits or more. If not, return "Number is too small".', () => {
		//arrange
		const a = '234567899';
		//act
		const response = lowestProduct(a);
		//assert
		expect(response).toBe(120);
	});
	test('This should only work if the number has 4 digits or more. If not, return "Number is too small".', () => {
		//arrange
		const a = '2345611117899';
		//act
		const response = lowestProduct(a);
		//assert
		expect(response).toBe(1);
	});
	test('This should only work if the number has 4 digits or more. If not, return "Number is too small".', () => {
		//arrange
		const a = '333';
		//act
		const response = lowestProduct(a);
		//assert
		expect(response).toBe('Number is too small');
	});
	test('This should only work if the number has 4 digits or more. If not, return "Number is too small".', () => {
		//arrange
		const a = '1234111';
		//act
		const response = lowestProduct(a);
		//assert
		expect(response).toBe(4);
		expect(response).toBe('Numbers should be consecutives');
	});
});
