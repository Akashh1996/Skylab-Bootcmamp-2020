const store = require("./store.js");

describe("store", () => {
    test('should create', () => {
        expect(store).toBeDefined();
    })
})

describe('getHeroes', () => {
    test('should call getHeroes and return and array of heroes', () => {
        expect(store.getHeroes()).toEqual(_heroes = [
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
    test('should call getHeroes and return and array of heroes', () => {
        expect(store.getHeroeById(12)).toEqual({ id: 12, name: 'Narco' })
    })
})
describe('getTopHeroes', () => {
    test('should call getHeroes and return and array of heroes', () => {
        expect(store.getTopHeroes()).toEqual([
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' }])
    })
})