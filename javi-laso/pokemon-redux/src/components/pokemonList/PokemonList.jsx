import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	if (!pokemonList && !pokemonList?.length) {
		dispatch(requestPokemons());
	}

	return (
		<>
			{pokemonList &&
				pokemonList?.map((pokemon) => {
					return <p>{pokemon.name}</p>;
				})}
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
		actions: bindActionCreators({ requestPokemons }, dispatch),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
