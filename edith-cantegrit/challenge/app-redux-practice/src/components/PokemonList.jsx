import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPokemons } from '../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	if (!pokemonList && !pokemonList?.length) {
	}
	return <h1>Pokemon List work</h1>;
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
