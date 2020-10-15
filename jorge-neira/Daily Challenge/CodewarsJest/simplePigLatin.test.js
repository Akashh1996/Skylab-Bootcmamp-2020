const myJestTest = require('./simplePigLatin');

describe('Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.', () => {
	test('should return move first letter to the end and add ay to it', () => {
		//arrange
		const a = 'Pig latin is cool';
		//act
		const response = myJestTest(a);
		//assert
		expect(response).toBe('igPay atinlay siay oolcay');
	});
	test('should return move first letter to the end and add ay to it', () => {
		//arrange
		const a = 'This is my string';
		//act
		const response = myJestTest(a);
		//assert
		expect(response).toBe('hisTay siay ymay tringsay');
	});
});
