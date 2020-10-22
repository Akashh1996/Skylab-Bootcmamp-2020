const PokeStore = require('./store');

describe('Pokemon Store', () => {
	let store;
	beforeEach(() => {
		store = new PokeStore();
	});
	test('Should be defined', () => {
		expect(store).toBeDefined();
	});
	test('Should return array of pokemons', () => {
		expect(store.getPokemonList()).toEqual([]);
	});
	test('Should return array of pokemons', () => {
		expect(store.getPokemonList()).toEqual([]);
	});
	test('Should return array of pokemons', () => {
		expect(store.getPokemonList()).toEqual([]);
	});
	test('Should load pokemons from API', () => {
		return store.loadPokemonList().then(() => {
			expect(store.getPokemonList()).toEqual([{ name: bulbasur }]);
		});
	});
});
