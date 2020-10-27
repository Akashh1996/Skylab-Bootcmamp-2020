const { TestScheduler } = require('jest')
const store = require('./store')

describe('store', () => {
    test('should create', () => {
        expect(store).toBeDefined();
    })
    test('should return an array of pokemons', () => {
        expect(store.getPokemons()).toEqual([])
    })


    test('should  return single pokemon', () => {
        expect(store.getPokemon()).toEqual(undefind)

    })


    test('should load pokemons from api', async () => {

        await store.loadPokemons()
        const response = await { jason: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }]) }

        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response))
        expect(store.getPokemons()).toEqual([{ id: 12, name: 'Narco' }])

    })

})
