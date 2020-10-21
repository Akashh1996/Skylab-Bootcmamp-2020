let _pokemon;
let _detail;

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

}

const store = new Store();
