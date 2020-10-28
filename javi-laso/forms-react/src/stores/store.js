import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

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

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_OPTIONFLIGHTS:
			_optionsFlights = action.payload;
			store.emitChange();
			break;

		case actionTypes.LOAD_PASSENGERS:
			_passengers = action.payload;
			store.emitChange();
			break;

		case actionTypes.LOAD_CLASSTYPE:
			_classType = action.payload;
			store.emitChange();
			break;

		default:
			break;
	}
});

export default store;
