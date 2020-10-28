import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from './../actions/action-types';
import { loadViajeform } from './../actions/action-creators';

let _viajeform;

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

	getViajeform() {
		return _viajeform;
	}
}

const airfranceStore = new AirfranceStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_VIAJEFORM:
			_viajeform = action.data;
			airfranceStore.emitChange();
			break;

		default:
			break;
	}
});

export default airfranceStore;
