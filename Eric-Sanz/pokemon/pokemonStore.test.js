const PokemonStore = require('./pokemonStore');

describe('Pokemon Store', () => {
    let store;

    beforeEach(() => {
        store = new PokemonStore();
    });

    test('Store should to be defined', () => {
        expect(store).toBeDefined();
    });

    test('Should return an array of Pokemons', () => {
        expect(store.getPokedex()).toEqual([]);
    });

    test('Should load pokemons from API', () => {
        const response = { json: jest.fn().mockReturnValueOnce([{id: 5, name: 'Charizard'}])};
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));

        return store.pokedexData().then(() => {
            expect(store.pokedexData()).toEqual([{id: 5, name: 'Charizard'}]);
        })
    })

    test('Should load pokemons details from API', () => {
        const json = jest.fn().mockReturnValueOnce({id: 5, name: 'Charizard'});
        const fetchImplementation = () => Promise.resolve({json: json});
        global.fetch = jest.fn().mockImplementationOnce(fetchImplementation);
        
        return store.getPokedexData(5).then(() => {
            expect(store.getPokedexData()).toEqual({id: 5, name: 'Charizard'});
        })

    })


})