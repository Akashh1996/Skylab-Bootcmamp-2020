import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _destination;
let _travelers;
let _classOptions;
let _airports;

class GoingAndComing extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}

	getDestination() {
		return _destination;
	}
	getTravelers() {
		return _travelers;
	}
	getClass() {
		return _classOptions;
	}
	getAirports() {
		return _airports;
	}
}



const goingAndComing = new GoingAndComing();


dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_DESTINATION':
			_destination = action.data;
			goingAndComing.emitChange();
			break;
		case 'LOAD_TRAVELERS':
			_travelers = action.data;
			goingAndComing.emitChange();
			break;
		case 'LOAD_CLASS':
			_classOptions = action.data;
			goingAndComing.emitChange();
			break;
		case 'LOAD_AIRPORTS':
			_airports = action.data;
			goingAndComing.emitChange();
			break;
		default:
			break;
	}
});

export default goingAndComing;
