const pigIt = require('./simple-pig-latin');

describe('pigIt', () => {
	test('should return igPay atinlay siay oolcay', () => {
		// arrange
		const str = 'Pig latin is cool';
		// act
		const response = pigIt(str);
		// assert
		expect(response).toBe('igPay atinlay siay oolcay');
	});
	test('should return hisTay siay ymay tringsay', () => {
		// arrange
		const str = 'This is my string';
		// act
		const response = pigIt(str);
		// assert
		expect(response).toBe('hisTay siay ymay tringsay');
	});
});
