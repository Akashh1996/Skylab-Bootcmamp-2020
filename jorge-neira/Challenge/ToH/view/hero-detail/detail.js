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
		console.log(hero.images.md);
		const imgProfileElement = document.getElementById('hero-profile__img');
		imgProfileElement.style.backgroundImage = `url(${hero.images.lg})`;
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
detailComponent.getProfileImage();

module.exports = DetailComponent;
