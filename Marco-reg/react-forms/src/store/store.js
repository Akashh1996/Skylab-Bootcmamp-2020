import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _destination;

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
}

const goingAndComing = new GoingAndComing();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_DESTINATION':
			_destination = action.data;
			goingAndComing.emitChange();
			break;

		default:
			break;
	}
});

export default goingAndComing;
