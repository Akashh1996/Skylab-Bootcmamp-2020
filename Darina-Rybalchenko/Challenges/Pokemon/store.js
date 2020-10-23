let _pokemons = [];
let pokemon;
let ability;


class Store {

    getPokemons() {
        return _pokemons;
    }

    getPokemon() {
        return pokemon;
    }

    getAbility() {
        return ability
    }

    /*  loadPokemons() {
         return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
             .then(response => {
                 return response.json()
             })
             .then(pokemons => {
                 _pokemons = pokemons.results
             })
     } */

    async loadPokemons() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=200'
        try {
            const response = await fetch(url);
            const pokemons = await response.json()

            _pokemons = pokemons.results
        }
        catch (error) {
            _pokemons = null

        }
    }


    /*   loadPokemonsfromApiById(pokemonName) {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          return fetch(url)
              .then(response => {
                  return response.json()
              })
              .then(pokemonDetailsObject => {
                  pokemon = pokemonDetailsObject
              })
      } */

    async loadPokemonsfromApiById(pokemonName) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        try {
            const response = await fetch(url)
            const pokemonDetailsObject = await response.json()

            pokemon = pokemonDetailsObject
        }
        catch (error) {
            pokemon = null

        }
    }

    loadAbilitiesfromApiById(abilitiesName) {
        const url = `https://pokeapi.co/api/v2/ability/${abilitiesName}`
        return fetch(url)
            .then(response => {
                return response.json()
            })
            .then(pokemonAbilityObject => {
                ability = pokemonAbilityObject
            })
    }


}

const store = new Store();


module.exports = store