class HeroListComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}
	generateList(element) {
		const createUlList = document.createElement('ul');
		createUlList.className = 'ul-heroes'
		element.appendChild(createUlList);
		this.heroes.forEach((hero) => {
			const listItem = document.createElement('li');
			listItem.className = 'list-item';
			createUlList.appendChild(listItem);
			const idSpanItem = document.createElement('span');
			idSpanItem.className = 'hero-id';
			idSpanItem.textContent = `${hero.id}`;
			const nameSpanItem = document.createElement('span');
			nameSpanItem.className = 'hero-name';
			const anchorItem = document.createElement('a');
			anchorItem.className = 'hero-link'
			anchorItem.setAttribute(
				'href',
				`../hero-detail/detail.html?heroId=${hero.id}`
			);
			anchorItem.textContent = ` ${hero.name}`;
			nameSpanItem.appendChild(anchorItem);
			listItem.appendChild(idSpanItem);
			listItem.appendChild(nameSpanItem);
		});
	}
}
