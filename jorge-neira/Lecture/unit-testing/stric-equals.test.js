const strictEquals = require('./stric-equals');

xdescribe('Strict Equals comparison', () => {
	// This is the way to write it!!!
	test('should compare 1 and 1', () => {
		//arrange
		const a = 1;
		const b = 1;
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(true);
	});
	test('should compare NaN and NaN', () => {
		//arrange
		const a = NaN;
		const b = NaN;
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(false);
	});
	test('should compare 0 and -0', () => {
		//arrange
		const a = 0;
		const b = -0;
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(true);
	});
	test(`should compare 1 and "1"`, () => {
		//arrange
		const a = 1;
		const b = '1';
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(false);
	});
	test(`should compare true and false`, () => {
		//arrange
		const a = true;
		const b = false;
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(false);
	});
	test(`should compare false and false`, () => {
		//arrange
		const a = false;
		const b = false;
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(true);
	});
	test(`should compare "Water" and "oil"`, () => {
		//arrange
		const a = 'Water';
		const b = 'Oil';
		//act
		const response = strictEquals(a, b);
		//assert
		expect(response).toBe(false);
	});
});
// test('should compare 1 and 1', () => {
// 	expect(strictEquals(1, 1)).toBe(true);
// });
// test('should compare NaN and NaN', () => {
// 	expect(strictEquals(NaN, NaN)).toBe(false);
// });
// test('should compare 0 and -0', () => {
// 	expect(strictEquals(0, -0)).toBe(true);
// });
// test('should compare -0 and 0', () => {
// 	expect(strictEquals(-0, 0)).toBe(true);
// });
// test(`should compare 1 and "1"`, () => {
// 	expect(strictEquals(1, '1')).toBe(false);
// });
// test('should compare true and false', () => {
// 	expect(strictEquals(true, false)).toBe(false);
// });
// test('should compare false and false', () => {
// 	expect(strictEquals(false, false)).toBe(true);
// });
// test(`should compare "Water" and "oil"`, () => {
// 	expect(strictEquals('Water', 'Oil')).toBe(false);
// });
