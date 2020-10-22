let _pokemons = [];
let _pokemon;
let _pokeAbility;

class Store {

    getPokemons() {
        return _pokemons; 
    }

    getPokemon() {
        return _pokemon;
    }

    getPokeAbility() {
        return _pokeAbility;
    }

    loadPokemons() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=200')
            .then((response) => response.json())
            .then((data) => _pokemons = data)
    }

    getPokemonById(pokeName) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => response.json())
            .then((data) => _pokemon = data)
    }

    loadPokeAbilityByName(abilityName) {
        return fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
            .then((response) => response.json())
            .then((data) => _pokeAbility = data)
    }
}

module.exports = Store;