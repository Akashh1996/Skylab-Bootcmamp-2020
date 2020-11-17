class DetailComponent {
	constructor() {
		this.hero = { name: 'Narco', id: 12 };
	}

	updateHtmlId() {}
}

let detailComponent = new DetailComponent();
detailComponent.updateHtml();

module.exports = detailComponent;
