import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _Options;
class OptionStore extends EventEmitter {
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
		return _Options;
	}
}

const optionStore = new OptionStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_OPTIONS':
			_Options = action.data;
			optionStore.emitChange();
			break;

		default:
			break;
	}
});

export default optionStore;
