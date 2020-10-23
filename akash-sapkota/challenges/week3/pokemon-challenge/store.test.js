const {
    expect,
    beforeEach
} = require('@jest/globals');
const store = require('./store');

describe('Poke Store', () => {
    describe('should load list of pokemons from API', () => {

        beforeEach(() => {
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
        })

        test('should load pokemons from api', () => {


            return store.getpokemonData().then(() => {
                expect(store.getpokemonList()).toEqual([{
                    id: 12,
                    name: 'Narco'
                }]);
            });
        });

    });
    describe('get pokemon list', () => {
        test('should return a list of pokemon in an array', () => {
            expect(store.getpokemonList()).toEqual([{
                id: 12,
                name: 'Narco'
            }])
        });

    });

    /* describe('Poke Store', () => {
        describe('should load list of pokemons from API', () => {
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

        });
    });

 */


});