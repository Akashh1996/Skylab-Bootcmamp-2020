let _pokemons = [];
let _pokemon;

class PokeStore {

    getPokemons() {
        return _pokemons;
    }

    getPokemon() {
        return _pokemon;
    }

    loadPokemonsFromAPI() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
        return fetch(url)
            .then(response => response.json())
            .then((pokemons) => {
                _pokemons = pokemons.results;
            });
    }

    loadPokemonFromAPIByName(name) {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        return fetch(url)
            .then(response => response.json())
            .then((pokemon) => {
                _pokemon = pokemon;
            });
    }

}

const pokeStore = new PokeStore();

module.exports = pokeStore;