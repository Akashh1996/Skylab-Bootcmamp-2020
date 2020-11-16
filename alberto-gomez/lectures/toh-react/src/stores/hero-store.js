import React from 'react';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];
let _hero;

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
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.payload;
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
