const params = require('./getParams');

describe('Get location ID', () => {
	test('should get location id', () => {
		//arrange
		const a = '';
		//act
		const response = params(a);
		//assert
		expect(response).toBe('5eAWCfyUhZtHHtBdNk56l1');
	});
});

global.window = Object.create(window);
const url =
	'http://127.0.0.1:5500/detail/detail-component.html?id=5eAWCfyUhZtHHtBdNk56l1';
Object.defineProperty(window, 'location', {
	value: {
		href: url
	}
});
expect(window.location.href).toEqual(url);
