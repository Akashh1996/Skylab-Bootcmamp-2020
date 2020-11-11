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
				pokemonList.length &&
				pokemonList.map((pokemon) => <p>{pokemon.name}</p>)}
		</>
	);
}

function mapStateToProps({ pokeReducer }) {
	return {
		pokemonList: pokeReducer.pokemonList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({}, dispatch),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
