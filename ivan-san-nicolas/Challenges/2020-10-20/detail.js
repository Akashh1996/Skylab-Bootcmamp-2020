class DetailComponent {
    constructor() {
        this.hero = {
            name: 'Narco',
            id: 12
        };
    }

    updateHTMLElementValue() {

    }
}

let detailComponent = new DetailComponent();

let heroeElement = document.getElementById('heroe-id')

detailComponent.updateHTMLElementValue(heroeElement, 12)

module.exports = detailComponent;