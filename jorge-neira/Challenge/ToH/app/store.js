let _heroes;

class Store {
	loadSuperHeroes() {
		return fetch('../../api/superHeroData.json').then((response) =>
			response.json().then((value) => (_heroes = value))
		);
	}
	getHeroes() {
		return _heroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 4);
	}
}

const store = new Store();

module.exports = store;
