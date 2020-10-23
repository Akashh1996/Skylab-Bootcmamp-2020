const store = require('./store');

describe('loadPokédex', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
        }))
    })

    test('should return the Pokédex', () => {
        return store.loadPokedex().then((response) => {
            expect(response).toEqual([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}])
        })
    })

    test('should return anchor Pokédex', () => {

        // arrange
        let a={"results": [
            {
              "name": "unown",
              "url": "https://pokeapi.co/api/v2/pokemon/1/"
            }]}
    
        // act
        let response = store.anchorPokedex(a)
    
        // assert
        expect(response).toBe('<li><a href=./detail.html?id=1>unown</a></li>')
    })

})

describe('loadAbilityPokemon', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"effect":"When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage."}])
        }))
    })

    test('should return the Pokédex', () => {
        return store.loadAbilityPokemon().then((response) => {
            expect(response).toEqual([{"effect":"When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage."}])
        })
    })

    test('should return stats Pokemon', () => {

        // arrange
        let a={"effect_entries": [
            {
              "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
              "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
              },
              "short_effect": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less."
            }]}

        // act
        let response = store.languageAbility(a)
    
        // assert
        expect(response).toBe("When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.")
    })

    test('should return stats Pokemon', () => {

        // arrange
        let a={"effect_entries": [
            {
              "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
              "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/9/"
              },
              "short_effect": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less."
            }]}

        // act
        let response = store.languageAbility(a)
    
        // assert
        expect(response).toBe(undefined)
    })

})

describe('loadPokemon', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(() => 
        Promise.resolve({
            json: jest.fn().mockReturnValueOnce([{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"}])
        }))
    })

    test('should return info of Pokemon id:1', () => {
        return store.loadPokemon(1).then((response) => {
            expect(response).toEqual([{"name":"blaze","url":"https://pokeapi.co/api/v2/ability/66/"}])
        })
    })

    test('should return stats Pokemon', () => {

        // arrange
        let a={"stats": [
            {
              "base_stat": 45,
              "effort": 0,
              "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
              }
            }]}

        // act
        let response = store.statsPokemon(a)
    
        // assert
        expect(response).toBe(`<div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>45</span></div></div><span>hp</span></div>`)
    })

    test('should return one description of Pokemon', () => {

        // arrange
        let a={
            "abilities": [
              {
                "ability": {
                  "name": "overgrow",
                  "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
              }]}

        // act
        let response = store.descriptionPokemon(a,"abilities","ability")
    
        // assert
        expect(response).toBe("<li>overgrow</li>")
    })

    test('should return ability anchor of Pokemon', () => {

        // arrange
        let a={
            "abilities": [
              {
                "ability": {
                  "name": "overgrow",
                  "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
              }]}

        // act
        let response = store.abilityAnchorPokemon("1",a,"abilities","ability")
    
        // assert
        expect(response).toBe("<li><a href=./ability.html?id=1&ability=65/>overgrow</a></li>")
    })
})