import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

let _optionsFlights;
let _passengers;
let _classType;
let _departureCity;
let _arrivalCity;
let _departureDate;
let _arrivalDate;
let date = new Date();

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

	getDepartureCity() {
		return _departureCity;
	}

	getArrivalCity() {
		return _arrivalCity;
	}

	getDepartureDate() {
		return _departureDate;
	}

	getArrivalDate() {
		return _arrivalDate;
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
		case actionTypes.LOAD_MADRIDBARCELONA:
			debugger;
			_departureCity = 'Madrid';
			_arrivalCity = 'Barcelona';
			_departureDate = `${date.getFullYear()}-${
				date.getMonth() + 1
			}-${date.getDate()}`;
			let day = date.getDate();
			let month = day >= 30 ? date.getMonth() + 2 : date.getMonth() + 1;
			day = day > 30 ? 1 : day;
			_arrivalDate = `${date.getFullYear()}-${month}-${day + 1}`;
			store.emitChange();
			break;
		case actionTypes.ERASE_FORM:
			_departureCity = '';
			_arrivalCity = '';
			_departureDate = '';
			_arrivalDate = '';
			store.emitChange();
			break;
		default:
			break;
	}
});

export default store;
