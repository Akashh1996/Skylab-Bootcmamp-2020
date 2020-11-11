import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	if (!pokemonList && !pokemonList?.length) {
		dispatch(requestPokemons());
	}

	return <h1>Pokemon List works</h1>;
}

function mapStateToProps(state) {
	return {
		pokemonList: state.pokeReducer.pokemonList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
