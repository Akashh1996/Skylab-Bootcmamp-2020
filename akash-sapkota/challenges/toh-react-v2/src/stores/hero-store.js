import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];
let _topHeroes = [];
let _heroDetail = [];

class HeroStore extends EventEmitter {
	getHeroes() {
		return _heroes;
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
	getTopHeroes() {
		_topHeroes = _heroes.slice(1, 5);
		return _topHeroes;
	}
	getHeroDetail(id) {
		debugger;
		_heroDetail = _heroes.find((hero) => hero.id === +id);
		return _heroDetail;
	}
}
const heroStore = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.payload;
			heroStore.emitChange();
			break;
		default:
			break;
	}
});
export default heroStore;
