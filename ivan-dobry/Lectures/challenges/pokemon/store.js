let _pokemons;
let _pokemon;

class Store {

    loadPokemons () {   
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then((response) => response.json())
        .then((pokemons) => {
            _pokemons = pokemons.results;
            return _pokemons;
        })
    }

    loadPokemonsFromAPIById(pokemonId) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        return fetch(url)
            .then((response) => response.json())
            .then((value) => {
                _pokemon = value;
                return _pokemon;
            });
    }

    getPokemon () {
        return _pokemon;
    }

    getPokemons () {
        return _pokemons;
    }

    getBaseExperience() {
        return _pokemon.base_experience
    }

    getPokemonId() {
        return _pokemon.id;
    }

    setPokemon(pokemon) {
        _pokemon = pokemon;
    }

    getPokemonAbility () {
        return _pokemon.ability;
    }

}

const store = new Store();

module.exports = store;
