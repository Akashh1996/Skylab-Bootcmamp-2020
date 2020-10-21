let _heroes
class Store {
    debugger
    loadHeroes() {
        //debugger;
        return fetch('../../apil/superHeroData.json').then((response) => {
            return response.json()
        }).then((heroes) => {
            _heroes = heroes
            /*  return _heroes */
        })
        /* .then((x)=>{  en este bloque x vale _heroes y asi van concatenando if we return in upper blockx  

        }) */

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