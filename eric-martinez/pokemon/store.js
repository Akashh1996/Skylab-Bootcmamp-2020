let _pokemon;

class Store {
    loadPokedex() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then((response) => response.json())
        .then((value) => {
            _pokemon = value.results;
        })
    }
    getPokemon() {
        return _pokemon;
	}
}

const store = new Store();
