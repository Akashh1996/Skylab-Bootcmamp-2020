const Store = require('./store-async');

describe('store', () => {
    let store;

    beforeEach(() => {
        store = new Store();
        const response = {
            json: jest.fn().mockReturnValueOnce([{}])
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
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

    test('should return an array of pokemon objects', async () => {
        try{
            await store.loadPokemons();
            expect(store.getPokemons()).toEqual([{}])
        } catch (error) {
            expect(store.getPokemons()).toBe(null)
        }
    })

    test('should return a pokemon object', async () => {
        try{
            await store.getPokemonById();
            expect(store.getPokemon()).toEqual([{}])
        } catch (error) {
            expect(store.getPokemon()).toBe(null)

        }
    })

    test('should return an ability object', async () => {
        try{
            await store.loadPokeAbilityByName();
            expect(store.getPokeAbility()).toEqual([{}])
        } catch (error) {
            expect(store.getPokeAbility()).toBe(null)
        }
    })
})

describe('store with fetch throwing errors', () => {
    let store;

    beforeEach(() => {
        store = new Store();
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.rejected());
    })

    test('should return an array of pokemon objects', async () => {
        await store.loadPokemons();
        expect(store.getPokemons()).toBe(null)
    })
})