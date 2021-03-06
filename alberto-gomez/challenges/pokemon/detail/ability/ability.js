function abilityInfo(ability) {
	if (ability === null) {
		document.body.innerHTML =
			'<img src="https://i.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.webp">';
	} else {
		const abilityTitle = document.getElementById('ability-title');
		const abilityDescription = document.getElementById('ability-description');
		abilityTitle.innerHTML = `${ability.name}`;
		if (ability.effect_entries[0].language.name === 'de') {
			abilityDescription.innerHTML = `${ability.effect_entries[1].short_effect}`;
		} else {
			abilityDescription.innerHTML = `${ability.effect_entries[0].short_effect}`;
		}
	}
}

function getPokemonAbility(location) {
	const params = new URLSearchParams(location.search.substring(1));
	const getAbility = params.get('abilityName');
	return getAbility;
}

/* store
	.loadAbilityFromAbilityName(getPokemonAbility(window.location))
	.then(() => {
		abilityInfo(store.getPokemonAbility());
	}); */

(async () => {
	await store.loadAbilityFromAbilityName(getPokemonAbility(window.location));
	abilityInfo(store.getPokemonAbility());
})();

module.exports = abilityInfo;
