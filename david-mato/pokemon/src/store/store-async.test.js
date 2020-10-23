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
            await store.loadPokemons();
            expect(store.getPokemons()).toEqual([{}])
    })

    test('should return a pokemon object', async () => {
            await store.getPokemonById();
            expect(store.getPokemon()).toEqual([{}])
    })

    test('should return an ability object', async () => {
            await store.loadPokeAbilityByName();
            expect(store.getPokeAbility()).toEqual([{}])
    })
})

describe('store with fetch throwing errors', () => {
    let store;

    beforeEach(() => {
        store = new Store();
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject());
    })

    test('should call loadPokemons and return null', async () => {
        await store.loadPokemons();
        expect(store.getPokemons()).toBe(null)
    })

    test('should call getPokemonById and return null', async () => {
        await store.getPokemonById();
        expect(store.getPokemon()).toBe(null)
    })

    test('should call loadPokeAbilityByName and return null', async () => {
        await store.loadPokeAbilityByName();
        expect(store.getPokeAbility()).toBe(null)
    })
})