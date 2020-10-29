import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../action-creators/action-types';

let _pokemonList;
let _pokemon;

class PokemonStore extends EventEmitter {
	getPokemonList() {
		return _pokemonList;
	}

	getPokemon() {
		return _pokemon;
	}

	getPokemonByName(pokemonName) {
		return _pokemonList.find((foundPokemon) => {
			return foundPokemon.name === pokemonName;
		});
	}

	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}
}

const pokemonStore = new PokemonStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			_pokemonList = action.payload;
			pokemonStore.emitChange();
			break;

		case actionTypes.LOAD_POKEMON:
			_pokemon = action.payload;
			pokemonStore.emitChange();
			break;

		default:
			break;
	}
});

export default pokemonStore;
