let _pokedex;
let _pokedexData;

class Pokemonstore {

    loadPokedex() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then((response) => { return response.json()})
        .then((pokedex) => {
          _pokedex = pokedex.results;
        })
    }

    getPokemons() {
        return _pokedex;
    }

    getPokemonData() {
        return _pokedexData;
    }

    loadPokedexDataByName(pokemonName) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        return fetch(url)
        .then((response) => { return response.json()})
        .then((pokemonData) => {
            _pokedexData = pokemonData;
        });
    }

    getTenPokemons(list) {
        return this.getPokemons(list).slice(0,10);
    }
}

const store = new Pokemonstore();

module.exports = store;





// let _pokedex = [];
// let _pokedexDataPokemon;

// class PokemonStore {

//     pokedexData() {
//         return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
//         .then((response) => response.json())
//         .then((pokedex) => {
//             _pokedex = pokedex.results;
//         })
//     }

//     getPokedex() {
//         return _pokedex;
//     }

//     getPokemonName() {
//         return _pokedexDataPokemon;
//     }



//     getPokedexData(pokemonID) {
//         let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
//         return fetch(url)
//         .then((response) => response.json())
//         .then((pokemonDetail) => {
//             _pokedexDataPokemon = pokemonDetail;
//         });
    
//     }
// }

// module.exports = PokemonStore;


