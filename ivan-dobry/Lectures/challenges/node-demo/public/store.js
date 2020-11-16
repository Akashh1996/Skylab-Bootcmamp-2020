/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
// eslint-disable-next-line no-underscore-dangle
let _heroes;

class Store {
  loadHeroes() {
    return fetch('/superHeroData.json')
      .then((response) => response.json())
      .then((value) => {
        _heroes = value.results;
        console.log(_heroes);
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
