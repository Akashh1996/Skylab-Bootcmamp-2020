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

    async loadPokemons() {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=200');
        _pokemons = await response.json();
    }

    async getPokemonById(pokeName) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        _pokemon = await response.json();
    }

    async loadPokeAbilityByName(abilityName) {
        let response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
        _pokeAbility = await response.json();
    }
}

module.exports = Store;