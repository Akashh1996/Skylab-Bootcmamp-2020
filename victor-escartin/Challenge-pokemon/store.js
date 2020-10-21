let _pokemons;



class Store {

	loadPokemonsList() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').then((response)=>
		
		{return response.json();
		})
		.then((pokemons)=>{
			_pokemons=pokemons;
		})
	}

	// loadPokemonsItem() {
	// 	return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').then((response)=>
	// 	{return response.json();
	// 	})
	// 	.then((pokemons)=>{
	// 		pokemons=pokemons;
	// 	})
	// }


	getPokemons() {
		return _pokemons;
	}

	getPokemonById(pokemonId) {
		return this.getPokemon().find((poke) => poke.id === pokemonId);
	}

	getTopPokemons() {
		return this.getPokemons().slice(1, 20);
	}
}

const store = new Store();

module.exports = store;

