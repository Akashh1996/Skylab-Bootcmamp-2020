import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher.js'
import actionTypes from '../actions/action-types.js'

const change = 'change';
let heroes = [];

class HeroStore extends EventEmitter {
    
    getHeroes() {
        return heroes;
    }

    getHeroById(heroId) {
        debugger
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

    getTopHeroes() {
        return this.getHeroes().slice(0,4)
    }

    addEventListener(callback) {
        this.on(change, callback)
    }

    removeEventListener(callback) {
        this.removeListener(change, callback)
    }

    emitChange() {
        this.emit(change)
    }

}

const heroStore = new HeroStore();

dispatcher.register((action) => {
    debugger
    switch (action.type) {
        case actionTypes.load_hero:
            heroes=action.payload
            heroStore.emitChange();
            break;
    
        default:
            break;
    }
})

export default heroStore