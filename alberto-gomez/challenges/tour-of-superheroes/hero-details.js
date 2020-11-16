const heroesList = store.getHeroes();

function heroesInDetail(heroes) {
	let heroName = document.getElementById('hero-name');
	let heroId = document.getElementById('id-number');
	let heroNameInput = document.getElementById('hero-name-input');
	heroName.textContent = `${heroes[0].name}`;
	heroId.textContent = `${heroes[0].id}`;
	heroNameInput.setAttribute('value', `${heroes[0].name}`);
}

heroesInDetail(heroesList);
