import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _optionsFlights;
let _passengers;
let _classType;

class Store extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}

	getOptionSFlights() {
		return _optionsFlights;
	}

	getPassengers() {
		return _passengers;
	}

	getClassType() {
		return _classType;
	}
}

const store = new Store();

export default store;
