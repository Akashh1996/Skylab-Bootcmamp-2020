import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

let _options;

class OptionsStore extends EventEmitter {
	addEventListener(callback) {
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		this.emit('CHANGE');
	}

	getOptions() {
		return _options;
	}
}

const optionsStore = new OptionsStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_OPTIONS:
			_options = action.data;
			optionsStore.emitChange();
			break;

		default:
			break;
	}
});

export default optionsStore;
