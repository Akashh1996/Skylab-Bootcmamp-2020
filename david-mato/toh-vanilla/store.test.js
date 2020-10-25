const store = require('./store')

describe('store', () => {
    const heroes = store.getHeroes();

    test('should create', () => {
        expect(store).toBeDefined();
    })

    describe('getHeroes', () => {
        test('should call getHeroes and return an array of heroes', () => {
            expect(store.getHeroes()).toEqual(heroes);
        })
    })
    describe('getHeroById', () => {
        test('should call getHeroById and return one hero', () => {
            // act
            const response = store.getHeroById(5);

            // assert
            expect(response).toEqual(heroes[4]);
        })
    })
    describe('getTopHeroes', () => {
        test('should call getTopHeroes and return', () => {
            // act
            const response = store.getTopHeroes();

            // assert
            expect(response).toEqual(heroes.slice(1, 5));
        })
    })
})