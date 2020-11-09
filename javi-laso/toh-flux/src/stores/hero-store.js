import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes;
let _hero;

class HeroStore extends EventEmitter {
	constructor() {
		super();
		this.getHeroes = HeroStore.getHeroes;
		this.getTopHeroes = HeroStore.getTopHeroes;
		this.getHeroById = HeroStore.getHeroById;
		this.deleteHero = HeroStore.deleteHero;
		this.getDashOffSetfromPercent = HeroStore.getDashOffSetfromPercent;
		this.setDashParamsInCircle = HeroStore.setDashParamsInCircle;
		this.addEventListener = HeroStore.addEventListener;
		this.removeEventListener = HeroStore.removeEventListener;
		this.emitChange = HeroStore.emitChange;
		this.getHero = HeroStore.getHero;
	}

	static getHeroes() {
		return _heroes;
	}

	static getTopHeroes() {
		try {
			return this.getHeroes().slice(0, 4);
		} catch {
			return null;
		}
	}

	static getHero() {
		return _hero;
	}

	static deleteHero(heroId) {
		return _heroes.filter((hero) => {
			return hero.id !== heroId;
		});
	}

	static getDashOffSetfromPercent(circle, percent) {
		let radius = circle.getAttribute('r');
		let circumference = Math.PI * radius * 2;
		percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
		let dashOffSet = circumference - (percent / 100) * circumference;
		let dashArray = circumference;
		return [dashOffSet, dashArray];
	}

	static setDashParamsInCircle(circle, percent) {
		const [dashOffSet, dashArray] = this.getDashOffSetfromPercent(
			circle,
			percent
		);
		circle.style.strokeDashoffset = dashOffSet;
		circle.style.strokeDasharray = dashArray;
	}

	static addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	static removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	static emitChange() {
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

		case actionTypes.LOAD_HERO:
			_hero = action.payload;
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
