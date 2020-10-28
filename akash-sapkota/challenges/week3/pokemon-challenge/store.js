let _pokeMonList;
let _pokeDetail
let pokemonAbility
class Store {
    /*  getpokemonData() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=1')
            .then((response) => response.json())
            .then((pokemon) => {
                _pokeMonList = pokemon.results;

            });
    }
 */
    async getpokemonData() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=1"
        const urlTestError = "https://pokeapfghjkjhgfghnmnhgi.co/api/v2/pokemon?limit=100&offset=1"
        try {
            const response = await fetch(url)
            const pokemon = await response.json()
            _pokeMonList = pokemon.results
        } catch (error) {
            console.log("there was an error", error);
            _pokeMonList = []
        }
    }

    getpokemonList() {
        return _pokeMonList;
    }

    /*   getPokeMonDetail(name) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => response.json())
            .then((pokemon) => {
                pokeDetail = pokemon;
            });
    }
 */
    async getPokeMonDetail(name) {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
        const url1 = `https://pokeatrgyhjkjhgyftdpi.co/api/v2/pokemon/${name}/`
        try {
            const response = await fetch(url)
            const pokeDetail = await response.json()
            _pokeDetail = pokeDetail
        } catch (error) {
            console.log("there was an error", error);
            _pokeDetail = null
        }
    }

    pokeMonDetail() {
        return _pokeDetail;
    }



    getPokemonAbility(name) {
        return fetch(`https://pokeapi.co/api/v2/ability/${name}/`)
            .then((response) => response.json())
            .then((ability) => {
                pokemonAbility = ability;

            });
    }
    pokeMonDetailAbility() {
        return pokemonAbility;
    }

}

const store = new Store();

module.exports = store;