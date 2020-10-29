import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../action-creators/action-types';

let _pokemonList;

class PokemonStore extends EventEmitter {
	getPokemonList() {
		return _pokemonList;
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

		default:
			break;
	}
});

export default pokemonStore;
