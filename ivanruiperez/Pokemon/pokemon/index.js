class PokemonComponent {
	constructor(pokemon) {
		this.pokemon = pokemon;
	}

	updateHtmlPokemonList(element) {
		element.innerHTML = '';
		this.pokemon.results.forEach((poke) => {
			element.innerHTML =
				element.innerHTML +
				`
<li>
<a href="./../detail/detail.html?name=${poke.name}">
<span id="pokemon-name">${poke.name}</span>
</a>
</li>
`;
		});
	}
}

module.exports = PokemonComponent;
