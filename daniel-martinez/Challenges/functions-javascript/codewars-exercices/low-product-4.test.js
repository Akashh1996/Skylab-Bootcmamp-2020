const lowestProduct = require('./low-product-4');

describe('low-product-4', () => {
	test('"123456789" should return 24', () => {
		//arange
		const values = '123456789';
		//act
		const response = lowestProduct(values);
		//assert
		expect(response).toBe(24);
	});

	test('"234567899" should return 120', () => {
		//arange
		const values = '234567899';
		//act
		const response = lowestProduct(values);
		//assert
		expect(response).toBe(120);
	});

	test('"2345611117899" should return 1', () => {
		//arange
		const values = '2345611117899';
		//act
		const response = lowestProduct(values);
		//assert
		expect(response).toBe(1);
	});

	test('"333" should return "Number is too small"', () => {
		//arange
		const values = '333';
		//act
		const response = lowestProduct(values);
		//assert
		expect(response).toBe('Number is too small');
	});
});
