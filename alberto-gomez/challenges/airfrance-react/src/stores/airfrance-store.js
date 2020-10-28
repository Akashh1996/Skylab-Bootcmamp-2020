import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _flightOptions = [];

class AirFranceStore extends EventEmitter {
	getFlightOptions() {
		return _flightOptions;
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

const airfranceStore = new AirFranceStore();

dispatcher.register((action) => {
	debugger;
	switch (action.type) {
		case actionTypes.LOAD_FLIGHTS:
			_flightOptions = action.payload;
			airfranceStore.emitChange();
			break;

		default:
			break;
	}
});

export default airfranceStore;
