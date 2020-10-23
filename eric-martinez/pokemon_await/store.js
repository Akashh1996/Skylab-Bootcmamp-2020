let _pokemons;
let _details;
let _abilities;

class Store {
    async loadPokedex() {
        try {
            let url = "https://pokeapi.co/api/v2/00pokemon?limit=100&offset=100";
            const response = await fetch(url);
            const pokemons = await response.json();
            _pokemons = pokemons.results;
        }
        catch{
            return {};
        }
            
    }

    getPokemons() {
        return _pokemons;
    }

    getName(url) {
        const search = url.split('=');
        const name = search[1];
        return name;
    }

    async getDetails(name) {
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const response = await fetch(url);
            const pokemonDetail = await response.json();
            _details = pokemonDetail;
        }catch{
            return {};
        }
        
    }

    async getAbilities(){
        try{
            let url = `https://pokeapi.co/api/v2/ability/${getId}`;
            const response = await fetch(url);
            const abilities = await response.json();
            _abilities = abilities;
        }catch{
            return {};
        }
        
    }
}

const store = new Store();

module.exports = Store;