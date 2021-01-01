const heroesListMenu = store.getHeroes();

function heroOnClick(heroes) {
	const heroNameChoice = document.getElementById('hero-name-choice');
	for (i = 0; i < heroes.length; i++) {
		heroNameChoice.innerHTML = heroes[i].name;
	}
}

heroOnClick(heroesListMenu);

/* const heroListItems = document.getElementsByClassName('hero-list__footer');

heroListItems.addEventListener('click', () => {}); */

module.exports = heroOnClick;
