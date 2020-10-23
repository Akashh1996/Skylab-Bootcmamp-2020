let _pokemonList;
let _pokemonDetail;
let _pokemonAbility;
let abilityId;

class Store {

    async getPokemonData() {
        let url = 'https://pokeapi.co/api/v2/poksemon?limit=20&offset=0';
        try {
            const response = await fetch(url);
            const pokemon = await response.json();
            _pokemonList = pokemon.results;
        } catch (error) {
            _pokemonList = null;
        }
    }

    getPokemonList() {
        return _pokemonList;
    }
    
    async getPokemonDetail(name) {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        try {
            const response = await fetch(url);
            const pokemonDetail = await response.json();
            _pokemonDetail = pokemonDetail;
        } catch (error) {
            _pokemonDetail = null;
        }
   
    }

    async getPokemonAbility(ability) {
        let url = `https://pokeapi.co/api/v2/ability/${ability}`;

        try {
            const response = await fetch(url);
            const pokemonability = await response.json();
            return _pokemonAbility = pokemonability.effect_entries[1].effect;
        } catch (error) {
            _pokemonAbility = null;
        }
    }
	
    pokemonDetail() {
        return _pokemonDetail;
    }

    getPokemonAbilitiesDetail(){
        return _pokemonDetail.abilities[0].ability.name
    }


    getTenPokemons() {
        let pokemonList = _pokemonList
        debugger;
        if (pokemonList === null) {
            return null;
        } else {
        return pokemonList.slice(1, 11);
        }
    }

    getPokemonAbilityId () {
        let abilityUrl = _pokemonDetail.abilities[0].ability.url.split('/');
        abilityId = abilityUrl[6];
        return abilityId;
    }
}

const store = new Store();

module.exports = store;

