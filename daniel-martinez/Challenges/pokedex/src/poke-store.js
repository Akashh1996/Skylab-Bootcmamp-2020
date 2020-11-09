let _pokemons = {results: [{name: "", url:""}]};
let _pokemon = {sprites: {other: {"official-artwork": {front_default: "..."}}}, abilities:[{ability: {name: ''}}]};
let abilityObj = {'effect_entries':[{language:{name: 'en'}, effect: ''}]}


class Pokedex {
    async loadPokemons(page){
        let url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page*100}`;
        try {
            const response = await fetch(url);
            const value = await response.json();
            _pokemons = value;
        } catch {
            _pokemons = {results: null};
        }
    }

    getPokemons(){ 
        return _pokemons;
    }

    getPokemonNum(pokemonInList){
        return pokemonInList["url"].slice(34,-1);
    }

    getPokemon(){
        return _pokemon;
    }

    async loadPokemonsFromAPIById(pokemonId){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        try {
        const response = await fetch(url);
        const pokemonDetailObj = await response.json();
        _pokemon = pokemonDetailObj;
        } catch {
            _pokemon =  null;
        } 
    }

    setListOfPokemons(){
        let array = this.getPokemons().results;
        let liElem = '';
        for (let pokemonArrayIndex = 0; pokemonArrayIndex < array.length; pokemonArrayIndex++){
            liElem +=
            `<a href="./../detail/detail.html?n=${this.getPokemonNum(array[pokemonArrayIndex])}&name=${array[pokemonArrayIndex].name}">
            <li class="liElement"><b>n.º${this.getPokemonNum(array[pokemonArrayIndex])}</b> ${array[pokemonArrayIndex].name}</li></a>`
        }
        return liElem;
    }

    backAndNextButtons(page){
        if (page !== 0){
            let aElem= `<a href="./list.html?page=${page-1}" id="back-button">< Back</a>`;
            aElem += `<a href="./list.html?page=${page+1}" id="next-button">Next ></a>`;
            return aElem;
        } else {
            return `<a href="./list.html?page=${page+1}" id="next-button">Next ></a>`;
        }
    }

    pokemonDetailTitle(pokemonId, pokemonName){
        return `#${pokemonId}: ${pokemonName}`
    }

    setPokemonImage() {
        return `<img src="${_pokemon["sprites"]["other"]["official-artwork"]["front_default"]}" alt="pokemon-image-img">`
    }

    setAbilitiesList(){
        let liElem = '';
        let array = _pokemon['abilities'];
        for (let index = 0; index < array.length; index++){
            liElem+= `<a href="./../ability/ability.html?ability=${array[index].ability.name}"><li class="abilityLi">${array[index].ability.name.replace('-',' ')}</li></a>`;
        }
        return liElem;
    }

    async loadAbilityFromAPI(ability){
        const url = `https://pokeapi.co/api/v2/ability/${ability}`;
        try {
            const response = await fetch(url);
            const value = await response.json();
            abilityObj = value;
        } catch {
            abilityObj = null;
        }
    }

    getAbilityObj(){
        return abilityObj;
    }

    getAbilityDescription(){
        let abilityObject = this.getAbilityObj();
            for (let i = 0; i< abilityObject['effect_entries'].length; i++){
                if (abilityObject['effect_entries'][i]['language']['name']==='en'){
                    return abilityObject['effect_entries'][i]['effect'];
                }
            }
    }
    
}

let _pokedex = new Pokedex;
let pokedex = _pokedex;
module.exports = pokedex;