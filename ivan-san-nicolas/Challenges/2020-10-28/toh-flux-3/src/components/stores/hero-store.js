import { EventEmitter } from "events";
import dispatch from '../../dispatcher/dispatcher';
import actionTypes from '../../actions/action-types';
import dispatcher from "../../dispatcher/dispatcher";

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
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }
}

const heroStore = new HeroStore();

dispatcher.register((action) => {
    debugger;
    switch (action.type) {
        case actionTypes.LOAD_HERO:
            _heroes = action.payload;
            heroStore.emitChange();
            break;
        case actionTypes.DELETE_HERO:
            debugger;
            _heroes = _heroes.filter((hero) => hero.id !== action.payload);
            heroStore.emitChange();
            break;
        
        default:
            break;
    }
})

export default heroStore;