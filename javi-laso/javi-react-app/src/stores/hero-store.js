import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

let _hero;

class HeroStore extends EventEmitter {
	addEventListener(callback) {
		debugger;
		this.on('CHANGE', callback);
	}

	removeEventListener(callback) {
		debugger;
		this.removeListener('CHANGE', callback);
	}

	emitChange() {
		debugger;
		this.emit('CHANGE');
	}

	getHero() {
		debugger;
		return _hero;
	}
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
	debugger;
	switch (action.type) {
		case 'LOAD_HERO':
			_hero = action.data;
			heroStore.emitChange();
			break;

		default:
			break;
	}
});

export default heroStore;
