const store = require('./store');

describe('pokemon', () => {
	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	test('should get pokemon detail from api', () => {
		const json = jest
			.fn()
			.mockImplementationOnce({ abilityes: [{ name: 'pokemon' }] });
		const fetchImplementation = () => Promise.resolve({ json });
		global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
		return store.getPokemonDetail('pokemon').then(() => {
			expect(
				store
					.getPokemonDetail('pokemon')
					.toEqual({ abilities: [{ name: 'pokemon' }] })
			);
		});
	});

	test('should load pokemons list', () => {
		const json = jest
			.fn()
			.mockImplementationOnce({ abilityes: [{ name: 'pokemon' }] });
		const fetchImplementation = () => Promise.resolve({ json });
		global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
		return store.loadPokemons().then(() => {
			expect(store.loadPokemons()).toEqual({ count: 1050, next: 'kddkdk' });
		});
	});
});
