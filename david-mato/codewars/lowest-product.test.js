const lowestProduct = require('./lowest-product.js');

describe('lowestProduct', () => {
	test('should return 542 -214', () => {
		// arrange
		const str = '123456789';
		// act
		const response = lowestProduct(str);
		// assert
		expect(response).toBe(24);
	});
	test('should return 120', () => {
		// arrange
		const str = '234567899';
		// act
		const response = lowestProduct(str);
		// assert
		expect(response).toBe(120);
	});
	test('should return 1', () => {
		// arrange
		const str = '2345611117899';
		// act
		const response = lowestProduct(str);
		// assert
		expect(response).toBe(1);
	});
	test('should return Number is too small', () => {
		// arrange
		const str = '333';
		// act
		const response = lowestProduct(str);
		// assert
		expect(response).toBe('Number is too small');
	});
	test('should return 4', () => {
		// arrange
		const str = '1234111';
		// act
		const response = lowestProduct(str);
		// assert
		expect(response).toBe(4);
	});
});
