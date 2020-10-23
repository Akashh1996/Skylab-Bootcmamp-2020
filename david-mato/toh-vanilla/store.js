debugger;

let _heroes = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

class Store {
    getHeroes() {
        return _heroes;
     } 
 
    getHeroById(heroId) {
        return this.getHeroes().find(hero => hero.id === heroId);
    }
 
    getTopHeroes() {
        return this.getHeroes().slice(1, 5);
    }
 }
 
 const store = new Store();
 
 module.exports = store;