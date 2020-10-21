class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}

	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
	/*
	get(property1, propertySub1) {
		let element = document.getElementById(propertySub1);
		this.updateHtmlValue(
			element,
			'innerHTML',
			detailComponent.hero[property1][propertySub1]
	);
	}*/

	updateHTMLValueWithHeroProperty(property) {
		for (let subProperty in this.hero[property]) {
			let element = document.getElementById(subProperty);
			this.updateHtmlValue(
				element,
				'innerHTML',
				detailComponent.hero[property][subProperty]
			);
		}
	}

}





module.exports = DetailComponent, get;
