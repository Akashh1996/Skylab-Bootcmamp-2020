class Store {
	pokemons = null;

	loadPokemons() {
		return fetch('https://pokeapi.co/api/v2/pokemon')
			.then((response) => response.json())
			.then((pokemonsResponse) => {
				this.pokemons = pokemonsResponse.results;
				return this.pokemons;
			});
	}

	getPokemons() {
		return this.pokemons;
	}

	getPokemonDetail(idOrName) {
		return fetch(
			`https://pokeapi.co/api/v2/pokemon/${idOrName}/`
		).then((response) => response.json());
	}

	getPokemonAbility(abilityName) {
		return fetch(
			`https://pokeapi.co/api/v2/ability/${abilityName}`
		).then((response) => response.json());
	}
}

const store = new Store();

module.exports = store;
