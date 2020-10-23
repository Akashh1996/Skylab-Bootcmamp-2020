//const store = require('../store');

function drawPokemon(pokeName) {
	store.getPokemonDetail(pokeName).then((pokemon) => {
		let details = document.getElementById('details');
		details.innerHTML = '';

		for (property of ['id', 'name', 'weight']) {
			details.innerHTML += `<span><b>${property}</b>: ${pokemon[property]}</span>`;
		}
		details.innerHTML += `<span><img src="${pokemon.sprites.front_default}"/></span>`;

		// Obenemos las habilidades del pokemon
		const pokemonAbilities = pokemon.abilities;
		const b = document.createElement('b');
		b.innerHTML = 'Abilities: ';
		const p = document.createElement('p');
		p.appendChild(b);
		details.appendChild(p);

		// Por cada habilidad, creame un anchor con el nombre de la habilidad
		pokemonAbilities.forEach((ability) => {
			const anchorElement = document.createElement('a');
			anchorElement.innerHTML = ability.ability.name;
			anchorElement.href = `./abilityDetail.html?abilityName=${ability.ability.name}`;
			details.appendChild(anchorElement);
		});
	});
}

function getPokemonName() {
	let url = new URL(location.href);
	return url.searchParams.get('pokeName');
}

drawPokemon(getPokemonName());

function log(p1, p2) {
	console.log(texto);
}
