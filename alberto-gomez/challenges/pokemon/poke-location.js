const store = require("./pokemon-store");

function getPokemonId(location) {
	const params = new URLSearchParams(location.search.substring(1));
	const getId = parseInt(params.get('pokemonId'));
	return getId;
}

store.loadPokemon().then(() => {
    getPokemonId()
}

module.exports = getPokemonId;
