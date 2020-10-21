class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}

	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
}

module.exports = DetailComponent;
