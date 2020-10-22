class AbilityComponent {
    constructor(ability) {
        this.ability = ability;
    }

    updateHtmlElement(element, value) {
        element.innerHTML = value;
    }
}

module.exports = AbilityComponent;