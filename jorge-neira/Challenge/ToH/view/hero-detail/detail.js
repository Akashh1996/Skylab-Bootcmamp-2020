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
	getStats(selectedStat) {
		const heroPowerstats = document.querySelector('.hero-stats');
		const titleStat = document.querySelector('stat-title');
		const curStats = hero[selectedStat];
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

module.exports = DetailComponent;
