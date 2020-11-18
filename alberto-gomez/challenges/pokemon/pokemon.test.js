const store = require('./pokemon-store');

describe('Store', () => {
	/* beforeEach(() => {
		storeCreation = new store;
	}); */

	test('should be defined', () => {
		expect(store).toBeDefined();
	});
});
