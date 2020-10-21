class PokedexComponent {
    constructor(pokedex){
        this.pokedex = pokedex;
    }

    updateHtmlPokemonList(element) {
		element.innerHTML = '';
		this.pokedex.forEach((pokemon) => {
			element.innerHTML =
				element.innerHTML +
				`
<li>
<span id="hero-name">${pokemon.name}</span>
</a>
</li>
`;
		});
	}
}