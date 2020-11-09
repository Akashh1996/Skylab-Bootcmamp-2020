import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { TOKENCHANGE } from './constants';

class TokenStore extends EventEmitter {
	constructor() {
		super();
		this.spotifyToken = null;
		this.score = 0;
		this.fails = 0;
	}
	getToken() {
		return this.spotifyToken;
	}

	getScore() {
		return this.score;
	}

	getFails() {
		return this.fails;
	}

	addEventListener(callback) {
		this.on(TOKENCHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(TOKENCHANGE, callback);
	}

	emitChange() {
		this.emit(TOKENCHANGE);
	}
}

const tokenStore = new TokenStore();

tokenStore.dispatchToken = dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_TOKEN:
			tokenStore.spotifyToken = action.payload;
			tokenStore.emitChange();
			break;
		case actionTypes.SUM_SCORE:
			tokenStore.score++;
			tokenStore.emitChange();
			break;
		case actionTypes.SUM_FAILS:
			tokenStore.fails++;
			tokenStore.emitChange();
			break;
		default:
			break;
	}
});

export default tokenStore;
