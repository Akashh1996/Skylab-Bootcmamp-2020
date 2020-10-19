
describe('copyObject', () => {
	test('should clone null', () => {
		// arrange
		const original = null;
		// act
		const copy = copyObject(original);
		// assert
		expect(copy).toBe(original);
    });
    
	test('should clone undefined', () => {
		// arrange
		const original = undefined;
		// act
		const copy = copyObject(original);
		// assert
		expect(copy).toBe(original);
	});
		
	test('should clone an empty object', () => {
		// arrange
		const original = {};
		// act
		const copy = copyObject(original);
		// assert
		expect(copy).toMatchObject(original);
    });
    
	test('should clone a one level object', () => {
		// arrange
		const original = { name: 'Gilbe', age: 34 };
		// act
		const copy = copyObject(original);
		// assert
		expect(copy).toMatchObject(original);
    });
    
	test('should clone a two levels object', () => {
		// arrange
		const original = {
			name: 'Gilbe',
			age: 34,
			skills: {
				js: 100,
				ski: 90
			}
		};
		// act
		const copy = copyObject(original);
		// assert
		expect(
			copy.skills !== original.skills && copy.skills.js === original.skills.js
		).toBe(true);
    });
    
	test('should clone a two levels object', () => {
		// arrange
		const original = {
			name: 'Gilbe',
			age: 34,
			skills: {
				js: 100,
				ski: 90
			}
		};
		// act
        const copy = copyObject(original);
        copy.skills.js = 0;
		// assert
		expect(original.skills.js).toBe(100);
    });
    
	test('should clone a three levels object', () => {
		// arrange
		const original = {
			name: 'Gilbe',
			age: 34,
			skills: {
				js: { min: 0, max: 100, current: 100 },
				ski: { min: 0, max: 100, current: 100 }
			}
		};
		// act
		const copy = copyObject(original);
		// assert
		expect(
			copy.skills !== original.skills &&
				copy.skills.js !== original.skills.js &&
				copy.skills.js.min === original.skills.js.min
		).toBe(true);
	});
});