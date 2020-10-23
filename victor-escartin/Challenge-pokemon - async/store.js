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
        let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        const response = await fetch(url);
        const pokemonDetail = await response.json();
        _pokemonDetail = pokemonDetail;
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
}

const store = new Store();

module.exports = store;

