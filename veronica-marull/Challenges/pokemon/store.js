class Store {
	pokemons = null;
	/*
	loadPokemons() {
		return fetch('https://pokeapi.co/api/v2/pokemon')
			.then((response) => response.json())
			.then((pokemonsResponse) => {
				this.pokemons = pokemonsResponse.results;
				return this.pokemons;
			});
	}
	*/
	async loadPokemons() {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		const pokemonsResponse = await response.json();

		return pokemonsResponse.results;
	}

	getPokemons() {
		return this.pokemons;
	}

	async getPokemonDetail(idOrName) {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${idOrName}/`
			);
			const detail = await response.json();
			return detail;
		} catch (error) {
			console.log('error');
		}
	}

	getPokemonAbility(abilityName) {
		return fetch(
			`https://pokeapi.co/api/v2/ability/${abilityName}`
		).then((response) => response.json());
	}
}

const store = new Store();

module.exports = store;
