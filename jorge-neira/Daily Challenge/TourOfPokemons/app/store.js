let _pokemons;
let _pokemonsDetail;

class Store {
	async loadPokemonList(offset = 0) {
		const pokemonsList = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
		);
		const pokemonListJson = await pokemonsList.json();
		return (_pokemons = pokemonListJson);
	}
	async loadPokemonDetail(pokemon) {
		const pokemonDetail = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon}`
		);
		const pokemonStats = await pokemonDetail.json();
		return (_pokemonsDetail = pokemonStats);
	}
	getTopPokemons() {
		return _pokemons.results.slice(0, 4);
	}

	getPokemonList() {
		return _pokemons.results;
	}
}

const store = new Store();

// module.exports = store;
