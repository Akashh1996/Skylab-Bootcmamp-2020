const copyWithin = require('./copyWithin.js');

describe('copyWithin', () => {
	test("should return { '0': 1, '1': 2, '2': 3, '3': 2, '4': 3 }", () => {
		// arrange
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = copyWithin(arr, 3, 1, 4);
		// assert
		expect(response).toEqual({ 0: 1, 1: 2, 2: 3, 3: 2, 4: 3 });
	});
});
