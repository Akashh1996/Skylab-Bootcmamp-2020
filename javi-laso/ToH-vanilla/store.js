class Store {

    constructor(herolist) {
        this.heroes = herolist;
    }

    getHeroes() {
        return this.heroes;
    }

    getHeroById(heroId) {
        for (let i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i]['id']*1 === heroId*1) {
                return this.heroes[i];
            }
        }
    }

    getTopHeroes() {
        return this.getHeroes().slice(0, 4);
    }

    createDashboardElement(parentElement, heroList, index){
        let listElement = document.createElement('li');
        parentElement.appendChild(listElement);
        let heroAnchor = document.createElement('a');
        listElement.appendChild(heroAnchor);
        heroAnchor.setAttribute('href', `../Details/details.html?id=${heroList[index].id}`)
        heroAnchor.setAttribute('id', `${heroList[index].slug}`);
        heroAnchor.innerHTML = `${heroList[index].name}`;
    }

    updateHTMLHeroesDashboard(container) {
        let heroList = this.getTopHeroes();
        for (let index = 0; index < heroList.length; index++) {
            this.createDashboardElement(container, heroList, index);
        }
    }

    createListElement(parentElement, heroList, index) {
            let listElement = document.createElement('li');
            parentElement.appendChild(listElement);
            let heroAnchor = document.createElement('a');
            listElement.appendChild(heroAnchor);
            heroAnchor.setAttribute('id', `${heroList[index].slug}`);
            heroAnchor.setAttribute('class', 'hero-list-element');
            heroAnchor.setAttribute('href', `../Details/details.html?id=${heroList[index].id}`)
            let anchorId = document.createElement('div');
            let anchorName = document.createElement('div');
            heroAnchor.appendChild(anchorId);
            heroAnchor.appendChild(anchorName);
            anchorId.setAttribute('class', 'a-id');
            anchorName.setAttribute('class', 'a-name');
            anchorId.innerHTML = `${heroList[index].id}`;
            anchorName.innerHTML = `${heroList[index].name}`;
    }

    updateHTMLHeroesList(ListContainer) {
        let heroList = this.getHeroes();

        for (let index = 0; index < heroList.length; index++) {
            this.createListElement(ListContainer, heroList, index);
        }
    }

    getIdFromLocation(location) {
        return location.search.split('=')[1];
    }

    getDashOffSetfromPercent(circle, percent) {
        let radius = circle.getAttribute('r');
        let circumference = Math.PI * radius * 2;
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
        let dashOffSet = circumference - percent / 100 * circumference;
        return dashOffSet;
    }

    setstrokeDashoffsetInCircle(circle, percent) {
        circle.style.strokeDashoffset = this.getDashOffSetfromPercent(circle, percent);
    }

    updateValueHtml(element, property, value) {
        element[property] = value;
    }
}

module.exports = Store;