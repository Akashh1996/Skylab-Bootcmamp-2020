let _pokemonList;
let _pokemonDetail;
let _pokemonAbility;
let abilityId;

class Store {

    async getPokemonData() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
            const response = await fetch(url);
            const pokemon = await response.json();
            _pokemonList = pokemon.results;
    }

    getPokemonList() {
        return _pokemonList;
    }
    
    async getPokemonDetail(name) {
        try {
            let url = `https://pokeapirsgwrg.co/api/v2/pokemon/${name}/`;
            const response = await fetch(url);
            const pokemonDetail = await response.json();
            _pokemonDetail = pokemonDetail;
            
        } catch (error) {
            console.log("No mola nada")
            _pokemonDetail=false;
            
        }
    }

    async getPokemonAbility(ability) {
        let url = `https://pokeapi.co/api/v2/ability/${ability}`;
        const response = await fetch(url);
        const pokemonabilityList = await response.json();
        return _pokemonAbility = pokemonabilityList.effect_entries[1].effect;
    }
	
    pokemonDetail() {
        return _pokemonDetail;
    }

    getPokemonAbilitiesDetail(){
        return _pokemonDetail.abilities[0].ability.name
    }


    getTenPokemons(list) {
		return this.getPokemonList(list).slice(1, 11);
    }

    getPokemonAbilityId () {
        let abilityUrl = _pokemonDetail.abilities[0].ability.url.split('/');
        abilityId = abilityUrl[6];
        return abilityId;
    }

    getError(){
        let error= 'https://media.giphy.com/media/3o7aDawKyC9xHz3oxG/giphy.gif';
        return error;
    }
}

const store = new Store();

module.exports = store;

