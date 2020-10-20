class DetailComponent {
    constructor(store, heroId) {
        this.hero = store.getHeroById(heroId);
    }

    updateHtmlValue(element, property, value) {
        element[property] = value;
    }
}

module.exports = DetailComponent;