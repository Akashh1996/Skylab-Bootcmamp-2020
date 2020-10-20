class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}
	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
	getPowerStats() {
		console.log(hero.powerstats);
	}
	getProfileImage() {
		const imgProfileElement = document.getElementById(
			'hero-profile-img__block'
		);
		const createImage = document.createElement('img');
		createImage.setAttribute('src', `${hero.images.md}`);
		createImage.style.width = '100%';
		createImage.style.borderRadius = '10px';
		createImage.style.boxShadow = '0px 0px 33px -1px rgba(54, 10, 54, 0.56)';
		createImage.style.margin = '10px';
		createImage.style.cursor = 'pointer';
		imgProfileElement.appendChild(createImage);
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
	idElement = document.querySelector('.hero-slug__value');
	detailComponent.updateHtmlValue(
		idElement,
		'innerHTML',
		detailComponent.hero.slug
	);

	nameElement = document.querySelector('.hero-name__input');
	detailComponent.updateHtmlValue(
		nameElement,
		'value',
		detailComponent.hero.name
	);
}
detailComponent.getProfileImage();

module.exports = DetailComponent;
