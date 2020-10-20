class DetailComponent {
	constructor(store, heroId) {
		this.hero = store.getHeroById(heroId);
	}

	updateHtmlElementValue(element, property, value) {
		//element es el objeto que representa al elemento de html
		element[property] = value;
	}
}

module.exports = detailComponent;
