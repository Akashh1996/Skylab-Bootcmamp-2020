import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher.js';
import actionTypes from '../actions/action-types.js';

const change = 'change';
let heroes = [];
let hero = [];

class HeroStore extends EventEmitter {
	getHeroes() {
		return heroes;
	}

	getHero() {
		return hero;
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 4);
	}

	addEventListener(callback) {
		this.on(change, callback);
	}

	removeEventListener(callback) {
		this.removeListener(change, callback);
	}

	emitChange() {
		this.emit(change);
	}
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			heroes = action.payload;
			heroStore.emitChange();
			break;

		case actionTypes.LOAD_HERO:
			hero = action.payload;
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
