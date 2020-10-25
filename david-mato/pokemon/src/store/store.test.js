const Store = require('./store');

describe('store', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    })

    test('should be defined', () => {
        expect(store).toBeDefined();
    })

    test('should return an array', () => {
        expect(store.getPokemons()).toEqual([]);
    })

    test('should be undefined', () => {
        expect(store.getPokemon()).toBeUndefined();
    })

    test('should be undefined', () => {
        expect(store.getPokeAbility()).toBeUndefined();
    })

    test('should return an array of pokemon objects', () => {
        const response = {
            json: jest.fn().mockReturnValueOnce([{}])
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        return store.loadPokemons().then(() => {
            expect(store.getPokemons()).toEqual([{}])
        })
    })

    test('should return a pokemon object', () => {
        const response = {
            json: jest.fn().mockReturnValueOnce({})
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        
        return store.getPokemonById().then(() => {
            expect(store.getPokemon()).toEqual({})
        })
    })

    test('should return an ability object', () => {
        const response = {
            json: jest.fn().mockReturnValueOnce({})
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        
        return store.loadPokeAbilityByName().then(() => {
            expect(store.getPokeAbility()).toEqual({})
        })
    })
})

describe("store functions's catch", () => {
    let store;

    beforeEach(() => {
        store = new Store();
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject());
    });

    test('should call loadPokemons and return null', () => {
        return store.loadPokemons().then(() => {
            expect(store.getPokemons()).toBe(null)
        })
    });
    
    test('should call loadPokemons and return null', () => {
        return store.getPokemonById().then(() => {
            expect(store.getPokemon()).toBe(null)
        })
    });

    test('should call loadPokeAbilityByName and return null', () => {
        return store.loadPokeAbilityByName().then(() => {
            expect(store.getPokeAbility()).toBe(null)
        })
    });
})