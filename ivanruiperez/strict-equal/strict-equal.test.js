const equal = require('./strict-equal');

test('compare NaN, NaN euqals false', () => {
	//arrange
	const a = NaN;
	const b = NaN;
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(false);
});
test('compare 0, -0 euqals true', () => {
	expect(equal(0, -0)).toBe(true);
});
test('compare -0, 0 euqals true', () => {
	expect(equal(-0, 0)).toBe(true);
});
test('compare 1, 1 euqals true', () => {
	//arrange
	const a = 1;
	const b = 1;
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(true);
});
test('compare 1, "1" euqals false', () => {
	//arrange
	const a = 1;
	const b = '1';
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(false);
});
test('compare true, false euqals false', () => {
	//arrange
	const a = true;
	const b = false;
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(false);
});
test('compare false, true euqals false', () => {
	//arrange
	const a = false;
	const b = true;
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(false);
});
test('compare "water", "oil" euqals false', () => {
	//arrange
	const a = 'water';
	const b = 'oil';
	// act
	const response = equal(a, b);
	//assert
	expect(response).toBe(false);
});
