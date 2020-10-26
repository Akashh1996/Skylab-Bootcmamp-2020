let _heroes;

class Store {
	
	loadHeroes() {

		return fetch('api/superHeroData.json')
		.then ((response) => {
			return response.json();
		})
		.then((value) => {
			_heroes = value;
		});

	}

    getHeroes () {
        return _heroes;
    }

    getHeroById(heroId) {
        return this.getHeroes().find((hero) => hero.id === heroId);
    }

    getTopHeroes () {
        return this.getHeroes().slice(1, 5);
    }
}

const store = new Store();

module.exports = store;