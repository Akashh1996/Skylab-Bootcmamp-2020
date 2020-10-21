function addItemsToList(heroes) {
	const listOfHeroes = document.getElementById('hero-list');
	for (i = 0; i < heroes.length; i++) {
		let heroLi = document.createElement('li');
		listOfHeroes.appendChild(heroLi);
		heroLi.setAttribute('class', 'hero-complete-list');

		let heroAnchor = document.createElement('a');
		heroLi.appendChild(heroAnchor);
		heroAnchor.setAttribute(
			'href',
			`/view/detail/detail.html?heroId=${heroes[i].id}`
		);
		let heroSpanId = document.createElement('span');
		let heroSpanName = document.createElement('span');
		heroAnchor.appendChild(heroSpanId);
		heroAnchor.appendChild(heroSpanName);
		heroSpanId.innerHTML = `${heroes[i].id}`;
		heroSpanName.innerHTML = `${heroes[i].name}`;
		heroSpanId.setAttribute('class', 'id-span');
		heroSpanName.setAttribute('class', 'name-span');
	}
}

module.exports = addItemsToList;
