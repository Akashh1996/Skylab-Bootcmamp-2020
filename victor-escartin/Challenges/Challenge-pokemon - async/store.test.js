const { getPokemons } = require('./store');
const store = require('./store');

describe('store', () => {
	test('should create', () => {
		expect(store).toBeDefined();
    });

    describe('loadPokemons', () => {
        beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({results: [{id: 12, name: 'bulbasour'}]})
				})
			);
		});

        test('should update _pokemons', () => {
            return store.loadPokemons().then(() => {
                expect(store.getPokemons()).toEqual([{id: 12, name: 'bulbasour'}])
            })
        });

        test('should return pokemon id', () => {
            store.setPokemon({id: 12})
            const result = store.getPokemonId();
            expect(result).toBe(12)
        });

        test('should call getBaseExperience and return 7', () => {
            store.setPokemon({base_experience: 7});
            const result = store.getBaseExperience();
            expect(result).toBe(7);
        })
    })
    
    describe('loadPokemonsFromAPIById', () => {
        beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({ability: []})
				})
			);
        });

        test('should update _pokemons', () => {
            return store.loadPokemonsFromAPIById().then(() => {
                expect(store.getPokemon()).toEqual({ability: []})
            })
        });

        test('should return pokemon ability', () => {
            return store.loadPokemonsFromAPIById().then(() => {
                expect(store.getPokemonAbility()).toEqual([])
            })
        });

        test('should return pokemon ability', () => {
            store.getPokemonAbility({ability: []})
                expect(store.getPokemonAbility()).toEqual([])
        });
    });  
});