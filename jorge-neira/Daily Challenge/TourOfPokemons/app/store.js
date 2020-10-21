let _pokemons;
class Store {
	async loadPokemonList() {
		const pokemonsList = await fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
		);
		const pokemonListJson = await pokemonsList.json();
		return (_pokemons = pokemonListJson);
	}
	async loadPokemonDetail(pokemon) {
		const pokemonDetail = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const pokemonStats = await pokemonDetail.json();
		return pokemonStats
	}

	getTopPokemons () {
		
	}

	getPokemons() {
		return _pokemons;
	}
}

const store = new Store();
store.loadPokemonList().then(() => {
	console.log(_pokemons);
});

// module.exports = store;
