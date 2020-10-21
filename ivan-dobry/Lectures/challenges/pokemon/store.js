let _pokemons;
class Store {

    loadPokemons () {

        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then ((response) => {
            return response.json();
        })
        .then ((value) => {
            _pokemons = value.results;
        })
    }

    getPokemons () {
        return _pokemons;
    }
}

const store = new Store();
