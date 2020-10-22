class ListComponent {
    constructor(pokemons) {
        this.pokemons = pokemons;
    }

    updateHtmlPokemonList(element) {
        element.innerHTML = "";
        this.pokemons.forEach(pokemon => {
            element.innerHTML += `<a class="pokemon-btn" href="../detail/detail.html?pokeId=${pokemon.id}">${pokemon.name}</a>` 
        })
    }
}