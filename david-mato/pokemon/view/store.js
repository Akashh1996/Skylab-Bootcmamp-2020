let _pokemons = [];

class Store {
    async loadPokemons() {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=200');
        let objWithResults = await response.json();
        let arrOfPokemons = await objWithResults.results;

        for (const pokemonObj of arrOfPokemons) {
            let response = await fetch(`${pokemonObj.url}`)
            let pokemon = await response.json();
            _pokemons.push(pokemon);
        }
    }
}

const store = new Store();