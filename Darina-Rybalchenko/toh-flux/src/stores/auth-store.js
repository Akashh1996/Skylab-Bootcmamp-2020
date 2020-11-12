import { EventEmitter } from 'events'
import dispatcher from './../dispatcher/dispatcher'
import actionTypes from './../actions/action-types'


const CHANGE = 'CHANGE';
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

    // eslint-disable-next-line class-methods-use-this
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
        case actionTypes.AUTH_SIGNOUT:
            user = null;
            authStore.emitChange();
            break;

        case actionTypes.AUTH_LOGIN_ERROR:
        case actionTypes.AUTH_SIGNOUT_ERROR:
        default:
            break;
    }
});

export default authStore;
