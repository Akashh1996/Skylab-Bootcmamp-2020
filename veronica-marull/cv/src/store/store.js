import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispacher';
import actionTypes from '../actions/actions';

const CHANGE = 'CHANGE';

let dataCv;

class DataStore extends EventEmitter {
	getData() {
		return dataCv;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}
}

const store = new DataStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_DATA:
			dataCv = action.payload;
			store.emitChange();
			break;

		default:
			break;
	}
});

export default store;
