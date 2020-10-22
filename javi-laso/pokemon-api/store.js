let pokemonList = [];
let pokemon;
let _pokemonAbility;

class Store {

    getPokemonList(){
        return pokemonList;
    }

    loadPokedex(number = 150, startFrom = 0) {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${startFrom}&limit=${number}`;
        const promise = fetch(url).then(response => {
            return response.json();
        }).then(value => {
            pokemonList = value;
            return value;
        });
        return promise;
    }

    getPokemon(){
        return pokemon;
    }

    loadPokemonByName(pokemonName) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const promise = fetch(url).then(response => {
            return response.json();
        }).then(value => {
            pokemon = value;
            return value;
        });
        return promise;
    }

    createListElement(parentElement, pokemonList, index) {
            let divElement = document.createElement('div');
            parentElement.appendChild(divElement);
            let pokemonAnchor = document.createElement('a');
            divElement.appendChild(pokemonAnchor);
            pokemonAnchor.setAttribute('class', 'pokemon-list-element');
            pokemonAnchor.setAttribute('href', `../Details/details.html?pokemonName=${pokemonList[index].name}`);
            let anchorName = document.createElement('span');
            pokemonAnchor.appendChild(anchorName);
            anchorName.setAttribute('class', 'pokemon-name');
            anchorName.innerHTML = `${pokemonList[index].name}`;
    }

    getElementFromSearch(search, element) {
        const searchArray = search.split('?')[1].split('&').map(element => element.split('='));
        const nameArray = searchArray.find(value => value.includes(element));
        return nameArray[1];
    }

    createGroupElement(parentElement, pokemon, pokemonList, groupName, index){
        let listElement = document.createElement('li');
        parentElement.appendChild(listElement);
        listElement.setAttribute('class', 'capitalize');
        let pokemonAnchor = document.createElement('a');
        listElement.appendChild(pokemonAnchor);
        pokemonAnchor.setAttribute('class', `${groupName}-list-element`);
        pokemonAnchor.setAttribute('href', `../${groupName}/${groupName}.html?pokemonName=${pokemon.name}&${groupName}Name=${pokemonList[index][groupName].name}`);
        let anchorName = document.createElement('span');
        pokemonAnchor.appendChild(anchorName);
        anchorName.setAttribute('class', `${groupName}-name`);
        this.updateValueHtml(anchorName, 'innerHTML', `${pokemonList[index][groupName].name}`);
    }

    getDashValuesFromPercent(circle, percent, maxValue) {
        let radius = circle.getAttribute('r');
        let circumference = Math.PI * radius * 2;
        percent = percent < 0 ? 0 : percent > maxValue ? maxValue : percent;
        let dashOffSet = circumference - percent / maxValue * circumference;
        let dashArray = circumference;
        return [dashOffSet, dashArray];
    }

    setStrokeDashoffsetInCircle(circle, percent, maxValue) {
        circle.style.strokeDashoffset = this.getDashValuesFromPercent(circle, percent, maxValue)[0];
    }

    setStrokeDasharrayInCircle (circle, percent, maxValue) {
        circle.style.strokeDasharray = this.getDashValuesFromPercent(circle, percent, maxValue)[1];
    }

    updateValueHtml(element, property, value) {
        element[property] = !!value ? value : '-';
    }

    setPokemonAbility(ability) {
        _pokemonAbility = ability;
    }

    getPokemonAbility() {
        return _pokemonAbility;
    }

    loadPokemonAbilityByName(abilityName) {
        const url = `https://pokeapi.co/api/v2/ability/${abilityName}`;

        return fetch(url)
        .then(response => response.json())
        .then(ability => {
            _pokemonAbility = ability;
            return ability;
        })
    }

    getDescriptionAbilityByLanguage(lang) {
        if (_pokemonAbility) {
            const effectDescription = _pokemonAbility.effect_entries.find(element => element.language.name === lang);
            return effectDescription.effect;
        }
    }
}

const store = new Store();

module.exports = Store;