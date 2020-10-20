class DetailComponent {
    constructor(store, heroId) {
        this.hero = store.find.getHeroById(heroId);
    }
    updateHtmlValue(element, property, value) {
        element[property] = value;
    }
}


module.exports = detailComponent;