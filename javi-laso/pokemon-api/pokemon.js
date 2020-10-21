class Pokemon {
    constructor () {
        this.pokemonlist;
    }

    loadPokemonApiPage() {
        const url = 'https://pokeapi.co/api/v2/';
        const promise = fetch(url).then(value => {
            return value.json();
        }).then(value => {
            this.pokemonlist = value;
        });

        return promise;
    }

    loadPokemonList(number, startFrom = 0) {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${startFrom}&limit=${number}`;
        const promise = fetch(url).then(value => {
            return value.json();
        });
        return promise;
    }
}