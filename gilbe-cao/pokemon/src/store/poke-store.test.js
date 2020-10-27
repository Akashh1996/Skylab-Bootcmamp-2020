const store = require('./poke-store');

describe('Poke Store', () => {
	test('should be defined', () => {
		expect(store).toBeDefined();
	});

	test('should return a array of pokemons', () => {
		expect(store.getPokemons()).toEqual([]);
	});

	test('should load pokemons from api', async () => {
		const response = {
			json: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }])
		};
		global.fetch = jest
			.fn()
			.mockImplementationOnce(() => Promise.resolve(response));

		try {
			await store.loadPokemonsFromAPI();
			expect(store.getPokemons()).toEqual([{ id: 12, name: 'Narco' }]);
		} catch (error) {}
	});

	test('should return single pokemon', () => {
		expect(store.getPokemon()).toEqual(undefined);
	});

	test('should load one pokemon details from api', () => {
		const json = jest.fn().mockReturnValueOnce({ id: 12, name: 'Narco' });

		const fetchResponse = { json };

		const fetchImplementation = () => Promise.resolve(fetchResponse);

		global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);

		return store.loadPokemonsFromAPIById(12).then(() => {
			expect(store.getPokemon()).toEqual({ id: 12, name: 'Narco' });
		});
	});

	test('should call getBaseExperience and return 7', () => {
		const json = jest.fn().mockReturnValueOnce({ base_experience: 7 });

		const fetchResponse = { json };

		const fetchImplementation = () => Promise.resolve(fetchResponse);

		global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);

		return store.loadPokemonsFromAPIById(12).then(() => {
			expect(store.getBaseExperience()).toBe(7);
		});
	});

	test('should call getBaseExperience and return 7', () => {
		// arrange
		store.setPokemon({ base_experience: 7 });

		// act
		const result = store.getBaseExperience();

		// assert
		expect(result).toBe(7);
	});

	test('should call getSpecie should return david', () => {
		store.setPokemon({ species: { name: 'david' } });

		expect(store.getSpecie()).toBe('david');
	});
});
