let pokemon;
class Store {
    
	loadPokemon(){
        
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response => response.json())
        .then(data => console.log(data));
        
            
        
	}
	getPokemon() {
		return _Pokemon;
	}

	getHeroById(pokemonId) {
		return this.getPokemon().find((pokemon) => pokemon.id === pokemonId);
	}

	getTopPokemon() {
		return this.getPokemon().slice(0, 6);
	}
}

const store = new Store();
store.loadPokemon();

module.exports = store;
