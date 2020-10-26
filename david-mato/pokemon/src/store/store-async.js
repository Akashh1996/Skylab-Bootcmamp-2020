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
        try {
            let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=200');
            _pokemons = await response.json();
        } catch (error) {
            _pokemons = null;
        }
    }

    async getPokemonById(pokeName) {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
            _pokemon = await response.json();
        } catch (error) {
            _pokemon = null;
        }
    }

    async loadPokeAbilityByName(abilityName) {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
            _pokeAbility = await response.json();
        } catch (error) {
            _pokeAbility = null;
        }
    }
}

module.exports = Store;