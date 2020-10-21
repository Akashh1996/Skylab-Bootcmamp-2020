const { TestScheduler } = require('jest')
const store = require('./store')

describe('store', () => {
    test('should create', () => {
        expect(store).toBeDefined();
    })
})

describe('getHeroes', () => {
    test('should call getHeroes and return an array of heroes', () => {
        expect(store.getHeroes()).toEqual([
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ])

    })
})

describe('getHeroeById', () => {
    test('should call getHeroeById and return one hero', () => {
        expect(store.getHeroById(12)).toEqual({ id: 12, name: 'Narco' })
    })
})

describe('getTopHeroes', () => {
    test('should call getTopHeroes and return one hero', () => {
        expect(store.getTopHeroes()).toEqual([
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
        ])

    })
})

describe('loadheroes', () => {
    test.only('should return promise', () => {
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ jason: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }]) }))
        return store.loadHeroes.then((response) => {
            expect(response).toEqual([{ id: 12, name: 'Narco' }])
        })
    })
})

describe('should update heroes', () => {
    test.only('should return one promise', () => {
        //arrange
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ jason: jest.fn().mockReturnValueOnce([]) }))

        // act

        //assert

        return store.loadHeroes.then((response) => {
            expect(store.getHeroes()).toEqual([response])
        })
    })
})