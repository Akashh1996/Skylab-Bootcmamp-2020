import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './../actions/action-types';

let _form;

class AirfranceStore extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}

	getForm() {
		debugger;
		return _form;
	}
}

const airfranceStore = new AirfranceStore();

dispatcher.register((action) => {
	debugger;
	switch (action.type) {
		case actionTypes.LOAD_FORM:
			_form = action.data;
			airfranceStore.emitChange();
			break;

		default:
			break;
	}
});

export default airfranceStore;
