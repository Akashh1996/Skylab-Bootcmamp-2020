import isHappy from './happynumber';

describe('A happy number is one where if you repeatedly square its digits and add them together, you eventually end up at 1.', () => {
	test('return happy number of', () => {
		expect(funcName('7, 2')).toBe([1]);
	});
	test('return happy number of', () => {
		expect(funcName('42, 2')).toBe([42, 20, 4, 16, 37, 58, 89, 145, 42]);
	});
});
