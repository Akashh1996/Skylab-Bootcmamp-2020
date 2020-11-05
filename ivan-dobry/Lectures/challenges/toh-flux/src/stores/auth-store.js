import React, { useReducer } from 'react';
import { EventEmmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

let user;
const CHANGE = 'AUTH_CHANGE';

class AuthStore extends EventEmmitter {
	emitChange() {
		this.emitChange(CHANGE);
	}

	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	removeChangeListener(callback) {
		this.removeChangeListener(CHANGE, callback);
	}

	getUser() {
		return user;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.AUTH_SIGNOUT:
			user = action.payload;
			authStore.emitChange();
			break;
		case actionTypes.AUTH_LOGIN:
			user = action.payload;
			authStore.emitChange();
			break;

		case actionTypes.AUTH_LOGIN_ERROR:
		case actionTypes.AUTH_SIGNOUT_ERROR:
		default:
			break;
	}
});

export default authStore;
