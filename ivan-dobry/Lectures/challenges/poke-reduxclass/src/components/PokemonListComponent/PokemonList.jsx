import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	requestPokemons,
	createRandomVariable
} from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	if (!pokemonList && !pokemonList?.length) {
		dispatch(requestPokemons());
	}

	return (
		<>
			{pokemonList &&
				pokemonList.length &&
				pokemonList.map((pokemon) => {
					return <p>{pokemon.name}</p>;
				})}
		</>
	);
}

function mapStateToProps({ pokeReducer }) {
	debugger;
	return {
		pokemonList: pokeReducer.pokemonArray,
		randomNumber: pokeReducer.randomNumber
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ createRandomVariable }, dispatch),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
