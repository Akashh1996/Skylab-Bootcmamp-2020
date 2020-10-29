import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let heroes = [];

export class HeroStore extends EventEmitter {
	static getHeroes() {
		return heroes;
	}

	static deleteHero(heroId) {
		return heroes.filter((hero) => hero.id !== heroId);
    }
    
    static sliceHeroes(amount) {
        if(!amount) {
            return [];
        }
        return heroes.slice(0, amount);
    }

	static updateHero(updatedHero) {
		return heroes.map((hero) => {
			if (updatedHero.id === hero.id) {
				return updatedHero;
			} else {
				return hero;
			}
		});
	}

    getHeroById(heroId) {
        return heroes[heroId];
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
			heroes = action.payload;
			heroStore.emitChange();
			break;
		case actionTypes.DELETE_HERO:
			heroes = heroStore.deleteHero(action.payload);
			heroStore.emitChange();
			break;
		case actionTypes.ADD_HERO:
			heroes = [...heroes, action.payload];
			heroStore.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			heroes = heroStore.updateHero(action.payload);
			heroStore.emitChange();
            break;
        case 'GET_HERO_DATA':
            heroes = heroStore.getHeroById(action.payload);
            heroStore.emitChange();
            default:
			break;
	}
});

export default heroStore;
