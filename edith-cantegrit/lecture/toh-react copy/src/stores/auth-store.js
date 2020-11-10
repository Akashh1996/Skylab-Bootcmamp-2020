import { EventEmitter } from 'events';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';

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
			user = action.type;
			authStore.emitChange();
			break;
		case actionTypes.AUTH_SIGNOUT:
			user = action.type;
			authStore.emitChange();
			break;
		case actionTypes.AUTH_LOGIN_ERROR:
			user = action.type;
			authStore.emitChange();
			break;
		case actionTypes.AUTH_SIGNOUT_ERROR:
			user = action.type;
			authStore.emitChange();
			break;
		default:
			break;
	}
});

export default authStore;
