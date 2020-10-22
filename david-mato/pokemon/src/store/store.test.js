const Store = require('./store');

describe('store', () => {
    let store;

    beforeEach(() => {
        store = new Store();
    })

    test('should be defined', () => {
        expect(store).toBeDefined();
    })

    test('should return an array of pokemons', () => {
        const objWithResults = {
            results: [{}]
        }
        const response = {
            json: jest.fn().mockImplementationOnce(() => {
                objWithResults.results;
            })
        }
        global.fetch = jest.fn().mockImplementationOnce(() => {
            debugger;
            Promise.resolve(response)
        })
        return store.loadPokemons().then(() => {
            expect(store.getPokemons()).toEqual([{}])
        })
    })
})