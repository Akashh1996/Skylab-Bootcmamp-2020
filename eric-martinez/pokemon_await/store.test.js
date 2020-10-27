const store = require('./store');

describe('store', () => {
    
    test('should create', () => {
		expect(store).toBeDefined();
    });

    describe('loadPokedex', (() => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementationOnce(() => {
                Promise.resolve({
                    json: jest.fn().mockReturnValueOnce({result:[]})
                })
            })
        })
        test('should call loadPokemon and return electrode', async () => {
            try{
                const data = await fetch();
                expect(data).toEqual([]);
            }catch (e){
                expect(e).toMatch('error');
            }
        });
    }));
});