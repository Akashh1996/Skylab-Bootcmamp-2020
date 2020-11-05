import { EventEmitter } from 'event';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'AUTH_CHANGE';
let user;

class AuthStore extends EventEmitter {
	emitChange() {
		this.emit(CHANGE);
	}
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	getUser() {
		return user;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			user = action.payload;
			authStore.emitChange();
			break;
		case actionTypes.AUTH_SIGOUT:
			user = null;
			authStore.emitChange();
			break;

		case actionTypes.AUTH_LOGIN_ERROR:
		case actionTypes.AUTH_SINGOUT_ERROR:
		default:
			break;
	}
});

export default authStore;
