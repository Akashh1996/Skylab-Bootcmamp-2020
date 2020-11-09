const sum = require('./sum'); // ES5
// import sum from './sum'; ES6

xdescribe('Sum', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
	test('adds 3 + 5 to equal 8', () => {
		expect(sum(3, 5)).toBe(8);
	});
});
