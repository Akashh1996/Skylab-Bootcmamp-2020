let _pokemons = [];
let _pokemon;
let _ability;

class PokeStore {

    getPokemons() {
        return _pokemons;
    }

    getPokemon() {
        return _pokemon;
    }

    getAbility() {
        return _ability;
    }

    async loadPokemonsFromAPI() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
        const response = await fetch(url);
        const pokemons = await response.json();
        _pokemons = pokemons.results;
    }

    async loadPokemonFromAPIByName(name) {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        try {
            const response = await fetch(url);
            const pokemon = await response.json();
            _pokemon = pokemon;
        } catch {
            alert('Error 404: Pokemon not found. Please, wait and try again or try with another pokemon');
            window.location = 'http://127.0.0.1:5500/ivan-san-nicolas/challenges/pokemon/dashboard.html';
        }
    }

    async loadAbilityFromAPIByName(abilityName) {
        let url = `https://pokeapi.co/api/v2/ability/${abilityName}`
        try {
            const response = await fetch(url);
            const ability = await response.json();
            _ability = ability;
        } catch {
            alert('Error 404: Ability not found. Please, wait and try again or try with another pokemon');
            window.location = 'http://127.0.0.1:5500/ivan-san-nicolas/challenges/pokemon/dashboard.html';
        }
    }

}

const pokeStore = new PokeStore();

module.exports = pokeStore;