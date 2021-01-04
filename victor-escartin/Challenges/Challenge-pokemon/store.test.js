const store = require("./store");

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


	test('should return de detail of abilities from one pokemon', () => {
		
		
		store

		expect(store.getPokemonAbilitiesDetail()).toBe('overflow')
		});
	});


});
​
