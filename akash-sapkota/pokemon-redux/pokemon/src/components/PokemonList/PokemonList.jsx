import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPokemons, createRandomVariable } from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch, actions }) {
    if (!pokemonList && !pokemonList?.length) {
        dispatch(requestPokemons());
    }

    if (pokemonList?.length) { //sino tiene pokemon list, no comproba length coz si no hay list hara length de undefined
        actions.createRandomVariable()
    }

    return (
        <>
            {pokemonList &&
                pokemonList.length &&
                pokemonList.map((pokemon) => <p>{pokemon.name}</p>)}
        </>
    );
}
function mapStateToProps(state) {
    return {
        pokemonList: state.pokeReducer.pokemonList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ createRandomVariable }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);