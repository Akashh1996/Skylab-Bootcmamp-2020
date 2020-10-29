async function asidePokemon(pokeStore) {

    await pokeStore.loadPokemonsFromAPI();
    const pokemonList = await pokeStore.getPokemons();
    const pokemonBlock = document.getElementById('aside-pokemon-block');
    if (asidePokemon) {
        for (let index = 0; index < 9; index++) {
            let element = document.createElement('a');
            element.innerHTML = `
            <a class="topPokemon-block" href="detail.html?pokemon=${pokemonList[index].name}">
            <div class="topPokemon-block__position" id="aside-pokemon-${index}-pos"></div>
            <span class="topPokemon-block__name" id="aside__pokemon-${index}-name"></span></a>
            `;
            pokemonBlock.appendChild(element);
            document.getElementById(`aside-pokemon-${index}-pos`).innerHTML = index + 1;
            document.getElementById(`aside__pokemon-${index}-name`).innerHTML = pokemonList[index].name;
        }
    }
    return element.innerHTML;
}

asidePokemon(pokeStore);

module.exports = asidePokemon;
