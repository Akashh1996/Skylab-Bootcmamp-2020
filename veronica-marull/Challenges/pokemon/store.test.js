const store = require('./store');

describe('Pokestore', () => {
	let pokeStore;

	beforeEach(() => {
		pokeStore = store;
	});

	test('should be defined', () => {
		expect(pokeStore).toBeDefined();
	});

	test('should return a array of pokemons', () => {
		expect(pokeStore.getPokemons()).toEqual([]);
	});

	test('should load pokemons from api', () => {
		const response = {
			json: jest.fn().mockReturnValueOnce([{}])
		};
		global.fetch = jest
			.fn()
			.mockImplementationOnce(() => Promise.resolve(response));

		return pokeStore.loadPokemons().then(() => {
			expect(pokeStore.getPokemons()).toEqual([{}]);
		});
	});
	/*
	test('should return the detail of the pokemon given the name or id', () => {
		try {
			expect().toBe();
		}
	});*/
});
