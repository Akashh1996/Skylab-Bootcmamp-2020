const heroesList = store.getHeroes();

function heroesInDetail(heroes) {
	const heroNameTitle = document.getElementById('hero-name');
	const heroIdTitle = document.getElementById('id-number');
	const heroNameValue = document.getElementById('hero-name-input');
	for (i = 0; i < heroes.length; i++) {
		heroNameTitle.innerHTML = `${heroes[i].name}`;
		heroIdTitle.innerHTML = `${heroes[i].id}`;
		heroNameValue.setAttribute('value', `${heroes[i].name}`);
	}
}

heroesInDetail(heroesList);
