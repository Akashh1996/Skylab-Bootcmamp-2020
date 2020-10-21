class DashboardComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			const heroProfile = document.createElement('div');
			heroProfile.className = 'hero-profile';
			element.appendChild(heroProfile);
			const heroName = document.createElement('a');
			heroName.className = 'hero-name';
			heroName.setAttribute(
				'href',
				`../hero-detail/detail.html?heroId=${hero.id}`
			);
			heroName.textContent = `${hero.name}`;
			heroProfile.appendChild(heroName);
		});
	}
}

store.loadSuperHeroes().then(() => {
	const heroes = store.getTopHeroes();
	const dashbaordComponent = new DashboardComponent(heroes);
	if (heroes) {
		const element = document.querySelector('.top-heroes-profile');
		dashbaordComponent.updateHtmlHeroList(element);
	}
});

module.exports = DashboardComponent;
