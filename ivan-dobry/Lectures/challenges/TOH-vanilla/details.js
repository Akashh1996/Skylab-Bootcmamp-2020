class DetailComponent {
	constructor(hero) {
		this.hero = hero;
	}

	updateHtmlValue(element, property, value) {
		element[property] = value;
	}
}


const heroId = getHeroId(location);
const hero = store.getHeroById(heroId);
let detailComponent = new DetailComponent(hero);

if (hero) {
	let idElement = document.getElementById('detail-title');
	detailComponent.updateHtmlValue(
		idElement,
		'innerHTML',
		detailComponent.hero.name
	);
	idElement = document.getElementById('hero-id__value');
	detailComponent.updateHtmlValue(
		idElement,
		'innerHTML',
		detailComponent.hero.id
	);
	nameElement = document.getElementById('hero-name__input');
	detailComponent.updateHtmlValue(
		nameElement,
		'value',
		detailComponent.hero.name
	);
	let powerStat = Object.entries(detailComponent.hero.powerstats);
	const powerStats = document.getElementById('powerstats__value');
	function makePowerStats(array) {
		for (let i = 0; i < array.length; i++) {
			let cell = document.createElement('span');
			let cell2 = document.createElement('span');
			powerStats.appendChild(cell).className = 'powerstats__span';
			powerStats.appendChild(cell2).className = 'powerstats__span';
			cell.innerHTML = array[i][0] + ': ';
			cell2.innerHTML = array[i][1];
		}
	}
	makePowerStats(powerStat);
	const imageHero = document.getElementById('hero__image');
	function showImg(array) {
		let cell = document.createElement('img');
		imageHero.appendChild(cell).className = 'heroImg';
		cell.src = detailComponent.hero.images.lg;
	}
	showImg(powerStat);

	const ratingBars = document.getElementById('rating__power');
	function makeRatingBars(array) {
		for (let i = 0; i < array.length; i++) {
		let cell = document.createElement('div');
		ratingBars.appendChild(cell).className = 'rating__bar';
		cell.style.width = array[i][1] + '%';
		if (cell.style.width === '100%') {
			cell.style.borderRight = 'solid';
			cell.innerHTML = 'MAX';
			cell.style.textAlign = 'center'
		}
		}
	}
	makeRatingBars(powerStat);

}