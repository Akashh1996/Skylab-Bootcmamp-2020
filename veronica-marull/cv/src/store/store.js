import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/actionTypes';

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
	emitChange() {
		this.emit(CHANGE);
	}
}

const store = new DataStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_DATA:
			dataCv = action.payload[0];
			store.emitChange();
			break;

		default:
			break;
	}
});

export default store;
