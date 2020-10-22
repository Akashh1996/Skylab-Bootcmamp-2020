let _pokemon;
let _detail;
let _abilities;

class Store {
    loadPokedex() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then((response) => response.json())
        .then((value) => {
            _pokemon = value.results;
        })
    }
    getPokemon() {
        return _pokemon;
    }

    getDetails(name){
         return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((value) => {
            _detail = value;
            return _detail;
        })
    }
    getName(url){
        const search = url.split('=');
        const name = search[1];
        return name;
    }

    getAbilities(getId){
        return fetch(`https://pokeapi.co/api/v2/ability/${getId}`)
        .then((response) => response.json())
        .then((value) => {
            _abilities = value;
            return _abilities;
        })
    }
}

const store = new Store();

module.exports = Store;
