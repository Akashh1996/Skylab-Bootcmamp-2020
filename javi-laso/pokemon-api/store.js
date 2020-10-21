let pokemonList;
let pokemon;

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
            divElement.setAttribute('class', 'abilities');
            let anchorName = document.createElement('a');
            divElement.appendChild(anchorName);
            divElement.setAttribute('class', 'ability-name');


            let pokemonAnchor = document.createElement('a');
            listElement.appendChild(pokemonAnchor);
            pokemonAnchor.setAttribute('class', 'pokemon-list-element');
            pokemonAnchor.setAttribute('href', `../Details/details.html?name=${pokemonList[index].name}`)
            let anchorName = document.createElement('div');
            pokemonAnchor.appendChild(anchorName);
            anchorName.setAttribute('class', 'pokemon-name');
            anchorName.innerHTML = `${pokemonList[index].name}`;
    }

    getNamefromSearch(search) {
        const searchArray = search.split('=');
        return searchArray[1];
    }

    createAbilityElement(parentElement, pokemon, index){

    }
}

const store = new Store();

module.exports = store;