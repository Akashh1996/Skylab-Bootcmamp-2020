
const gameFreak = require('./Pokemon');

describe('GameFreak', ()=>{
    test('should be Defined', () =>{
        expect(gameFreak).toBeDefined();
    });

    test('primer test de load pokedex', () =>{
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: jest.fn().mockReturnValue([{}])
        }))
        return gameFreak.loadPokedex().then((respuesta) => {
            expect(respuesta).toEqual([{}])
        })
        
    })
});
