const pigIt = require('./simple-pig-latin');

describe('simple-pig-latin', () => {
	test('"Pig latin is cool" should return "igPay atinlay siay oolcay"', () => {
		//arange
		const values = 'Pig latin is cool';
		//act
		const response = pigIt(values);
		//assert
		expect(response).toBe('igPay atinlay siay oolcay');
	});

	test('"This is my string" should return "igPay atinlay siay oolcay"', () => {
		//arange
		const values = 'This is my string';
		//act
		const response = pigIt(values);
		//assert
		expect(response).toBe('hisTay siay ymay tringsay');
	});
});
