class PokemonList {
	constructor(pokemons) {
		this.pokemons = pokemons;
	}
	createPokemonList() {
		const pokemonTopList = document.querySelector('.pokemonList__block');
		this.pokemons.forEach((name) => {
			const createLi = document.createElement('li');
      createLi.textContent = `${name.name}`;
      
		});
		console.log(_pokemons);
	}
}

store.loadPokemonList().then(() => {
	const pokemons = store.getPokemonList();
	const pokemonList = new PokemonList(pokemons);
	pokemonList.createPokemonList();
});
