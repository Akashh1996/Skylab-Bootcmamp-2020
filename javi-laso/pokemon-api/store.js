let pokemonList = [];
let pokemon;

class Store {

    getPokemonList(){
        debugger;
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
            pokemonAnchor.setAttribute('href', `../Details/details.html?name=${pokemonList[index].name}`);
            let anchorName = document.createElement('span');
            pokemonAnchor.appendChild(anchorName);
            anchorName.setAttribute('class', 'pokemon-name');
            anchorName.innerHTML = `${pokemonList[index].name}`;
    }

    getNameFromSearch(search) {
        const searchArray = search.split('?')[1].split('&').map(element => element.split('='));
        const nameArray = searchArray.find(value => value.includes("name"));
        return nameArray[1];
    }

    createAbilityElement(parentElement, pokemonList, groupName, index){
        let listElement = document.createElement('li');
        parentElement.appendChild(listElement);
        listElement.setAttribute('class', 'capitalize');
        let pokemonAnchor = document.createElement('a');
        listElement.appendChild(pokemonAnchor);
        pokemonAnchor.setAttribute('class', `${groupName}-list-element`);
        let anchorName = document.createElement('span');
        pokemonAnchor.appendChild(anchorName);
        anchorName.setAttribute('class', `${groupName}-name`);
        anchorName.innerHTML = `${pokemonList[index][groupName].name}`;
    }

    getDashValuesFromPercent(circle, percent) {
        let radius = circle.getAttribute('r');
        let circumference = Math.PI * radius * 2;
        percent = percent < 0 ? 0 : percent > 200 ? 200 : percent;
        let dashOffSet = circumference - percent / 200 * circumference;
        let dashArray = circumference;
        return [dashOffSet, dashArray];
    }

    setStrokeDashoffsetInCircle(circle, percent) {
        circle.style.strokeDashoffset = this.getDashValuesFromPercent(circle, percent)[0];
    }

    setStrokeDasharrayInCircle (circle, percent) {
        circle.style.strokeDasharray = this.getDashValuesFromPercent(circle, percent)[1];
    }

    updateValueHtml(element, property, value) {
        element[property] = !!value ? value : '-';
    }
}

const store = new Store();

module.exports = Store;