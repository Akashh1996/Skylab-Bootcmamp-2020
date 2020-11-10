import dispatcher from '../dispatcher/dispatcher';
import typeActions from '../actions/type-actions';

import { EventEmitter } from 'events';

const CHANGE = 'CHANGE';
let _heroes = [];
let _hero;

class HeroStore extends EventEmitter {
	getHeroes() {
		return _heroes;
	}

	getHero() {
		return _hero;
	}

	getHeroById() {
		return _heroes.find((hero) => hero.id);
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

const storeHeroes = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case typeActions.LOAD_HEROES:
			_heroes = action.data;
			storeHeroes.emitChange();
			break;
		case typeActions.REMOVE_HEROES:
			_heroes = storeHeroes.emitChange();
			break;
		case typeActions.LOAD_HERO:
			_hero = action.data;
			storeHeroes.emitChange();
			break;
		default:
			break;
	}
});

export default storeHeroes;
