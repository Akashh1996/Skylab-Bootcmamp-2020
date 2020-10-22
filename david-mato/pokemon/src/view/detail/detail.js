class DetailComponent {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    updateHtmlValue(element, property, value) {
        element[property] = value;
    }

    updateHtmlValueToButton(element, property, value) {
        console.log(value)
        console.log(this.pokemon)
        // element[property] = `<a href='../detail/ability-detail.html?pokeId=${this.pokemon.id}&abilityName=${value}'>${value}</a>`;
        element[property] = `<a href='../detail/ability-detail.html?abilityName=${value}'>${value}</a>`;
    }
}