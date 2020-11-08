import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE = 'CHANGE';

let pokemons;

class PokeStore extends EventEmitter {
	getPokemons() {
		return pokemons;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.on(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}
}

const pokeStore = new PokeStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			pokemons = action.payload;
			pokeStore.emitChange();
			break;
		default:
			break;
	}
});

export default pokeStore;
