const PokeStore = require('./poke-store');

describe("Poke Store", () => {

    let store;
    beforeEach(() => {
        store = new PokeStore;
    })
    test('should be defined', () => {
        expect(store).toBeDefined();
    });
    test('should return a pokemon array', () => {
        expect(store.getPokemons()).toEqual([]);
    });
    test('should load pokemons from api', () => {
        const respones = {
            json: jest.fn().mockReturnValueOnce([{
                id: 12,
                name: 'Narco'
            }])
        };
        global.fetch = jest.fn().mockImplementationOnce(() => response)
        return store.loadPokemonsFromAPI().then(() => {
            expect(store.getPokemons()).toEqual([{
                id: 12,
                name: 'Narco'
            }]);
        })
    });
    test('should return a single pokemon', () => {
        return store.loadPokemonsFromAPIById(12).then(() => {
            expect(store.getPokemon()).toEqual(undefined);
        })
    });
    test('should load pokemons from api', () => {
        return store.loadPokemonsFromAPIById(12).then(() => {
            expect(store.getPokemon()).toEqual({
                id: 12,
                name: 'Narco'
            });
        })
    });
})