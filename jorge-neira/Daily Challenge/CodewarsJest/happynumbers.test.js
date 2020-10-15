const myJestTest = require('./happynumber');

describe('A happy number is one where if you repeatedly square its digits and add them together, you eventually end up at 1.', () => {
	test('', () => {
		//arrange
		const a = (7, 2);
		//act
		const response = myJestTest(a);
		//assert
		expect(response).toBe([1]);
	});
});
