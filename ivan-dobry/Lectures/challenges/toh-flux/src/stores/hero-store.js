import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStore extends EventEmitter {
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

	getHeroDetail() {
		let heroString = window.location.href.split('/');
		let heroId = heroString[heroString.length - 1];
		return _heroes.find((hero) => {
			return hero.id === +heroId;
		});
	}

	getTopHeroes() {
		return _heroes.slice(1, 5);
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
		case actionTypes.DELETE_HERO:
			_heroes = heroStore.deleteHero(action.payload);
			heroStore.emitChange();
			break;
		case actionTypes.ADD_HERO:
			_heroes = [..._heroes, action.payload];
			heroStore.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			_heroes = heroStore.updateHero(action.payload);
			heroStore.emitChange();
			break;
		default:
			break;
	}
});

export default heroStore;
