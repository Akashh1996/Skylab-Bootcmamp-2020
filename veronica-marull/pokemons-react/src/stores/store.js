import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE = 'CHANGE';

let pokemons;
let detail;

class PokeStore extends EventEmitter {
	getPokemons() {
		return pokemons;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}
	getDetail() {
		return detail;
	}
}

const pokeStore = new PokeStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_POKEMONS:
			pokemons = action.payload;
			pokeStore.emitChange();
			break;
		case actionTypes.POKEMONS_DETAIL:
			detail = action.payload;
			pokeStore.emitChange();
			break;
		default:
			break;
	}
});

export default pokeStore;
