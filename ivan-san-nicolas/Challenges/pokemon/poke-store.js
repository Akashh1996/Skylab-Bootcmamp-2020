let _pokemons = [];
let _pokemon;

class PokeStore {

    getPokemons() {
        return _pokemons;
    }

    getPokemon() {
        return _pokemon;
    }

    async loadPokemonsFromAPI() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
        const response = await fetch(url);
        const pokemons = await response.json();
        _pokemons = pokemons.results;
    }

    async loadPokemonFromAPIByName(name) {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        _pokemon = pokemon;
    }

}

const pokeStore = new PokeStore();

module.exports = pokeStore;