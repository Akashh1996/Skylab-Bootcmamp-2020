function printPokemonDetail(pokemon) {
	const pokemonTitle = document.getElementById('pokemon-title');
	const pokemonId = document.getElementById('id-number-pokemon');
	const pokemonName = document.getElementById('name-pokemon');
	const pokemonAbility = document.getElementById('ability-list');
	pokemonTitle.innerHTML = `${pokemon.name}`;
	pokemonId.innerHTML = `${pokemon.id}`;
	pokemonName.innerHTML = `${pokemon.name}`;
	let image = document.createElement('img');
	document.body.appendChild(image);
	image.setAttribute('src', `${pokemon.sprites.front_shiny}`);
	debugger;
	for (i = 0; i < pokemon.abilities.length; i++) {
		let ability = document.createElement('li');
		pokemonAbility.appendChild(ability);
		let abilityAnc = document.createElement('a');
		abilityAnc.setAttribute(
			'href',
			`./ability/ability.html?abilityName=${pokemon.abilities[i].ability.name}`
		);
		ability.appendChild(abilityAnc);
		abilityAnc.innerHTML = pokemon.abilities[i].ability.name;
	}
}

function getPokemonName(location) {
	const params = new URLSearchParams(location.search.substring(1));
	const getName = params.get('pokemonName');
	return getName;
}

store.loadPokemonDetail(getPokemonName(window.location)).then(() => {
	printPokemonDetail(store.getPokemonDetail());
});

module.exports = printPokemonDetail;
