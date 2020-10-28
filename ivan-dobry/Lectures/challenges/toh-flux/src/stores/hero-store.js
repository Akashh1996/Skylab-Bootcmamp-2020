import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStore extends EventEmitter {
	getHoroes() {
		return _heroes;
	}

	deleteHero(heroId) {
		return _heroes.filter((hero) => hero.id !== heroId);
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			heroStore.emitChange();
			_heroes = action.payload;
			break;
		case actionTypes.DELETE_HEROES:
			_heroes = deleteHero(action.payload);
			heroStore.emitChange();
			break;
		case actionTypes.ADD_HERO:
			heroStore.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
