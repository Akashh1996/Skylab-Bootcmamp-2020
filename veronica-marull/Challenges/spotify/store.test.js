const { spotiStore, token } = require('./store');

describe('store', () => {
	let store;

	beforeEach(() => {
		store = new SpotifyStore();
	});

	test('should be defined', () => {
		expect(store).toBeDefined();
	});
});
