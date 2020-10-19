const store = require('./store')

describe('Store', () => {
    test('should create', () => {
        expect(store).toBeDefined();
    });

    describe('getHeroes', () => {
        test('should call getHeroes and return an array of heroes', () => {
            expect(store.getHeroes()).toEqual([
                { "id": 11, "name": 'Dr Nice' },
                { "id": 12, "name": 'Narco' },
                { "id": 13, "name": 'Bombasto' },
                { "id": 14, "name": 'Celeritas' },
                { "id": 15, "name": 'Magneta' },
                { "id": 16, "name": 'RubberMan' },
                { "id": 17, "name": 'Dynama' },
                { "id": 18, "name": 'Dr IQ' },
                { "id": 19, "name": 'Magma' },
                { "id": 20, "name": 'Tornado' }
            ]);
        })
    })
    describe('getHeroById', () => {
        test('should call getHeroById and return one hero', () => {
            expect(store.getHeroById(11)).toEqual({ "id": 11, "name": 'Dr Nice' });
        })
    })
    describe('getTopHeroes', () => {
        test('should call getTopHeroes and return the', () => {
            expect(store.getTopHeroes()).toEqual([
                { "id": 12, "name": 'Narco' },
                { "id": 13, "name": 'Bombasto' },
                { "id": 14, "name": 'Celeritas' },
                { "id": 15, "name": 'Magneta' },
            ]);
        })
    })
});