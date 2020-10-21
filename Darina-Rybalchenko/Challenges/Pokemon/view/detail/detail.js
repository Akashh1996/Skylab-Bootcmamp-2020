store.loadPokemons().then(() => {
    function getPokemonId(location) {
        let search = location.search;
        search = search.slice(1, search.length);
        const andSplitted = search.split('&');
        const query = andSplitted.find((value) => value.includes('name'));
        const result = query && query.split('=');
        return result && +result[1];
    }

    const pokemonName = getPokemonId(location)
    const pokemon = store.getPokemonById(pokemonName)
    console.log(pokemon)

})


store.loadPokemons().then(() => {
    _pokemons.forEach((pokemon) => {
        pokemonURL = pokemon.url;
    })
})
