let { customArray, SkylabArray } = require('./array-methods');

describe('array-methods', () => {
	describe('length', () => {
		test('should have a default length equals 0', () => {
			expect(customArray.length).toBe(0);
		});
	});

	describe('push', () => {
		beforeEach(() => {
			customArray = {
				length: 0,
				__proto__: SkylabArray
			};
		});

		test('should add an element to the end of the array', () => {
			// act
			customArray = customArray.push(customArray, 'skylab');
			// assert
			expect(customArray[0]).toBe('skylab');
		});

		test('should add multiple elements to the end of the array', () => {
			// act
			customArray = customArray.push(customArray, 'skylab', 'bootcamp');
			// assert
			expect(customArray[1]).toBe('bootcamp');
		});

		test('should increment the length', () => {
			// act
			customArray = customArray.push(customArray, 'skylab', 'bootcamp');
			// assert
			expect(customArray.length).toBe(2);
		});
	});
});
