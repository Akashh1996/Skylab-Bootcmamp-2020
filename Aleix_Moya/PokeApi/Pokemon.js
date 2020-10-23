let _pokemon;
let items;
let link;
let linkHtml;
let thisPokemon;
class Pokedex{  
    loadPokedex(limit, set){
        debugger;
        let lista ="https://pokeapi.co/api/v2/pokemon?limit="+ limit +"&offset="+ set;
        return fetch(lista)
        .then((response) => {
            return response.json();
        })
        .then((pokemons) =>{
            _pokemon = pokemons;
            return pokemons;
        });
    }
    loadPag(pagUrl){
        return fetch(pagUrl)
        .then((response) => {
            return response.json();
        })
        .then((vavayagga) =>{
            items = vavayagga;
            return vavayagga;
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
