class HeroesComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		let x=1;
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`
				<div id="p${hero.id}" class="list-item">
				<div id="p${hero.id}-number" class="box-position">${x++}</div>
				<a
					id="p${hero.id}-name"
					class="name-position"
					href="../details/details.html?heroId=${hero.id}"
					>${hero.name}</a
				>
			</div>
`;
		});
	}
}

module.exports = HeroesComponent;