let _heroes;

class Store {
	loadHeroes() {
		return fetch('../../api/heroes.json')
			.then((response) => response.json())
			.then((heroes) => {
				_heroes = heroes;
			});
	}

	getHeroes() {
		return _heroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(1, 5);
	}
}

const store = new Store();

module.exports = store;
