const store= require('./store')

describe('store', () => {


    beforeEach(() => {
        const response = {
            json: jest.fn().mockReturnValueOnce({})
        }
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
    })

    test('should be defined', () => {
        expect(store).toBeDefined();
    })

    test('should call loadSingerTracksFromAPI and getSingersTracks and return an object in an array', async () => {
        await store.loadSingerTracksFromAPI();
        expect(store.getSingersTracks()).toEqual([{}]);
    })

    test('should call loadSingerFromAPI and getSinger and return an object', async () => {
        await store.loadSingerFromAPI();
        expect(store.getSinger()).toEqual({});
    })

    test('should call getSingerID and return an ID', () => {
        // arrange
        const IDNum = 1;

        // act
        const result = store.getSingerID(IDNum);

        // assert
        expect(result).toBe('26dSoYclwsYLMAKD3tpOr4');
    })

    test('should call resetSingersTracks and return an empty array', () => {
        expect(store.resetSingersTracks()).toEqual([]);
    })
})
