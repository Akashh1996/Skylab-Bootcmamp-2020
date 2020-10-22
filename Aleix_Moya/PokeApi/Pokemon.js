let _pokemon;
let link;
let linkHtml;
let thisPokemon;
class Pokedex{  
    loadPokedex(){
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then((response) => {
            return response.json();
        })
        .then((pokemons) =>{
            _pokemon = pokemons;
            return pokemons;
        });
    }
    getPokedex(){
        return _pokemon;
    }
    getName(name){
        var tempname = name;
        var medioUrl="https://pokeapi.co/api/v2/pokemon/";
        var url = medioUrl.concat(name);
        var myHtml = "http://127.0.0.1:5500/detailedPoke.html#";
        linkHtml = myHtml.concat(tempname);
        return fetch(url)
        .then(() =>{
            link = url;
            return url;
        })
    }
    loadPokemon(link){
        return fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((elPokemon) =>{
            thisPokemon = elPokemon;
            return elPokemon;
        });
    }
    getPokemon(){
        return thisPokemon;
    }
}

const gameFreak = new Pokedex();
module.exports = gameFreak;
