import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStores extends EventEmitter {
	getHeroes() {
		return _heroes;
	}

	deleteHero(heroId) {
		return _heroes.filter((hero) => hero.id !== heroId);
	}

	updateHero(updatedHero) {
		return _heroes.map((hero) => {
			if (updatedHero.id === hero.id) {
				return updatedHero;
			} else {
				return hero;
			}
		});
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

const heroStores = new HeroStores();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.payload;
			heroStores.emitChange();
			break;
		case actionTypes.DELETE_HERO:
			_heroes = heroStores.deleteHero(action.payload);
			heroStores.emitChange();
			break;
		case actionTypes.ADD_HERO:
			_heroes = [..._heroes, action.payload];
			heroStores.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			_heroes = heroStores.updateHero(action.payload);
			heroStores.emitChange();
			break;

		default:
			break;
	}
});

export default heroStores;
