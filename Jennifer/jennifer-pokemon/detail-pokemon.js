let namePokemon = window.location.search.replace('?id=', '');

function printDetailsPokemon(store) {
	store.getPokemonDetail(namePokemon).then(() => {
		console.log(_pokemonDetail);
		document.getElementById('pokeName').innerHTML += namePokemon.toUpperCase();
		document.getElementById(
			'div-base-experience'
		).innerHTML += `<span class="properties">${_pokemonDetail.base_experience}</span>`;

		document.getElementById(
			'div-order'
		).innerHTML += `<span class="properties">${_pokemonDetail.order}</span>`;

		document.getElementById(
			'div-weight-height'
		).innerHTML += `<span class="properties">Widht:${_pokemonDetail.weight}<br>Height:${_pokemonDetail.weight}</span>`;

		for (let i = 0; i < _pokemonDetail.types.length; i++) {
			document.getElementById(
				'div-types'
			).innerHTML += `<span class="properties">slot:${_pokemonDetail.types[i].slot}</span>`;
		}

		for (let i = 0; i < _pokemonDetail.forms.length; i++) {
			document.getElementById(
				'div-forms'
			).innerHTML += `<span class="properties">${_pokemonDetail.forms[i].name}</span>`;
		}

		for (let i = 0; i < _pokemonDetail.abilities.length; i++) {
			document.getElementById(
				'div-abilities'
			).innerHTML += `<span class="properties">${_pokemonDetail.abilities[i].ability.name}</span>`;
		}
	});
}
