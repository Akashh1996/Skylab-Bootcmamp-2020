import typeActions from '../actions/type-actions';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'AUTH_CHANGE';
let user;

class AuthStore extends EventEmitter {
	emitChange() {
		this.emit(CHANGE);
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	getUser() {
		return user;
	}
}

const authStore = new AuthStore();

dispatcher.dispatch((action) => {
	switch (action.types) {
		case typeActions.AUTH_LOGIN:
			authStore.emitChange();
			break;
		case typeActions.AUTH_LOGOUT:
			authStore.emitChange();
			break;
		//estos dos ultimos casos, si no tienen break, haran break en el break del default.
		case typeActions.AUTH_LOGIN_ERROR:
		case typeActions.AUTH_LOGOUT_ERROR:
		default:
			break;
	}
});

export default authStore;
