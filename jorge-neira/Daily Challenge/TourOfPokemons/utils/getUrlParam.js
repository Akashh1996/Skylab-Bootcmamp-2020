function getPokemonUrlName(location) {
	debugger;
	const params = new URLSearchParams(location.search.substring(1));
	const getPokeName = params.get('pokemonName');
	return getPokeName;
}

module.exports = getPokemonUrlName;
