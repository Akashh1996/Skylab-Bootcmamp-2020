let _pokemons;
let pokemonUrl;


class Store {

    loadPokemons() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=200')
            .then(response => {
                return response.json()
            })
            .then(pokemons => {
                _pokemons = pokemons.results
            })
    }

    getPokemonList() {
        return _pokemons;
    }

    getPokemonById(pokemonId) {
        return this.getPokemonList().find(pokemon => pokemon.id === pokemonId);
    }



}

const store = new Store();