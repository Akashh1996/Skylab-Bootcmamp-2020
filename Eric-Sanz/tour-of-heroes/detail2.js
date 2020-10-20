class DetailComponent {
    constructor() {
        this.hero = { name: 'Narco', id: 12};
    }

    updateHtmlId(element, value) {
        element.innerHtml = value;

    }

    updateHtmlName(element, value) {
        element.innerHtml = value;
    }
};

let detailComponent = new DetailComponent();

module.exports = detailComponent;

// -------------------------------------------------------------------------- otra manera de hacerlo.

class DetailComponent {
    constructor() {
        this.hero = { name: 'Narco', id: 12};
    };

    updateHtmlProperty(element, property, value) {
        element[property] = value;
    };
};

let detailComponent = new DetailComponent();

// estos 4 irian al html.
const idElement = document.getElementById('id-hero');
const nameElement = document.getElementById('name-hero');
detailComponent.updateHtmlProperty(idElement,'innerHTML', detailComponent.hero.id);
detailComponent.updateHtmlProperty(idElement, 'innerHTML', detailComponent.hero.name);

module.exports = detailComponent;

// --------------------------------------------------------------------------------- 

class DetailComponent {
    constructor(store, heroId) {
        this.hero = store.getHeroById(heroId)
    }

    updateHtmlId(element, value) {
        element.innerHtml = value;

    }

    updateHtmlName(element, value) {
        element.innerHtml = value;
    }
};

let detailComponent = new DetailComponent(store, location);

module.exports = detailComponent;



class DetailComponent {

    constructor(hero) {
        this.hero = hero;
    }

    updateHtmlId(element, value) {
        element.innerHtml = value;

    }

    updateHtmlName(element, value) {
        element.innerHtml = value;
    }
};

function getHeroId(location) {
    let search = location.search;
    search = search.slice(1, search.length);
    // const searchAnd = search.split('&');  // caso en el que hubiera mas de una search en el location.
    // search = searchAnd[0];
    // otra forma de lo de arriba: search = searchAnd.find(value => value.includes('heroId'))
    const searchSplit = search.split('=');
    return searchSplit[1]*1;

    //borrar signo interrogacion de location.
    //split por =.
    //retornar posicion[1].
}
const heroId = getHeroId(location);
const hero = store.getHeroById(heroId);