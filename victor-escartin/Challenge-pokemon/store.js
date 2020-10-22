let _pokemonList;
let _pokemonDetail;

class Store {

    getPokemonData() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then((response) => response.json())
            .then((pokemon) => {
                _pokemonList = pokemon.results;
            });
    }

    getPokemonList() {
        return _pokemonList;
    }
    
    getPokemonDetail(name) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => response.json())
            .then((pokemon) => {
                _pokemonDetail = pokemon;
            });
	}
	
    pokemonDetail() {
        return _pokemonDetail;
    }

    getTenPokemons(list) {
		return this.getPokemonList(list).slice(1, 11);
    }

}

const store = new Store();

module.exports = store;

