function printPokemon(pokemon) {
	const listOfPokemon = document.getElementById('pokemon-items');
	for (let i = 0; i < pokemon.results.length; i++) {
		let pokemonLi = document.createElement('li');
		listOfPokemon.appendChild(pokemonLi);
		pokemonLi.setAttribute('class', 'pokemon-style-box');
		pokemonLi.innerHTML = `<a href=./detail/poke-detail.html?pokemonName=${pokemon.results[i].name}>${pokemon.results[i].name}</a>`;
	}
}

store.loadPokemon().then(() => {
	printPokemon(store.getPokemon());
});

module.exports = printPokemon;
