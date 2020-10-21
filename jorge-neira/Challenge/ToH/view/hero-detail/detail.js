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
	addDetailHeroInfo() {
		// const modalBlock = document.querySelector('.modal-container');
		const heroPowerstats = document.querySelector('.hero-powerstats');
		// const heroAppearance = document.querySelector('.hero-appearance');
		// const heroBiography = document.querySelector('.hero-biography');
		// const heroWork = document.querySelector('.hero-work');
		// const heroProperties = ['powerstats', 'appearance', 'biography', 'work'];
		const powerStats = hero.powerstats;
		for (const property in powerStats) {
			if (powerStats.hasOwnProperty(property)) {
				const createDiv = document.createElement('div');
				const createSpan = document.createElement('span');
				createSpan.style.fontSize = '20px';
				createSpan.textContent = `${property.toUpperCase()}: ${
					powerStats[property]
				}`;
				createDiv.appendChild(createSpan);
				heroPowerstats.appendChild(createDiv);
			}
		}
	}
}

module.exports = DetailComponent;
