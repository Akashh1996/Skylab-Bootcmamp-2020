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
<a href="../details/details.html?pokemonName=${pokemon.name}">
<span id="pokemons">${pokemon.name}</span>
</a>
</li>
`;
		});
	}
}

module.exports = PokedexComponent;

