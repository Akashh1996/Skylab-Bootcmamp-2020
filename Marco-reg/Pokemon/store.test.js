const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
	});

	describe('getPokemon', () => {
		test('should call getPokemon and return an array of Pokemon', () => {
			expect(store.getPokemon()).toEqual([
				
			]);
		});
	});
	describe('getPokemonById', () => {
		test('should call getPokemonById and return one Pokemon', () => {
			expect(store.getPokemonById(12)).toEqual({ id: 12, name: '' });
		});
	});
	describe('getTopPokemon', () => {
		test('should call getTopPokemon and return ', () => {
			expect(store.getTopPokemon()).toEqual([
				
			]);
		});
	});
});