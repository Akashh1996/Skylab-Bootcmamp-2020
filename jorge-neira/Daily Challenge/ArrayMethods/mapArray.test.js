const myJestTest = require('./ownArrayMethods');

describe('Test ArrayMethods using __proto__', () => {
	test('The should return double', () => {
		//arrange
		const a = {
			0: 25,
			1: 13,
			2: 234,
			3: 2,
			4: 90,
			5: 36,
			length: 6
		};
		//act
		const response = myJestTest.myMap(a, (x) => {
			return x * 2;
		});
		//assert
		expect(response).toStrictEqual({
			0: 50,
			1: 26,
			2: 468,
			3: 4,
			4: 180,
			5: 72,
			length: 6
		});
	});
});
