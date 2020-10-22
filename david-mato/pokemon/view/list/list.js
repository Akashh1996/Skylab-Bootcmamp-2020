class ListComponent {
    constructor(pokemons) {
        this.pokemons = pokemons;
    }

    updateHtmlPokemonList(element) {
        element.innerHTML = "";
        this.pokemons.forEach(pokemon => {
            console.log(pokemon)
            element.innerHTML += `<a class="pokemon-btn" href="../detail/detail.html?${pokemon.id}">${pokemon.name}</a>` 
        })
    }
}