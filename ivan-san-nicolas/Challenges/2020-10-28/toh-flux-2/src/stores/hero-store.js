import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

let _heroes = [];
const CHANGE = 'CHANGE';

class HeroStore extends EventEmitter {

    getHeroes() {
        return _heroes;
    }

    addEventListener(callback) {
        this.on(CHANGE, callback);
    }
    
    removeEventListener(callback) {
        this.removeListener(CHANGE, callback)
    }

    emitChange() {
        this.emit(CHANGE)
    }
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_HERO:
            _heroes = action.payload;
            heroStore.emitChange();
            break;
    
        default:
            break;
    }
})

export default heroStore;
