const pokedex = require('./poke-store');

describe('poke-store', () => {
    test('should load one pokemon details from api', () => {
        const json = jest.fn().mockReturnValueOnce({ id: 12, name: 'Narco'});
        const fetchImplementation = () => {Promise.resolve({json: json})};
        global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
        return store.loadPokemonsFromAPIById(12).then(() => {
            expect(store.getPokemon()).toEqual({ id: 12, name: 'Narco' });
        })
    })
})