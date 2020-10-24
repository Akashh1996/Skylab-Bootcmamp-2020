class PokemonDetailComponent {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }
    
    updateHtmlInformation(element, property, value) {
        element[property] = value;
    }
}