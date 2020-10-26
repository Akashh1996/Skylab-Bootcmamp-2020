class DashboardComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`<a class="top-heroes-buttons" href="../detail/detail.html?heroId=${hero.id}">${hero.name}</a>`;
		});
	}
}

module.exports = DashboardComponent;