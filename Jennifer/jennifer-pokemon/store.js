let listPokemon;
let _pokemonDetail;

class Store {
	loadPokemons() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').then(
			(response) => {
				return response.json().then((jsonPokemon) => {
					listPokemon = jsonPokemon;
					console.log(listPokemon);
				});
			}
		);
	}

	getPokemonDetail(name) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
			.then((response) => response.json())
			.then((pokemon) => {
				_pokemonDetail = pokemon;
			});
	}
}

const store = new Store();
//module.exports = store;
