let _pokemonList;
let _pokemonDetail;
let _pokemonAbilityName;

class Store {
	getPokemon() {
		return _pokemonList;
	}

	getPokemonDetail() {
		return _pokemonDetail;
	}

	getPokemonAbility() {
		return _pokemonAbilityName;
	}

	getPokemonById(pokemonId) {
		return this.getPokemon().find((pokemon) => pokemon.id === pokemonId);
	}

	async loadPokemon() {
		const response = await fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=20&offset=1'
		);
		const pokemon = await response.json();
		_pokemonList = pokemon;
	}

	async loadPokemonDetail(pokemonName) {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		const pokemon = await response.json();
		_pokemonDetail = pokemon;
	}

	async loadAbilityFromAbilityName(pokemonAbility) {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/abilitysamoixasmdsa/${pokemonAbility}`
			);
			const pokemonAbilityObject = await response.json();
			_pokemonAbilityName = pokemonAbilityObject;
		} catch (error) {
			console.log('There is an error: ', error);
			_pokemonAbilityName = null;
		}
	}
}

const store = new Store();

module.exports = store;
