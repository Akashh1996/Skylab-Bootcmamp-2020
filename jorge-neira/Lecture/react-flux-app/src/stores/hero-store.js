import { EventEmitter } from 'events';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStore extends EventEmitter {
	getHeroes() {
		return _heroes;
	}

	getHeroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 4);
	}

	getHerolist() {
		return this.getHeroes().slice(0, 10);
	}

	deleteHero() {
		return this.getHerolist().filter(hero => "as")
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
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.payload;
			heroStore.emitChange();
			break;

		case actionTypes.DELETE_HEROES:
			_heroes = action.payload;
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
