function heroesInDetail() {
	let locationId = getIdFromUrlParams(location.search);
	let hero = store.getHeroById(locationId);
	let detailTitle = document.getElementById('hero-name');
	let idElement = document.getElementById('id-number');
	let nameElement = document.getElementById('hero-name-input');

	detailTitle.innerHTML = hero.name;
	idElement.innerHTML = hero.id;
	nameElement.setAttribute('value', hero.name);
}

store.loadHeroes().then(() => {
	heroesInDetail();
});

module.exports = heroesInDetail;
