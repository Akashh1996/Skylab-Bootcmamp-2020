import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes;

class HeroStore extends EventEmitter {
	getHeroes() {
		return _heroes;
	}

	getTopHeroes() {
		try {
			return this.getHeroes().slice(0, 4);
		} catch {
			return null;
		}
	}

	getHeroById(heroId) {
		return this.getHeroes().find((element) => element.id === heroId);
	}

	deleteHero(heroId) {
		return _heroes.filter((hero) => {
			return hero.id !== heroId;
		});
	}

	getDashOffSetfromPercent(circle, percent) {
		let radius = circle.getAttribute('r');
		let circumference = Math.PI * radius * 2;
		percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
		let dashOffSet = circumference - (percent / 100) * circumference;
		let dashArray = circumference;
		return [dashOffSet, dashArray];
	}

	setDashParamsInCircle(circle, percent) {
		const [dashOffSet, dashArray] = this.getDashOffSetfromPercent(
			circle,
			percent
		);
		circle.style.strokeDashoffset = dashOffSet;
		circle.style.strokeDasharray = dashArray;
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

		default:
			break;
	}
});

export default heroStore;
