import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, dispatch }) {
	if (!pokemonList && !pokemonList?.lenght) {
		dispatch(requestPokemons());
	}
	return (
		<h1>
			<>
				{pokemonList &&
					pokemonList?.lenght &&
					pokemonList.map((pokemon) => {
						return <p>{pokemon.name} </p>;
					})}
			</>
		</h1>
	);
}

function mapStateToProps(state) {
	return {
		pokemonList: state.pokeReducer.pokemonList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({}, dispatch),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
