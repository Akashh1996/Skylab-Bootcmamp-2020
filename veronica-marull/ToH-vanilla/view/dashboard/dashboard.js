class DashboardComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +`<a href="../detail/detail.html?heroId=${hero.id}" class="top-hero-btn">
			<div class="module hero"><h4>${hero.name}</h4></div></a>`;
		});
	}
}

module.exports = DashboardComponent;
