class DetailComponent {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    loadPhoto(element, property, value) {
        element[property] = `<img src="${value}" />`
    }

    updateHtmlValue(element, property, value) {
        element[property] = value;
    }

    updateHtmlValueToButton(element, property, value) {
        console.log(value)
        console.log(this.pokemon)
        element[property] = `<a href='../detail/ability-detail.html?abilityName=${value}'>${value}</a>`;
    }
}