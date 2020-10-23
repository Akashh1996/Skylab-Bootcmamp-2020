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

	loadPokemon() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=1')
			.then((response) => {
				return response.json();
			})
			.then((pokemon) => {
				_pokemonList = pokemon;
			});
	}

	loadPokemonDetail(pokemonName) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.then((response) => {
				return response.json();
			})
			.then((pokemon) => {
				_pokemonDetail = pokemon;
			});
	}

	loadAbilityFromAbilityName(pokemonAbility) {
		return fetch(`https://pokeapi.co/api/v2/ability/${pokemonAbility}`)
			.then((response) => response.json())
			.then((pokemonAbilityObject) => {
				_pokemonAbilityName = pokemonAbilityObject;
			});
	}
}

const store = new Store();

module.exports = store;
