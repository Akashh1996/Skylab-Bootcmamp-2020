// const store = require('../store');

function getAbilityName() {
	let url = new URL(location.href);
	return url.searchParams.get('abilityName');
}

function drawAbility(abilityName) {
	store.getPokemonAbility(abilityName).then((ability) => {
		let abilities = document.getElementById('abilities');
		abilities.innerHTML = '';

		for (property of ['id', 'name', 'is_main_series']) {
			abilities.innerHTML += `<span><b>${property}</b>: ${ability[property]}</span>`;
		}
	});
}

drawAbility(getAbilityName());
