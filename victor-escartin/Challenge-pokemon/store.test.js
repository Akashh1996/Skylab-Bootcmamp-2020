const store = require("./store");
const location = require("./util/location");

​
describe('loadPokemon', () => {
	test('should update pokemon list', () => {
		global.fetch = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				json: jest.fn().mockReturnValueOnce()
			})
		);
​
		return store.getPokemonsData().then((response) => {
			expect(store.getPokemonList()).toEqual(response);
		});
	});
});
​
describe('loadPokemon', () => {
	test('should update pokemon', () => {
		global.fetch = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				name: 'charizard',
				power: 20
			})
		);
​
		return store.getPokemoData('charizard').then((response) => {
			expect(location.getPokemonName()).toEqual(response);
		});
	});
});