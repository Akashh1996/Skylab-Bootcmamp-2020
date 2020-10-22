let _pokemons;
class Store {

    loadPokemons () {

        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then((response) => response.json())
        .then((pokemons) => {
            _pokemons = pokemons;
            return _pokemons
        })
    }

    getPokemons () {
        return _pokemons;
    }
}

const store = new Store();

module.exports = store;
