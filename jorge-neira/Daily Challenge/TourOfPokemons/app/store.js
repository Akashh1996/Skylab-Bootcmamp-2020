let _pokemons;
let _pokemonsDetail;
let _pokemonAbilities;

class Store {
	async loadPokemonList(offset = 0) {
		const pokemonsList = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
		);
		const pokemonListJson = await pokemonsList.json();
		_pokemons = pokemonListJson;
	}
	async loadPokemonDetail(pokemon) {
		const pokemonDetail = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon}`
		);
		const pokemonStats = await pokemonDetail.json();
		_pokemonsDetail = pokemonStats;
	}
	async loadPokemonAbilities(url) {
		const response = await fetch(url);
		const pokemonAbilities = await response.json();
		_pokemonAbilities = pokemonAbilities;
	}

	getPokemonList() {
		return _pokemons.results;
	}
}

const store = new Store();
module.exports = store;
