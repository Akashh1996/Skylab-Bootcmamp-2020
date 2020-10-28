const { getToken } = require('./store');
const store = require('./store')

describe('store', () => {
    test ('should create', () => {
        expect(store).toBeDefined();
    });

    describe('load token json', () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                Promise.resolve({
                    json: jest.fn().mockReturnValueOnce('token')
                })
            })
        });

        test('should get token', () => {
            store.getToken().then(() => {
                expect(_token).toBe('token')
            })
        });
       
    })

    describe('load spotify data', () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                Promise.resolve({
                    json: jest.fn().mockReturnValueOnce({track: 'song'})
                })
            })
        });

        test('should get data', () => {
            store.getSpotifyData().then(() => {
                expect(spotifyData).toBe({track: 'song'})
            })
        });

        test('should get array', () => {
            store.getSpotifyData().then(() => {
                expect(itemArray).toBe('song')
            })
        });

        test('should get array', () => {
            store.getSpotifyData().then(() => {
                expect(spotifyData).toEqual({track: 'song'})
            })
        });

    })
})