let _superHeroes;

class Store {
	getHeroes() {
		return _superHeroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(1, 5);
	}

	loadHeroes() {
		return fetch('../../api/superHeroData.json')
			.then((response) => {
				return response.json();
			})
			.then((heroes) => {
				_superHeroes = heroes;
			});
	}

	logData(data) {
		console.log(data);
	}
}

const store = new Store();

module.exports = store;
