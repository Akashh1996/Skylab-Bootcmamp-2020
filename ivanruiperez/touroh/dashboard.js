class DashboardComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`
<a href="./detail.html?heroId=${hero.id}" class="col-1-4">
<div class="top__heroe__link">
<h4>${hero.name}</h4>
</div>
</a>
`;
		});
	}
}

module.exports = DashboardComponent;
