let _pokemon;
let items;
let link;
let linkHtml;
let thisPokemon;
class Pokedex{  
    async loadPokedex(limit, set){
        let lista ="https://pokeapi.co/api/v2/pokemon?limit="+ limit +"&offset="+ set;
        const response = await fetch(lista)
        const pokemons = await response.json();
        _pokemon = pokemons.results;
        return pokemons;
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
    async loadPokemon(link){
        const response = await fetch(link)
        const elPokemon = await response.json();
        thisPokemon = elPokemon;
        return elPokemon;
    }
    getPokemon(){
        return thisPokemon;
    }
}

const gameFreak = new Pokedex();
module.exports = gameFreak;
