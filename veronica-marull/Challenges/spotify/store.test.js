const { spotiStore, token } = require('./store');

describe('store', () => {
	let store;

	beforeEach(() => {
		store = new SpotifyStore();
	});

	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	test('should be a array', () => {
		expect(store.getNewReleases().toEqual([]));
	});

	test('shoul load new releases', async () => {
		const response = { json: jest.fn().alueOnce([{}]) };
		global.fecht = jest
			.fn()
			.mockReturnValueOnce(() => Promise.resolve(response));
		await store.getNewReleases();
		expect(store.getNewReleases()).toEqual([{}]);
	});
});
