
const gameFreak = require('./Pokemon');

describe('GameFreak', ()=>{
    test('should be Defined', () =>{
        expect(gameFreak).toBeDefined();
    });

    test('primer test de load pokedex', () =>{
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: jest.fn().mockReturnValue([{}])
        }))
        return gameFreak.loadPokedex().then((pokemon) => {
            expect(pokemon).toEqual([{}])
        })
    })
    test('retorna _pokemon', ()=>{
        expect(gameFreak.getPokedex()).toEqual([{}]);
    })
    test('retorna Pokemon', ()=>{
        expect(gameFreak.getPokemon()).toEqual(undefined);
    })
    test('primer test de get name', () =>{
        global.fetch = jest.fn().mockImplementationOnce(Promise.resolve(() => {
            return gameFreak.getName().then((respuesta) => {
                expect(respuesta).toEqual('https://pokeapi.co/api/v2/pokemon/' + respuesta)
            })
        }))
        
    })
    test('primer test de load Pag', () =>{
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: jest.fn().mockReturnValue([{}])
        }))
        return gameFreak.loadPag().then((pokemon) => {
            expect(pokemon).toEqual([{}])
        })
    })
    
});
