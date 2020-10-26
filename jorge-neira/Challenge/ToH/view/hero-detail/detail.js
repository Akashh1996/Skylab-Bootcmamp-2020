class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}
	updateHtmlValue(element, property, value) {
		element[property] = value;
	}

	getProfileImage() {
		const imgProfileElement = document.getElementById(
			'hero-profile-img__block'
		);
		const createImage = document.createElement('img');
		createImage.setAttribute('src', `${this.hero.images.md}`);
		createImage.style.width = '100%';
		createImage.style.borderRadius = '10px';
		createImage.style.boxShadow = '0px 0px 33px -1px rgba(54, 10, 54, 0.56)';
		createImage.style.margin = '10px';
		createImage.style.cursor = 'pointer';
		imgProfileElement.appendChild(createImage);
	}

	getStats(selectedStat) {
		const heroPropArr = [, 'powerstats', 'appearance', 'biography', 'work'];
		const heroPowerstats = document.querySelector('.hero-stats');
		const curStats = this.hero[heroPropArr[selectedStat]];
		heroPowerstats.innerHTML = '';
		for (const property in curStats) {
			if (curStats.hasOwnProperty(property)) {
				const createDiv = document.createElement('div');
				const createSpan = document.createElement('span');
				createSpan.style.fontSize = '20px';
				createSpan.textContent = `${property.toUpperCase()}: ${
					curStats[property]
				}`;
				createDiv.appendChild(createSpan);
				heroPowerstats.appendChild(createDiv);
			}
		}
	}
}

store.loadSuperHeroes().then(() => {
	const heroId = getHeroId(location);
	const hero = store.getHeroById(heroId);
	let detailComponent = new DetailComponent(hero);
	detailComponent.getProfileImage();

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

	const selectedHeroStat = document.getElementById('hero-additional-info');
	selectedHeroStat.addEventListener('change', function (event) {
		detailComponent.getStats(event.target.selectedIndex);
	});
});

module.exports = DetailComponent;
