const map = require('./map.js');

describe('map', () => {
	test("should return {'10', 20', '30', '40', '50', '60'}", () => {
		// arrange
		const callback = (e) => e + '0';
		const arr = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5
		};
		// act
		const response = map(callback, arr);
		// assert
		expect(response).toEqual({
			0: '10',
			1: '20',
			2: '30',
			3: '40',
			4: '50'
		});
	});
});
