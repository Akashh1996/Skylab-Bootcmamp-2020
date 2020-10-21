let pokemon;
let pokemonList;

class Store {
	loadPokemon() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
			.then((response) => response.json())
			.then((getPokemon) => {
				pokemonList = getPokemon;
				return getPokemon;
			});
	}

	getPokemon() {
		return pokemonList;
	}

	getPokemonByName(pokemonName) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
			(response) => {
				pokemon = response;
				return response;
			}
		);
	}

	getPok() {
		return pokemon;
	}
}

const store = new Store();

module.exports = store;
