let _pokemons=[];
let _pokemon;
let _abilities;
let _definition;

class PokeStore{
    getPokemons(){
        return _pokemons;

    }
    getPokemon(){
        return _pokemon;

    }
    getAbility(){
        return _abilities;
    }
    getDefinition(){
        return _definition;
    }
    getPokemonAbility(pokemonAbility){
        let url=`https://pokeapi.co/api/v2/ability/${pokemonAbility}`
        return fetch(url)
        .then((response)=>response.json())
        .then((pokemonAbilities)=>{
            _abilities=pokemonAbilities;
        })
        

    }
    getDefinition(abilityDefinition){
        let url=`https://pokeapi.co/api/v2/ability/${abilityDefinition}`
        return fetch(url)
        .then((response)=>response.json())
        .then((abilityDefinition)=>{
            _definition=abilityDefinition;
        })

    }
    loadPokemonsFromAPI(){
        let url="https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
        return fetch(url)
        .then((response)=> response.json())
        .then((pokemons)=>{
            _pokemons=pokemons;
        });



    }
    loadPokemonsFromAPIById(pokemonId){
        const url=`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        return fetch(url)
        .then((response)=>response.json())
        .then((pokemonDetailObject)=>{
            _pokemon=pokemonDetailObject;
        })

    }
}
module.exports=PokeStore;