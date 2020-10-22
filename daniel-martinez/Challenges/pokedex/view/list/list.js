let _pokemons;

class PokemonList {
    loadPokemons(page){
        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${page*100}`)
        .then((response) =>{
            return response.json();
        }).then((value) => {
            _pokemons = value;
        })
    }

    getPokemons(){ 
        return _pokemons["results"];
    }

    getPokemonNum(pokemonInList){
        return pokemonInList["url"].slice(34,-1);
    }

    setListOfPokemons(){
        let array = this.getPokemons();
        let liElem = '';
        for (let pokemonArrayIndex = 0; pokemonArrayIndex < array.length; pokemonArrayIndex++){
            liElem +=
            `<a href="./../detail/detail.html?n=${this.getPokemonNum(array[pokemonArrayIndex])}">
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
}

const pokemonList = new PokemonList;

module.exports = pokemonList;