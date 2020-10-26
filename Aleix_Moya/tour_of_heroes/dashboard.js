class DashboardComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
        let i = 0;
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`
<a href="detailhero.html#${i}" class="col-1-4">
<div class="module hero">
<h4>${hero.name}</h4>
</div>
</a>
`;
i++;});
	}
}


module.exports = DashboardComponent;