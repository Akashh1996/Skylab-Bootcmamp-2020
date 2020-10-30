import React, {useState, useEffect} from 'react';
import { loadPokemons, loadPokemonById } from '../../actions/poke-actions';
import pokeStore from '../../stores/poke-store';

function Detail(props) {
    debugger;
    const [pokemons, setPokemons] = useState(pokeStore.getPokemons());
    const [pokemonId] = useState(null);
    const [pokemon, setPokemon] = useState(pokeStore.getPokemonById(props.match.params.heroId))

    function handleChange() {
        setPokemon(pokeStore.getPokemons());
    }

    useEffect(() => {
        pokeStore.addEventListener(handleChange);
        
        if (!pokemons || pokemons.length < 1) {
            loadPokemons();
        } else if (!pokemon) {
            loadPokemonById(pokemonId);
        }

    })

    return ( <div>
                {(!pokemonId || !pokemon) && <h1>There is no Pokemon :/</h1>}
            </div>
        
    )
}

export default Detail;