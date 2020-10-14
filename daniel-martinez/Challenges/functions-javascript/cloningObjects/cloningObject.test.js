const cloningObjects = require('./cloningObjects');

describe('cloningObjects', () => {
	test('should have the property color with value red', () => {
		// arrange
		const a = { color: 'red', size: 'big' };

		// act
		const response = cloningObjects(a);

		//assert
		expect(response).toHaveProperty('color', 'red');
	});

	test('should have the property address with value {city: "NYC"}', () => {
		// arrange
		const a = { name: 'John', address: { city: 'NYC' } };

		// act
		const response = cloningObjects(a);

		//assert
		expect(response).toHaveProperty('address', { city: 'NYC' });
	});
});
