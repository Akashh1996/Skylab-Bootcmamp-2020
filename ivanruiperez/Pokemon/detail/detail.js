class DetailPokemon {
	constructor(pokemon) {
		this.pokemon = pokemon;
	}

	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
}

module.exports = DetailPokemon;
