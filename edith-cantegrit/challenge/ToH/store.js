let _heroes = superHeroes;

class Store {
	getHeroes() {
		return _heroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 5);
	}
}

const store = new Store();

module.exports = store;
