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
		this.emit('CHANGE');
	}

	getHero() {
		return _flight;
	}
}

const flightStore = new FlightStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_HERO':
			_flightStore = action.data;
			flightStore.emitChange();
			break;

		default:
			break;
	}
});

export default flightStore;
