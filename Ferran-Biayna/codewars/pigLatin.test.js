const pigIt = require('./pigLatin');

describe('pigIt', () => {
	test('"Pig latin is cool" should return "igPay atinlay siay oolcay"', () => {
		// arrange
		let a = "Pig latin is cool";

		// act
		let response = pigIt(a);

		// assert
		expect(response).toBe("igPay atinlay siay oolcay");
	});

	test('"This is my string" should return "hisTay siay ymay tringsay"', () => {
		// arrange
		let a = "This is my string";

		// act
		let response = pigIt(a);

		// assert
		expect(response).toBe("hisTay siay ymay tringsay");
	});
});