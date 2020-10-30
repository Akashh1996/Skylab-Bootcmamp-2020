import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

let _flight;

class FlightsStore extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}

	getFlight() {
		return _flight;
	}
}

const flightsStore = new FlightsStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_FLIGHT:
			_flight = action.data;
			flightsStore.emitChange();
			break;

		case actionTypes.DELETE_FLIGHT:
			_flight = null;
			flightsStore.emitChange();
			break;

		default:
			break;
	}
});

export default flightsStore;
