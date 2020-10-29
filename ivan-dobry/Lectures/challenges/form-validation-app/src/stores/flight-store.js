import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _flight;

class FlightStore extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emitChange('CHANGE');
	}

	getFlight() {
		return _flight;
	}
}

const flightstore = new FlightStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_FLIGHT':
			_flight = action.data;
			flightstore.emitChange();
			break;

		default:
			break;
	}
});
