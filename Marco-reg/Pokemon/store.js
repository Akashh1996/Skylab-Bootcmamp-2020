let _pokeMonList;
let pokeDetail;
let descriptions;
class Store {
    getDescription(){
        return descriptions;
    }
     async getAbilityDescription(description){
        let url=`https://pokeapi.co/api/v2/ability/${description}`
        try{
            const response= await fetch(url);
            const PokemonDetailDescription= await response.json();
            descriptions=PokemonDetailDescription;

        }catch(error){
            descriptions=null;
        }
        
        
       
        

    }
    getpokemon() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then((response) => response.json())
            .then((pokemon) => {
                _pokeMonList = pokemon.results;
            });
    }

    getpokemonList() {
        return _pokeMonList;
    }
    getPokeMonDetail(name) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => response.json())
            .then((pokemon) => {
                pokeDetail = pokemon;
            });
    }
    pokeMonDetail() {
        return pokeDetail;
    }
    getPokemonName(location) {
        const params = new URLSearchParams(location.search.substring(1));
        const getName = params.get('pokemonName');

        return getName;
    }
    
}

const store = new Store();

module.exports = store;