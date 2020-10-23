const store = require('./store');

describe('Pokestore', () => {
	let store;

	beforeEach(() => {
		store = new Store();
	});

	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	test('should return a array of pokemons', () => {
		expect(store.getPokemons()).toEqual([]);
	});

	test('should load pokemons from api', () => {
		const response = {
			json: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }])
		};
		global.fetch = jest
			.fn()
			.mockImplementationOnce(() => Promise.resolve(response));

		return store.loadPokemonsFromAPI().then(() => {
			expect(store.getPokemons()).toEqual([{ id: 12, name: 'Narco' }]);
		});
	});
});
