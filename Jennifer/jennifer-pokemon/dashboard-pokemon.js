function printListPokemons(store) {
	store.loadPokemons().then(() => {
		for (let i = 0; i < listPokemon.results.length; i++) {
			namePokemon = listPokemon.results[i].name;
			idPokemon = listPokemon.results[i].url.split('pokemon/');
			idPokemon = idPokemon[1];
			document.getElementBy(
				'list-pokemon'
			).innerHTML += `<span class="namePokemon">ID ${idPokemon}<a href="detail-pokemon.html?id=${namePokemon}">${namePokemon}</a></span>`;
		}
	});
}

//module.exports = printListPokemons;
