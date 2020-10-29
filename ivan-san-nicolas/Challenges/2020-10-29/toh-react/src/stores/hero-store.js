import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { getHeroById } from '../actions/hero-actions';

const CHANGE = 'CHANGE';
let _heroes = [];
let _actualHero;

class HeroStore extends EventEmitter {
	getHeroes() {
		return _heroes;
	}

	getHeroById() {

		return _actualHero;
	}

	sliceHeroes(amount) {
		if (!amount) {
			return _heroes;
		} else {
			return _heroes.slice(0, amount);
		}
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
			debugger;
			_heroes = [..._heroes, action.payload];
			heroStore.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			_heroes = heroStore.updateHero(action.payload);
			heroStore.emitChange();
			break;
		
		case actionTypes.GET_HERO:
			_actualHero = heroStore.getHeroById(action.payload);
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
