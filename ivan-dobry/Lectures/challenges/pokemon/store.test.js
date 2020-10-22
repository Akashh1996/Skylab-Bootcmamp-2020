const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
    });

    describe('loadPokemons', () => {
        beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([{name: 'bulbasaur'}])
				})
			);
		});

        test('should update _pokemons', () => {
            return store.loadPokemons().then(() => {
                expect(store.getPokemons()).toEqual([{name: 'bulbasaur'}])
            })
        });
    })
});