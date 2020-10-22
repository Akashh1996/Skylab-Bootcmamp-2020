const store = require('./store');

describe('loadPokédex', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
        }))
    })

    test.only('should return the Pokédex', () => {
        return store.loadPokedex().then((response) => {
            expect(response).toEqual([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
        })
    })
})

describe('loadPokedex', () => {
    beforeEach(() => {
        
    })
})

describe('loadPokedex', () => {
    beforeEach(() => {
        const response = {
            json: jest.fn().mockReturnValueOnce([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
        };
        global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(response));
    })
    return store.loadPokedex().then((response) => {
        expect(response).toEqual([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
    })
})

describe('loadPokemon', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"}])
        }))
    })

    test.only('should return info of Pokemon id:1', () => {
        return store.loadPokemon(1).then((response) => {
            expect(response).toEqual([{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"}])
        })
    })
})

describe('formPokemon', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"}])
        }))
    })

    test.only('should return the form of Pokemon', () => {
        return store.formPokemon(1).then((response) => {
            expect(response).toEqual([{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"}])
        })
    })

})

describe('anchorPokedex', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([])
        }))
    })

    test.only('should return anchorPokédex', () => {
        return store.formPokemon(1).then((response) => {
            expect(response).toEqual([])
        })
    })

})