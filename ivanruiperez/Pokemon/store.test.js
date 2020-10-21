const store = require('./store');

describe('loadPokemon', () => {
	test('should update pokemon', () => {
		global.fetch = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				json: jest.fn().mockReturnValueOnce([{ id: 5, name: 'Charizard' }])
			})
		);

		return store.loadPokemon().then((response) => {
			expect(store.getPokemon()).toEqual(response);
		});
	});
});

describe('loadPokemon', () => {
	test('should update pokemon', () => {
		global.fetch = jest.fn().mockImplementationOnce(() =>
			Promise.resolve({
				name: 'charizard',
				power: 20
			})
		);

		return store.getPokemonByName('charizard').then((response) => {
			expect(store.getPok()).toEqual(response);
		});
	});
});
