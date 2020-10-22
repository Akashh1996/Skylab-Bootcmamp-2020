let _pokeMonList;
let pokeDetail
let pokemonAbility
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
    getPokemonAbility(name) {
        return fetch(`https://pokeapi.co/api/v2/ability/${name}/`)
            .then((response) => response.json())
            .then((ability) => {
                pokemonAbility = ability;

            });
    }
    pokeMonDetailAbility() {
        return pokemonAbility;
    }

}

const store = new Store();

module.exports = store;