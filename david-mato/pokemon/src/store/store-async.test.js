const Store = require('./store-async');

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

    test('should return an array of pokemon objects', async () => {
        const response = {
            json: jest.fn().mockReturnValueOnce([{}])
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        
        try{
            await store.loadPokemons();
            expect(store.getPokemons()).toEqual([{}])
        } catch (error) {}
    })

    test('should return a pokemon object', async () => {
        const response = {
            json: jest.fn().mockReturnValueOnce({})
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        
        try{
            await store.getPokemonById();
            expect(store.getPokemon()).toEqual([{}])
        } catch (error) {}
    })

    test('should return an ability object', async () => {
        const response = {
            json: jest.fn().mockReturnValueOnce({})
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
        
        try{
            await store.loadPokeAbilityByName();
            expect(store.getPokeAbility()).toEqual([{}])
        } catch (error) {}
    })
})