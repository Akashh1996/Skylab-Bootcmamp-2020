function getPokemonName(location) {
    const params = new URLSearchParams(location.search.substring(1));
    const getName = params.get('pokemonName');
    return getName;

}