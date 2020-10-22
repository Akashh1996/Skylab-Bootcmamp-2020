const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});

	describe('getPokemon', () => {
		test('should call getPokemon and return an array of pokemons', () => {
			expect(store.getPokemon()).toEqual([
				{ id: 11, name: 'Dr Nice' },
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' },
				{ id: 16, name: 'RubberMan' },
				{ id: 17, name: 'Dynama' },
				{ id: 18, name: 'Dr IQ' },
				{ id: 19, name: 'Magma' },
				{ id: 20, name: 'Tornado' }
			]);
		});
	});
	describe('getPokemonById', () => {
		test('should call getPokemonById and return one pokemon', () => {
			expect(store.getPokemonById(12)).toEqual({ id: 12, name: 'Narco' });
		});
	});
	describe('getTopPokemon', () => {
		test('should call getTopPokemon and return ', () => {
			expect(store.getTopPokemon()).toEqual([
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' }
			]);
		});
	});
});
