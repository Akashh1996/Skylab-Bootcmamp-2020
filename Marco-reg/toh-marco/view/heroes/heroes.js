class HeroesComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`
<li>
<a href="../detail/detail.html?heroId=${hero.id}">
<span class="badge" id="hero-id">${hero.id}</span>
<span id="hero-name">${hero.name}</span>
</a>
<button class="delete" title="delete hero">x</button>
</li>
`;
		});
	}
}

module.exports = HeroesComponent;
