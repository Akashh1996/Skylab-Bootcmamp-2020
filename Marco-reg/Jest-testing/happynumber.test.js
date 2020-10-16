const isHappy = require('./happynumber');

describe('A happy number is one where if you repeatedly square its digits and add them together, you eventually end up at 1.', () => {
	test('Should return 1 if 7 is a happy number', () => {
		
		const a = (7, 2);
		
		const response = isHappy(a);
	
		expect(response).toBe([1]);
	});
	test('Should return the array of numbers if is not a happy number', () => {
		
		const a = (49, 2);
		
		const response = isHappy(a);
		
		expect(response).toBe([42, 20, 4, 16, 37, 58, 89, 145, 42]);
	});
});