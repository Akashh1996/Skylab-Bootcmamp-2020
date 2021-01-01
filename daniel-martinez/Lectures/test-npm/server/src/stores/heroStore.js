let heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

class Hero {
  static getHeroes() {
    return heroes;
  }

  static getHeroById(heroId) {
    return heroes.find((hero) => hero.id === heroId);
  }

  static setHero(newHero) {
    heroes = heroes.map((hero) => {
      if (hero.id === newHero.id) {
        return newHero;
      }
      return hero;
    });
  }

  static addHero(newHero) {
    heroes = [...heroes, newHero];
  }

  static deleteHero(heroId) {
    heroes = heroes.filter((hero) => hero.id !== heroId);
  }
}

module.exports = Hero;
