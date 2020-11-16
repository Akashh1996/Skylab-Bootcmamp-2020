const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});

	describe('loadPokedex', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([{ name: 'Bulbasaur' }])
				})
			);
		});

		test('should update _pokemons', () => {
			return store.loadPokedex().then(() => {
				expect(store.getPokemon()).toEqual([{ name: 'Bulbasaur' }]);
			});
		});
	});
});