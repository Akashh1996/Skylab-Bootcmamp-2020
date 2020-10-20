class DetailComponent {
	constructor(store) {
		this.hero = store.getHeroByID;
	}

	updateHTMLValues(element, property, value) {
		element[property] = value;
	}
}

let detailComponent = new DetailComponent(store);

const idElement = document.querySelector('.hero-id__value');
detailComponent.updateHTMLValues(
	idElement,
	'innerText',
	detailComponent.hero.id
);
const nameElement = document.querySelector('.hero-name__value');
detailComponent.updateHTMLValues(
	nameElement,
	'value',
	detailComponent.hero.name
);

module.exports = detailComponent;
