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
        let objWithResults = await response.json();
        let arrOfPokemons = await objWithResults.results;

        for (const pokemonObj of arrOfPokemons) {
            let response = await fetch(`${pokemonObj.url}`)
            let pokemon = await response.json();
            _pokemons.push(pokemon);
        }
    }

    async getPokemonById(pokeId) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        _pokemon = await response.json();
    }

    async loadPokeAbilityByName(abilityName) {
        let response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
        _pokeAbility = await response.json();
    }
}

module.exports = Store;