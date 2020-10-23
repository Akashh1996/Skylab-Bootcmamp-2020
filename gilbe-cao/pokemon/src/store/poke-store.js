let _pokemons = [];
let _pokemon;

class PokeStore {
	getPokemons() {
		return _pokemons;
	}

	getPokemon() {
		return _pokemon;
	}

	setPokemon(poke) {
		_pokemon = poke;
	}

	getBaseExperience() {
		return _pokemon && _pokemon.base_experience;
	}

	getSpecie() {
		return _pokemon && _pokemon.species.name;
	}

	loadPokemonsFromAPIx() {
		let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
		return fetch(url)
			.then((response) => response.json())
			.then((pokemons) => {
				_pokemons = pokemons;
			});
	}

	async loadPokemonsFromAPI() {
		debugger;
		let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
		const response = await fetch(url);
		const pokemons = await response.json();
		_pokemons = pokemons;
	}

	loadPokemonsFromAPIById(pokemonId) {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
		return fetch(url)
			.then((response) => response.json())
			.then((pokemonDetailsObject) => {
				_pokemon = pokemonDetailsObject;
			});
	}
}

const pokeStore = new PokeStore();

module.exports = pokeStore;
