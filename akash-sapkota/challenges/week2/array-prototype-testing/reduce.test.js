const skylabArray = require('./index');

describe('Array methpd reduce', () => {
	test('Should return 3', () => {
		let customArray = {
			__proto__: skylabArray,
			0: 1,
			1: 2,
			length: 2
		};

		let response = customArray.reduce(customArray, (x, y) => {
			return x, y;
		});

		//expect
		expect(response).toBe(3);
	});
});
