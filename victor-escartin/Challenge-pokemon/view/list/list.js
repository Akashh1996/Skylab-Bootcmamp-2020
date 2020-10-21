class PokemonsComponent {
	constructor(pokemons) {
		this.pokemons = store.getPokemons();
	}

	updateHtmlPokemonList(element) {
		element.innerHTML = '';
		this.pokemons.results.forEach((pokemon) => {

			element.innerHTML =
				element.innerHTML +
				`
				<div id="p${pokemon.results}" class="list-item">
				<div id="p${pokemon.results}-number" class="box-position">1</div>
				<a
					id="p${pokemon.results}-name"
					class="name-position"
					href="${pokemon.url}"
					>${pokemon.name}</a
				>
			</div>
`;
		});
	}
}

module.exports = PokemonsComponent;