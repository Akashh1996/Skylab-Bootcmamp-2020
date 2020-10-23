(async () => {
    await store.loadPokemons()

    if (store.getPokemons()) {

        _pokemons.forEach((pokemon) => {
            const pokemonListContainer = document.getElementById('pokemons-list__container')
            const pokemonList = document.createElement('li')
            const link = document.createElement('a')
            link.className = 'pokemon-link'
            link.href = `../detail/detail.html?=${pokemon.name}`
            link.textContent = pokemon.name
            pokemonList.appendChild(link)
            pokemonListContainer.appendChild(pokemonList)
        })

    } else {
        let errorImage = document.getElementById('error');
        errorImage.style.display = 'inherit';

    }

})()


