function getPokemonUrlName(location) {
	const params = new URLSearchParams(location.search.substring(1));
	const getPokeName = params.get('pokemonName');
	return getPokeName;
}

function getOffsetLimit(offsetLimit) {
	const url = new URL(offsetLimit);
	const params = new URLSearchParams(url.search);
	const getOffset = parseInt(params.get('offset'));
	return getOffset;
}

module.exports = getPokemonUrlName;
