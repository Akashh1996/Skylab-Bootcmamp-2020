let _pokemons;
let _pokemon;

class Pokedex {
    loadPokemons(page){
        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page*100}`)
        .then((response) =>{
            return response.json();
        }).then((value) => {
            _pokemons = value;
        })
    }

    getPokemons(page){ 
        return _pokemons["results"];
    }

    getPokemonNum(pokemonInList){
        return pokemonInList["url"].slice(34,-1);
    }

    loadPokemonsFromAPIById(pokemonId){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        return fetch(url)
        .then((response) => response.json())
        .then((pokemonDetailObj) => {
            _pokemon = pokemonDetailObj;
        })
    }

    setListOfPokemons(){
        let array = this.getPokemons();
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
            liElem+= `<a href="./../ability/ability.html?ability=${array[index].ability.name}">
            <li class="abilityLi">${array[index].ability.name}</li></a>`;
        }
        return liElem;
    }
}

let _pokedex = new Pokedex;
let pokedex = _pokedex;
module.exports = pokedex;