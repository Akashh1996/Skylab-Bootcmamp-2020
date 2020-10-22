let _pokeMonList;
let pokeDetail
class Store {
    getpokemonData() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then((response) => response.json())
            .then((pokemon) => {
                _pokeMonList = pokemon.results;

            });
    }

    getpokemonList() {
        return _pokeMonList;
    }
    getPokeMonDetail(name) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => response.json())
            .then((pokemon) => {
                pokeDetail = pokemon;
            });
    }
    pokeMonDetail() {
        return pokeDetail;
    }

}

const store = new Store();

module.exports = store;