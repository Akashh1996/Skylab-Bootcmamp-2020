class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}
	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
}

const heroId = getHeroId(location);
const hero = store.getHeroById(heroId);
let detailComponent = new DetailComponent(hero);
if (hero) {
	let idElement = document.querySelector('.detail-title');
	detailComponent.updateHtmlValue(
		idElement,
		'innerHTML',
		detailComponent.hero.name
	);

	idElement = document.querySelector('.hero-id__value');
	detailComponent.updateHtmlValue(
		idElement,
		'innerHTML',
		detailComponent.hero.id
	);

	nameElement = document.querySelector('.hero-name__input');
	detailComponent.updateHtmlValue(
		nameElement,
		'value',
		detailComponent.hero.name
	);
}

module.exports = DetailComponent;
