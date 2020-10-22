const store = require('./store');

describe('Poke Store', () => {
    test('should load pokemons from api', () => {
        const response = {
            json: jest.fn().mockReturnValueOnce({
                results: [{
                    id: 12,
                    name: 'Narco'
                }]
            })
        };
        global.fetch = jest
            .fn()
            .mockImplementationOnce(() => Promise.resolve(response));

        return store.getpokemonData().then(() => {
            expect(store.getpokemonList()).toEqual([{
                id: 12,
                name: 'Narco'
            }]);
        });
    });

    /*   test("should return a single pokemon", () => {
          expect(store.getPokemon()).toEqual([]);
      }) */
    /* test("should load pokemons from api", () => {
        const response = {
            json: jest.fn().mockReturnValueOnce([{
                id: 12,
                name: "Narco"
            }])
        }
        global.fetch = jest.fn().mockImplementationOnce(() => response)
        return store.loadPokemonsFromAPIById(12).then(() => {
            expect(store.getPokemon()).toEqual([{
                id: 12,
                name: "Narco"
            }]);
        })
    }) */
});