class ListComponent {
    constructor(heroes) {
        this.heroes = heroes
    }

    updateHtmlHeroList(element) {
		element.innerHTML = '';
		this.heroes.forEach((hero) => {
			element.innerHTML =
				element.innerHTML +
				`<a class="list-heroes__buttons" href="../detail/detail.html?heroId=${hero.id}"><span class="list-heroes__buttons--id">${hero.id}</span><span class="list-heroes__buttons--name">${hero.name}</span></a>`;
		});
	}
}

module.exports = ListComponent;