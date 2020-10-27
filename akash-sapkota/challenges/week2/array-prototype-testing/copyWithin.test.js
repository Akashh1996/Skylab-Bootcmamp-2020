const skylabArray = require('./index');

describe('Array method copywithin', () => {
	test('"should return { 0: 1, 1: 3, 2: 3, length: 3 }"', () => {
		let customArray = {
			__proto__: skylabArray,
			0: 0,
			1: 1,
			2: 3,
			length: 3
		};

		let response = customArray.copyWithin(customArray, 0, 1, 3);
		expect(response).toEqual({ 0: 1, 1: 3, 2: 3, length: 3 });
	});
});
