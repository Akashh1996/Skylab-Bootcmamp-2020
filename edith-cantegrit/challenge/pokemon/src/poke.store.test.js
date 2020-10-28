const PokeStore = require('./poke-store');

describe('Poke Store', () => {
    let store; 

    beforeEach(() => {
        const store = new PokeStore
    })

    test('should be defined', () => {
        expect(store).toBeDefined();
    });

    test('should return an array of pokemons', () => {
        expect(store.getPokemons()).toEqual([]);
    });

    test('should load pokemons from api', () => {
        const response = { json: jest.fn().mockReturnValueOnce([{id: 12, name: 'Narco'}])
        };
        global.fetch = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(response))
        return store.loadPokemonsFromAPI().then(() => {
        expect(store.getPokemons()).toEqual([{id: 12, name: 'Narco'}]);
        });
    });

    test('should return a single pokemon', () => {
        expect(store.getPokemon()).toEqual(undefined);
    });

    test('should load pokemon from api', () => {
        const json = jest.fn().mockReturnValueOnce({id: 12, name: 'Narco'});

        const fetchResponse = { json };

        const fetchImplementation = () => Promise.resolve(fetchResponse);

        global.fetch = jest.fn().mockImplementationOnce(fetchImplementation)
        return store.loadPokemonsFromAPIById().then(() => {
        expect(store.getPokemon()).toEqual({id: 12, name: 'Narco'});
        });
    });

    test('should call get experience', () => {
        store.setPokemon({base_experience: 7})
        const result = store.getBaseExperience();
        expect(result).toBe(7)
    })

    test('should call get specie', () => {
        store.setPokemon({species: {name: "david"}})
        const result = store.getSpecie();
        expect(result).toBe("david")
    })
});