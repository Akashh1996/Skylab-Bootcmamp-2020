let _pokemons = [];
let _pokemon;
let _pokemonAbility;

class PokeStore {
    getPokemons(){
        return _pokemons
    }

    getPokemon() {
        return _pokemon;
    }

    getBaseExperience() {
        return _pokemon && _pokemon.base_experience
    }

    getSpecie() {
        return _pokemon && _pokemon.species.name
    }

    getAbility() {
        return _pokemonAbility;
    }

    async loadPokemonsFromAPI() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
        return _pokemons = await response.json();
    }
        
    async loadPokemonsFromAPIByID(pokemonId) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return _pokemon = await response.json();
    }

    async loadPokemonsFromAPIByAbility(ability) {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
        return _pokemonAbility = await response.json();
    }

}

const pokeStore = new PokeStore();

//module.exports =  PokeStore




