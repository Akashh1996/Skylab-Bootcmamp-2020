const spotiStore = require('./store');

describe('store', () => {
	let store;

	beforeEach(() => {
		store = spotiStore;
	});

	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	test('should be a array', () => {
		expect(store.getNewReleases().toBe([]));
	});

	test('shoul load new releases', async () => {
		const response = { json: jest.fn().mockReturnValueOnce([{}]) };
		global.fecht = jest
			.fn()
			.mockReturnValueOnce(() => Promise.resolve(response));
		await store.getNewReleases();
		expect(store.getNewReleases()).toEqual([{}]);
	});
});
