const skylabObject = require('./array-methods');

describe('Array-methods.test', () => {
	test('"ferranObject.map{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x * 2" should return "{ 0: 2, 1: 2, 2: 6, length: 3 }"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.map(ferranObject, (x) => x * 2);

		// assert
		expect(response).toEqual({ 0: 2, 1: 2, 2: 6, length: 3 });
	});

	test('"ferranObject.filter{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x > 0" should return "{ 0: 1, 1: 1, 2: 3 }"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.filter(ferranObject, (x) => x > 0);

		// assert
		expect(response).toEqual({ 0: 1, 1: 1, 2: 3 });
    });
    
    test('"ferranObject.find{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x > 1" should return "2"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.find(ferranObject, (x) => x > 1);

		// assert
		expect(response).toBe(3);
    });
    
    test('"ferranObject.findIndex{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x > 0" should return "3"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.findIndex(ferranObject, (x) => x > 0);

		// assert
		expect(response).toBe(0);
    });

    test('"ferranObject.fill{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, 6" should return "{0: 6, 1: 6, 2: 6, length: 3 }"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.fill(ferranObject, 6);

		// assert
		expect(response).toEqual({ '0': 6, '1': 6, '2': 6, length: 3 });
    });

    test('"ferranObject.some{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x % 2 === 0" should return "false"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.some(ferranObject, (x) => x % 2 === 0);

		// assert
		expect(response).toBe(false);
    });

    test('"ferranObject.every{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x) => x < 2" should return "false"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.every(ferranObject, (x) => x < 2);

		// assert
		expect(response).toBe(false);
    });
    
    test('"ferranObject.reduce{ __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 }, (x, y) => x + y" should return "5"', () => {
		// arrange
		let ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

		// act
		let response = ferranObject.reduce(ferranObject, (x, y) => x + y);

		// assert
		expect(response).toBe(5);
    });

});