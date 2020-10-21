class DashboardComponent {
	constructor(pokemon) {
		this.pokemon = pokemon;
	}

	updateHtmlPokemonList(element) {
		element.innerHTML = '';
		this.heroes.forEach((pokemon) => {
			element.innerHTML =
				element.innerHTML +
				`
<a href="../detail/detail.html?pokemonId=${pokemon.id}" class="col-1-4">
<div class="module pokemon">
<h4>${pokemon.name}</h4>
</div>
</a>
`;
		});
	}
}

module.exports = DashboardComponent;
